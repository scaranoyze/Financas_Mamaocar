'use strict';

/*
 * MAMÃO CAR — FUNCIONAMENTO DO PAINELf
 * Para editar veículos, preços, custos e caixa, abra dados.js.
 * Este arquivo apenas valida, calcula e apresenta essas informações.
 * Não utiliza localStorage, não grava lançamentos e não altera o GitHub.
 */

// 1. FUNÇÕES DE APOIO
const selecionar = (seletor) => document.querySelector(seletor);
const somar = (lista, obterValor) => lista.reduce((total, item) => total + obterValor(item), 0);

function escapar(texto) {
  const caracteres = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return String(texto ?? '').replace(/[&<>"']/g, (caractere) => caracteres[caractere]);
}

// Os valores são editados em reais, mas calculados em centavos para evitar
// pequenas diferenças de arredondamento em somas com casas decimais.
function centavos(valor, campo, permitirNegativo = false) {
  const convertido = Math.round(valor * 100);
  if (typeof valor !== 'number' || !Number.isFinite(valor)
      || !Number.isSafeInteger(convertido) || (!permitirNegativo && valor < 0)
      || Math.abs(valor * 100 - convertido) > 0.00001) {
    throw new Error(`${campo}: use um número em reais com até duas casas decimais, como 1791.32.`);
  }
  return convertido;
}

function moeda(valorEmCentavos) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valorEmCentavos / 100);
}

function conferirData(valor, campo) {
  if (valor === '') return '';
  if (typeof valor !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
    throw new Error(`${campo}: use uma data como "2026-09-10" ou "" se não informada.`);
  }
  const data = new Date(`${valor}T12:00:00Z`);
  if (Number.isNaN(data.getTime()) || data.toISOString().slice(0, 10) !== valor) {
    throw new Error(`${campo}: a data informada não existe.`);
  }
  return valor;
}

function dataFormatada(valor) {
  return valor ? valor.split('-').reverse().join('/') : 'Não informada';
}

function textoObrigatorio(valor, campo) {
  if (typeof valor !== 'string' || !valor.trim()) throw new Error(`${campo}: preencha o texto entre aspas.`);
  return valor.trim();
}

// 2. LEITURA E CONFERÊNCIA DO ARQUIVO dados.js
function prepararDados(dados) {
  if (!dados || !Array.isArray(dados.veiculos) || !dados.caixa
      || !Array.isArray(dados.caixa.movimentacoes)) {
    throw new Error('Confira se dados.js existe e contém veiculos e caixa.movimentacoes.');
  }

  const ids = new Set();
  const veiculos = dados.veiculos.map((veiculo, indice) => {
    const campo = `Veículo ${indice + 1}`;
    const id = textoObrigatorio(veiculo.id, `${campo} / id`);
    if (ids.has(id)) throw new Error(`${campo}: o id "${id}" já pertence a outro veículo.`);
    ids.add(id);
    if (!Array.isArray(veiculo.custos)) throw new Error(`${campo}: custos deve ser uma lista [ ... ].`);

    return {
      id,
      nome: textoObrigatorio(veiculo.nome, `${campo} / nome`),
      socios: textoObrigatorio(veiculo.socios, `${campo} / sócios`),
      dataEntrada: conferirData(veiculo.dataEntrada, `${campo} / dataEntrada`),
      compra: centavos(veiculo.valorCompra, `${campo} / valorCompra`),
      venda: centavos(veiculo.vendaPrevista, `${campo} / vendaPrevista`),
      custos: veiculo.custos.map((custo, numero) => ({
        descricao: textoObrigatorio(custo.descricao, `${campo} / custo ${numero + 1}`),
        valor: centavos(custo.valor, `${campo} / custo ${numero + 1}`),
        data: conferirData(custo.data, `${campo} / custo ${numero + 1} / data`),
      })),
    };
  });

  const movimentacoes = dados.caixa.movimentacoes.map((item, indice) => {
    const campo = `Caixa / movimentação ${indice + 1}`;
    if (!['entrada', 'saida'].includes(item.tipo)) {
      throw new Error(`${campo}: tipo deve ser "entrada" ou "saida".`);
    }
    return {
      tipo: item.tipo,
      descricao: textoObrigatorio(item.descricao, campo),
      valor: centavos(item.valor, campo),
      data: conferirData(item.data, `${campo} / data`),
    };
  });

  return {
    loja: textoObrigatorio(dados.loja, 'Nome da loja'),
    veiculos,
    saldoInicial: centavos(dados.caixa.saldoInicial, 'Caixa / saldoInicial', true),
    movimentacoes,
  };
}

// 3. CÁLCULOS AUTOMÁTICOS — não edite os totais manualmente.
const totalCustos = (veiculo) => somar(veiculo.custos, (custo) => custo.valor);
const totalInvestido = (veiculo) => veiculo.compra + totalCustos(veiculo);
const lucroPrevisto = (veiculo) => veiculo.venda - totalInvestido(veiculo);

function resumoCaixa(dados) {
  const entradas = somar(dados.movimentacoes.filter((item) => item.tipo === 'entrada'), (item) => item.valor);
  const saidas = somar(dados.movimentacoes.filter((item) => item.tipo === 'saida'), (item) => item.valor);
  return { entradas, saidas, saldo: dados.saldoInicial + entradas - saidas };
}

// 4. APRESENTAÇÃO DOS NÚMEROS E DAS TABELAS
function cartao(rotulo, valor, observacao, destaque = false) {
  return `
    <div class="stat ${destaque ? 'accent' : ''}">
      <label>${escapar(rotulo)}</label>
      <strong>${escapar(valor)}</strong>
      <small>${escapar(observacao)}</small>
    </div>`;
}

function detalhesVeiculo(veiculo) {
  const lucro = lucroPrevisto(veiculo);
  const linhas = veiculo.custos.map((custo) => `
    <tr>
      <td>${escapar(custo.descricao)}</td>
      <td class="date">${dataFormatada(custo.data)}</td>
      <td class="money">${moeda(custo.valor)}</td>
    </tr>`).join('');

  return `
    <section class="panel">
      <div class="detailtitle">
        <div>
          <h2>${escapar(veiculo.nome)}</h2>
          <div class="sub">${escapar(veiculo.socios)} · ${veiculo.dataEntrada ? `Entrada em ${dataFormatada(veiculo.dataEntrada)}` : 'Data de entrada não informada'}</div>
        </div>
      </div>
      <div class="summary">
        <div><span>Valor de compra</span><strong>${moeda(veiculo.compra)}</strong></div>
        <div><span>Venda prevista</span><strong>${moeda(veiculo.venda)}</strong></div>
        <div><span>Lucro estimado</span><strong class="${lucro >= 0 ? 'green' : 'red'}">${moeda(lucro)}</strong></div>
      </div>
      <div class="tabletitle"><h3>Serviços e custos <span class="count">${veiculo.custos.length}</span></h3></div>
      <div class="tablewrap">
        <table>
          <thead><tr><th>SERVIÇO / DESCRIÇÃO</th><th>DATA</th><th class="money">VALOR</th></tr></thead>
          <tbody>
            ${linhas || '<tr><td colspan="3" class="empty">Nenhum custo registrado.</td></tr>'}
            <tr class="tabletotal"><td colspan="2">Total de custos</td><td class="money">${moeda(totalCustos(veiculo))}</td></tr>
          </tbody>
        </table>
      </div>
    </section>`;
}

function mostrarVeiculos() {
  selecionar('#stats').innerHTML = [
    cartao('Veículos cadastrados', String(dados.veiculos.length).padStart(2, '0'), 'Controle individual por veículo'),
    cartao('Custos registrados', moeda(somar(dados.veiculos, totalCustos)), 'Serviços e despesas'),
    cartao('Total investido', moeda(somar(dados.veiculos, totalInvestido)), 'Compra + custos registrados'),
    cartao('Lucro estimado', moeda(somar(dados.veiculos, lucroPrevisto)), 'Considerando as vendas previstas', true),
  ].join('');

  const atual = dados.veiculos.find((veiculo) => veiculo.id === veiculoSelecionado) || dados.veiculos[0];
  veiculoSelecionado = atual?.id;
  const lista = dados.veiculos.map((veiculo) => `
    <button type="button" class="vehicle ${veiculo.id === atual?.id ? 'selected' : ''}"
            data-select="${escapar(veiculo.id)}" aria-pressed="${veiculo.id === atual?.id}">
      <strong>${escapar(veiculo.nome)}</strong>
      <span>${escapar(veiculo.socios)}</span>
      <small>Investido <b>${moeda(totalInvestido(veiculo))}</b></small>
    </button>`).join('');

  selecionar('#workspace').innerHTML = `
    <div class="columns">
      <section class="panel">
        <div class="panelhead"><h2>Seus veículos</h2><span class="count">${dados.veiculos.length}</span></div>
        <div class="vehicles">${lista || '<p class="empty">Nenhum veículo cadastrado.</p>'}</div>
      </section>
      ${atual ? detalhesVeiculo(atual) : '<section class="panel empty">Nenhum veículo disponível para consulta.</section>'}
    </div>`;

  document.querySelectorAll('[data-select]').forEach((botao) => {
    botao.onclick = () => {
      veiculoSelecionado = botao.dataset.select;
      mostrarVeiculos();
    };
  });
}

function mostrarCaixa() {
  const resumo = resumoCaixa(dados);
  selecionar('#stats').innerHTML = [
    cartao('Saldo inicial', moeda(dados.saldoInicial), 'Ponto de partida do caixa'),
    cartao('Entradas', moeda(resumo.entradas), 'Após o saldo inicial'),
    cartao('Saídas', moeda(resumo.saidas), 'Após o saldo inicial'),
    cartao('Saldo disponível', moeda(resumo.saldo), 'Saldo inicial + entradas − saídas', true),
  ].join('');

  // Exibe a última linha do arquivo primeiro; não altera a ordem original.
  const linhas = [...dados.movimentacoes].reverse().map((item) => {
    const entrada = item.tipo === 'entrada';
    return `
      <tr>
        <td>${escapar(item.descricao)}</td>
        <td class="date">${dataFormatada(item.data)}</td>
        <td class="${entrada ? 'green' : 'red'}">${entrada ? 'Entrada' : 'Saída'}</td>
        <td class="money ${entrada ? 'green' : 'red'}">${entrada ? '+' : '−'} ${moeda(item.valor)}</td>
      </tr>`;
  }).join('');

  selecionar('#workspace').innerHTML = `
    <p class="cashnote">O saldo inicial vem do print com histórico incompleto. As movimentações abaixo são posteriores a esse saldo. Custos de veículos não são debitados automaticamente deste caixa.</p>
    <section class="panel">
      <div class="panelhead"><h2>Movimentações do caixa</h2><span class="count">${dados.movimentacoes.length}</span></div>
      <div class="tablewrap">
        <table>
          <thead><tr><th>DESCRIÇÃO</th><th>DATA</th><th>TIPO</th><th class="money">VALOR</th></tr></thead>
          <tbody>${linhas || '<tr><td colspan="4" class="empty">Nenhuma movimentação registrada após o saldo inicial.</td></tr>'}</tbody>
        </table>
      </div>
    </section>`;
}

// 5. NAVEGAÇÃO ENTRE AS DUAS ÁREAS
let dados;
let areaAtual = 'veiculos';
let veiculoSelecionado;

function atualizarTela() {
  document.querySelectorAll('[data-view]').forEach((botao) => {
    const ativo = botao.dataset.view === areaAtual;
    botao.classList.toggle('active', ativo);
    botao.setAttribute('aria-pressed', String(ativo));
  });
  const veiculos = areaAtual === 'veiculos';
  selecionar('#crumb').textContent = veiculos ? 'Veículos' : 'Caixa parado';
  selecionar('#title').textContent = veiculos ? 'Custos dos veículos' : 'Caixa parado';
  selecionar('#subtitle').textContent = veiculos
    ? 'Investimento e resultado previsto por veículo.'
    : 'Entradas, saídas e saldo disponível da loja.';
  if (veiculos) mostrarVeiculos();
  else mostrarCaixa();
}

// 6. INICIALIZAÇÃO — os dados publicados são a única fonte do painel.
selecionar('#recarregar').onclick = () => window.location.reload();

try {
  dados = prepararDados(window.DADOS_MAMAOCAR);
  selecionar('#nomeLoja').textContent = dados.loja;
  document.querySelectorAll('[data-view]').forEach((botao) => {
    botao.onclick = () => {
      areaAtual = botao.dataset.view;
      atualizarTela();
    };
  });
  atualizarTela();
} catch (erro) {
  selecionar('#erro').hidden = false;
  selecionar('#erro').textContent = `Não foi possível carregar o painel. Confira dados.js: ${erro.message}`;
  selecionar('#stats').innerHTML = '';
  selecionar('#workspace').innerHTML = '';
  console.error(erro);
}

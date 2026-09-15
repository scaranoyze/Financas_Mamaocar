/*
 * MAMÃO CAR — EDITE AS INFORMAÇÕES NESTE ARQUIVO
 *
 * Valores: use números em REAIS, com ponto para centavos.
 *   R$ 55.000,00 = 55000     R$ 1.791,32 = 1791.32
 * Não escreva "R$", pontos de milhar ou vírgulas dentro de um valor.
 * Datas: "AAAA-MM-DD". Exemplo: "2026-09-10". Sem data: "".
 * Textos: mantenha entre aspas. Separe os itens com vírgulas.
 * Totais e lucros são calculados automaticamente; não precisam ser digitados.
 * Após salvar no GitHub, aguarde a publicação e recarregue o site nos celulares.
 */

window.DADOS_MAMAOCAR = {
  // 1. IDENTIFICAÇÃO DA LOJA
  loja: "Mamão Car",

  // 2. VEÍCULOS
  // Cada veículo é um bloco { ... }. Para cadastrar outro, copie o modelo
  // comentado no fim deste arquivo e coloque-o dentro desta lista.
  veiculos: [
    // JEEP RENEGADE 2019
    {
      id: "r19", // Identificador único: não repita em outro veículo.
      nome: "Jeep Renegade 2019",
      socios: "Marcelo / Nel",
      dataEntrada: "2026-07-24",
      valorCompra: 58000,
      vendaPrevista: 70000, // Edite aqui o valor pretendido de venda.

      // Serviços e despesas deste veículo. Para adicionar, copie uma linha.
      custos: [
        { descricao: "4 pneus novos", valor: 1791.32, data: "2026-07-24" },
        { descricao: "Suspensão Beneta", valor: 66, data: "2026-07-24" },
        { descricao: "Galego Suspensão", valor: 394, data: "2026-07-24" },
        { descricao: "Alinhamento e balanceamento", valor: 180, data: "2026-07-24" },
        { descricao: "Retrovisor (lente do pisca)", valor: 80, data: "2026-07-27" },
        { descricao: "Jorge som Mamão", valor: 388, data: "2026-07-27" },
        { descricao: "Limpa do para-brisa", valor: 50, data: "2026-07-27" },
        { descricao: "Emissão documento do Onix de Nel (DUT)", valor: 80, data: "2026-07-27" },
        { descricao: "Pintura Adson", valor: 800, data: "2026-07-27" },
        { descricao: "Rene", valor: 800, data: "2026-08-05" },
        { descricao: "Lavagem", valor: 230, data: "2026-08-11" },
        { descricao: "Polimento", valor: 250, data: "2026-08-11" },
        { descricao: "Gasolina", valor: 50, data: "2026-08-11" },
        { descricao: "Fita dupla face", valor: 40, data: "2026-08-11" },
        { descricao: "Jorge som Marcelo", valor: 50, data: "2026-08-12" },
      ],
    },

    // JEEP RENEGADE 2018
    {
      id: "r18", // Identificador único: não repita em outro veículo.
      nome: "VENDIDO Renegade Branco 2018 LUCRO: R$ 8.276,00",
      socios: "Marcelo / Marcelo / Gil",
      dataEntrada: "2026-07-28",
      valorCompra: 56000,
      vendaPrevista: 68000, // Edite aqui o valor pretendido de venda.

      // Serviços e despesas deste veículo. Para adicionar, copie uma linha.
      custos: [
        { descricao: "Propaganda", valor: 500, data: "2026-07-31" },
        { descricao: "Remoção reboque", valor: 100, data: "2026-07-31" },
        { descricao: "Rene", valor: 900, data: "2026-08-05" },
        { descricao: "Polimento", valor: 220, data: "2026-08-05" },
        { descricao: "Gasolina", valor: 50, data: "2026-08-05" },
        { descricao: "Despachante (transferência para o nome da loja)", valor: 1180, data: "2026-09-03" },
        { descricao: "Vistoria + cartório (Mamão)", valor: 382, data: "2026-09-03" },
        { descricao: "Higienização", valor: 150, data: "2026-09-08" },
        { descricao: "gasolina", valor: 50, data: "2026-09-11" },
        { descricao: "Cartorio e Atpv Cartorio", valor: 102, data: "2026-09-15" },
        { descricao: "Comissão Leo", valor: 90, data: "2026-09-15" },
      ],
    },

    // FOX CONNECT 2018 1.6 BRANCO
    {
      id: "fox-connect-2018-branco-marcelo", // Identificador único: não repita em outro veículo.
      nome: "Fox Connect 2018 1.6 branco",
      socios: "Marcelo",
      dataEntrada: "2026-08-31",
      valorCompra: 48700,
      vendaPrevista: 55000, // Edite aqui o valor pretendido de venda.

      // Serviços e despesas deste veículo. Para adicionar, copie uma linha.
      custos: [
        { descricao: "Baixa gravame", valor: 90, data: "" },
        { descricao: "Gasolina", valor: 50, data: "" },
        { descricao: "Propaganda setembro", valor: 500, data: "" },
        { descricao: "Martelinho", valor: 300, data: "2026-09-03" },
        { descricao: "Higienização", valor: 150, data: "2026-09-08" },
        { descricao: "Bateria Luciano", valor: 350, data: "2026-09-10" },
      ],
    },
    
      {
      id: "Upi-2016-cinza",
      nome: "Upi 2016 cinza",
      socios: "Marcelo",
      dataEntrada: "2026-09-11",
      valorCompra: 39000,
      vendaPrevista: 48900,
      custos: [
        { descricao: "Parabrisa", valor: 950, data: "2026-09-11" },
        { descricao: "2 Pneus", valor: 586, data: "2026-09-11" },
        { descricao: "som (retirada)", valor: 50, data: "2026-09-11" },
        { descricao: "Marco Peças (suspensão)", valor: 200, data: "2026-09-15" },
        { descricao: "Mao de obra (suspensão mamao)", valor: 200, data: "2026-09-15" },
      ],
    },
      {
      id: "HBVinteX",
      nome: "HB20X 1.6 2015",
      socios: "MARCELO",
      dataEntrada: "2026-09-15",
      valorCompra: 55200,
      vendaPrevista: 63900,
      custos: [
        { descricao: "Descrição do serviço", valor: 0, data: "" },
      ],
    },  
  ],  
  

  // 3. CAIXA PARADO
  caixa: {
    // Saldo de partida do print; pode ser negativo.
    // Adicione abaixo SOMENTE movimentações que não estão nesse saldo.
    saldoInicial: -2926.96,

    // Tipos permitidos: "entrada" ou "saida" (sem acento).
    // O valor é sempre positivo; o tipo define se soma ou subtrai.
    // Tire o // das linhas de exemplo apenas quando registrar valores reais.
    movimentacoes: [
      // { tipo: "entrada", descricao: "Retorno de financiamento", valor: 300, data: "2026-09-10" },
      // { tipo: "saida", descricao: "Material de limpeza", valor: 50, data: "2026-09-10" },
    ],
  },
};

/*
 * MODELO DE NOVO VEÍCULO
 * Copie somente o bloco abaixo e cole dentro de veiculos: [ ... ],
 * após o último veículo e antes do fechamento da lista.
 * Substitua os exemplos pelos dados reais.
 *
    {
      id: "modelo-ano-cor",
      nome: "Modelo do veículo e ano",
      socios: "Nome do responsável",
      dataEntrada: "",
      valorCompra: 0,
      vendaPrevista: 0,
      custos: [
        { descricao: "Descrição do serviço", valor: 0, data: "" },
      ],
    },
 *
 * Custos de veículos e caixa parado são controles separados.
 * Um custo no veículo não cria automaticamente uma saída no caixa.
 */

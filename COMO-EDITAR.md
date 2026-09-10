# Mamão Car — guia para editar pelo GitHub

## O arquivo que você vai editar no dia a dia: dados.js

Todos os veículos, preços, serviços e movimentos do caixa ficam em `dados.js`.
Os comentários em português explicam cada parte. Os totais são automáticos.

| Arquivo | Para que serve | Quando editar |
| --- | --- | --- |
| `dados.js` | Informações e lançamentos | Para atualizar os números da loja |
| `app.js` | Cálculos, validação e tabelas | Somente para mudar o funcionamento |
| `index.html` | Estrutura e textos fixos | Para mudar a estrutura da página |
| `styles.css` | Cores, fontes e tamanhos | Para mudar a aparência |
| `logomamaocar.png` | Logo da loja | Para trocar a imagem |

## Instalar esta versão

1. Antes de substituir o site antigo, anote ou copie lançamentos que você fez
   pelos botões dele. Eles podem existir somente no navegador daquele aparelho.
   Este pacote contém os dados dos três veículos enviados na conversa e o saldo
   inicial do caixa; não tem acesso a alterações realizadas nos seus celulares.
2. Extraia o ZIP. Substitua os arquivos na pasta que seu GitHub Pages já publica
   e adicione `dados.js`. Mantenha todos os arquivos juntos nessa pasta.
3. Inclua em `dados.js` qualquer lançamento local que queira preservar.
4. Salve as alterações no repositório e aguarde a publicação concluir.
5. Recarregue o site nos celulares. Se ainda aparecer a versão antiga, confira
   se a publicação terminou e recarregue novamente; caches podem atrasar a atualização.

O painel agora é de consulta: as edições são feitas pelo GitHub. Os antigos
botões de cadastro/edição foram retirados para não criar valores diferentes
em cada celular. Os dados antigos do navegador não são lidos nem apagados.

## Regras simples de preenchimento

- Dinheiro é um número em reais: `55000` significa R$ 55.000,00.
- Use ponto nos centavos: `1791.32` significa R$ 1.791,32.
- Não use `R$`, separador de milhar ou vírgula nos valores.
- Textos usam aspas: `"Gasolina"`.
- Datas usam ano-mês-dia: `"2026-09-10"`. Sem informação: `""`.
- Uma vírgula separa cada linha ou bloco. Preserve as chaves `{ }` e os colchetes `[ ]`.
- Comentários JavaScript começam com `//` ou ficam entre `/*` e `*/`.
  O caractere `#` não serve como comentário em JavaScript.

## Alterar compra ou venda de um veículo

Procure pelo nome do veículo em `dados.js`. No Fox, por exemplo:

```js
valorCompra: 48700,
vendaPrevista: 55000,
```

O investimento do Fox é R$ 49.790,00 e o lucro previsto é R$ 5.210,00.
Compra e venda devem ser números positivos ou zero. O sistema permite lucro negativo.

## Adicionar ou editar um serviço

Dentro de `custos: [ ... ]` do veículo certo, adicione uma linha:

```js
{ descricao: "Troca de óleo", valor: 180, data: "2026-09-10" },
```

Para corrigir, altere essa linha. Para excluir, apague a linha inteira.
O serviço do exemplo não está incluído nos custos reais do pacote.

## Adicionar um veículo

Copie o modelo comentado no fim de `dados.js`. Cole o bloco dentro da lista
`veiculos`, depois do último veículo e antes do `],` que fecha essa lista.
Preencha os dados. Use um `id` único, sem repetir o de outro veículo.

## Registrar entrada ou saída no caixa parado

Procure `caixa` e, dentro dela, `movimentacoes: [ ... ]`.
Adicione uma linha com o tipo correto:

```js
{ tipo: "entrada", descricao: "Retorno de financiamento", valor: 300, data: "2026-09-10" },
{ tipo: "saida", descricao: "Material de limpeza", valor: 50, data: "2026-09-10" },
```

Use `saida` sem acento. O valor é positivo para ambos os tipos.
As linhas acima são exemplos, não movimentações já contabilizadas.
Não registre movimentos anteriores que já estejam incluídos no saldo inicial.

O saldo é calculado assim: saldo inicial + entradas − saídas.
Custos dos veículos e caixa são separados. Se uma despesa do veículo foi paga
com o caixa parado, registre-a nos dois controles quando isso corresponder à realidade.

## Como todos veem os mesmos números

Edite `dados.js` no GitHub, salve a alteração e aguarde a publicação do site.
Os celulares mostram a mesma versão publicada quando recarregam a página.
Uma página que já está aberta não se atualiza sozinha: use “Recarregar página”.
Isso não é sincronização em tempo real, e os lançamentos não são feitos pelo site.
O pacote também funciona localmente ao abrir `index.html`, mas nesse caso cada
aparelho visualiza a cópia que tiver recebido.

## Se houver erro

O painel aponta vários erros de preenchimento, como id duplicado, data inválida
ou tipo de movimento incorreto. Se `dados.js` tiver um erro de sintaxe, o painel
não conseguirá ler o arquivo: confira aspas, vírgulas e fechamento dos blocos.
Nunca publique valores inventados apenas para contornar uma mensagem de erro.

## Visibilidade das informações

Os dados de `dados.js` podem ser lidos por quem acessa o site, mesmo sem botões
para editar. Esta versão não inclui login nem sigilo para os dados financeiros.

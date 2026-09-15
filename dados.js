```js
/*
 * MAMÃO CAR — EDITE AS INFORMAÇÕES NESTE ARQUIVO
 *
 * Valores:
 * Use números em REAIS, com ponto para centavos.
 *
 * Exemplos:
 * R$ 55.000,00 = 55000
 * R$ 1.791,32  = 1791.32
 *
 * Datas:
 * Use o formato "AAAA-MM-DD".
 * Exemplo: "2026-09-10"
 * Sem data: ""
 *
 * Totais e lucros são calculados automaticamente.
 */

window.DADOS_MAMAOCAR = {

  // =========================================================
  // 1. IDENTIFICAÇÃO DA LOJA
  // =========================================================

  loja: "Mamão Car",


  // =========================================================
  // 2. VEÍCULOS
  // =========================================================

  veiculos: [

    // ---------------------------------------------------------
    // JEEP RENEGADE 2019
    // ---------------------------------------------------------

    {
      id: "r19",
      nome: "Jeep Renegade 2019",
      socios: "Marcelo / Nel",
      dataEntrada: "2026-07-24",

      valorCompra: 58000,
      vendaPrevista: 70000,

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


    // ---------------------------------------------------------
    // JEEP RENEGADE 2018
    // ---------------------------------------------------------

    {
      id: "r18",
      nome: "Jeep Renegade 2018",
      socios: "Marcelo / Marcelo / Gil",
      dataEntrada: "2026-07-28",

      valorCompra: 56000,
      vendaPrevista: 68000,

      custos: [
        { descricao: "Propaganda", valor: 500, data: "2026-07-31" },
        { descricao: "Remoção reboque", valor: 100, data: "2026-07-31" },
        { descricao: "Rene", valor: 900, data: "2026-08-05" },
        { descricao: "Polimento", valor: 220, data: "2026-08-05" },
        { descricao: "Gasolina", valor: 50, data: "2026-08-05" },
        { descricao: "Despachante (transferência para o nome da loja)", valor: 1180, data: "2026-09-03" },
        { descricao: "Vistoria + cartório (Mamão)", valor: 382, data: "2026-09-03" },
        { descricao: "Higienização", valor: 150, data: "2026-09-08" },
        { descricao: "Gasolina", valor: 50, data: "2026-09-11" },
        { descricao: "Cartório e ATPV Cartório", valor: 102, data: "2026-09-15" },
        { descricao: "Comissão Leo", valor: 90, data: "2026-09-15" },
      ],
    },


    // ---------------------------------------------------------
    // FOX CONNECT 2018 1.6 BRANCO
    // ---------------------------------------------------------

    {
      id: "fox-connect-2018-branco-marcelo",
      nome: "Fox Connect 2018 1.6 branco",
      socios: "Marcelo",
      dataEntrada: "2026-08-31",

      valorCompra: 48700,
      vendaPrevista: 55000,

      custos: [
        { descricao: "Baixa gravame", valor: 90, data: "" },
        { descricao: "Gasolina", valor: 50, data: "" },
        { descricao: "Propaganda setembro", valor: 500, data: "" },
        { descricao: "Martelinho", valor: 300, data: "2026-09-03" },
        { descricao: "Higienização", valor: 150, data: "2026-09-08" },
        { descricao: "Bateria Luciano", valor: 350, data: "2026-09-10" },
      ],
    },


    // ---------------------------------------------------------
    // UPI 2016 CINZA
    // ---------------------------------------------------------

    {
      id: "upi-2016-cinza",
      nome: "Upi 2016 cinza",
      socios: "Marcelo",
      dataEntrada: "2026-09-11",

      valorCompra: 39000,
      vendaPrevista: 48900,

      custos: [
        { descricao: "Parabrisa", valor: 950, data: "2026-09-11" },
        { descricao: "2 Pneus", valor: 586, data: "2026-09-11" },
        { descricao: "Som (retirada)", valor: 50, data: "2026-09-11" },
        { descricao: "Marco Peças (suspensão)", valor: 200, data: "2026-09-15" },
        { descricao: "Mão de obra (suspensão Mamão)", valor: 200, data: "2026-09-15" },
      ],
    },


    // ---------------------------------------------------------
    // HB20X 1.6 PREMIUM 2016
    // ---------------------------------------------------------

    {
      id: "hb20x-premium-2016",
      nome: "HB20X 1.6 Premium 2016",
      socios: "Marcelo",
      dataEntrada: "2026-09-15",

      valorCompra: 55200,
      vendaPrevista: 63700,

      custos: [

      
      ],
    },

  ],


  // =========================================================
  // 3. CAIXA PARADO
  // =========================================================

  caixa: {

    saldoInicial: -2926.96,

    movimentacoes: [

      // EXEMPLO:
      // {
      //   tipo: "entrada",
      //   descricao: "Retorno de financiamento",
      //   valor: 300,
      //   data: "2026-09-10",
      // },

      // {
      //   tipo: "saida",
      //   descricao: "Material de limpeza",
      //   valor: 50,
      //   data: "2026-09-10",
      // },

    ],

  },

};


/*
 * ============================================================
 * MODELO PARA CADASTRAR UM NOVO VEÍCULO
 * ============================================================
 */

/*

{
  id: "modelo-ano-cor",
  nome: "Modelo do veículo e ano",
  socios: "Nome do responsável",
  dataEntrada: "",

  valorCompra: 0,
  vendaPrevista: 0,

  custos: [
    {
      descricao: "Descrição do serviço",
      valor: 0,
      data: "",
    },
  ],
},

*/
```

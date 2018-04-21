import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent  {

  constructor() {
    this.ontem.setDate(-3);
  }

    hoje: Date = new Date();
    ontem: Date = new Date();
    br = {
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Do', 'Sg', 'Te', 'Qa', 'Qi', 'Sx', 'Sb'],
      monthNames: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Hoje',
      clear: 'Limpar'
  };

  colunas = [
    { field: 'pessoa', header: 'Pessoa', width: '', class: ''},
    { field: 'descricao', header: 'Descrição', width: '150px', class: ''},
    { field: 'dataVencimento', header: 'Vencimento', width: '120px', class: 'col-data'},
    { field: 'dataPagamento', header: 'Pagamento', width: '120px', class: 'col-data'},
    { field: 'valor', header: 'Valor', width: '120px', class: 'col-valor' },
    { field: '', header: '', width: '100px', class: 'col-button'}
  ]

  lancamentos = [
    {
       "codigo":2,
       "descricao":"Salário mensal",
       "dataVencimento":"2017-06-10",
       "dataPagamento":null,
       "valor":6500,
       "tipo":"RECEITA",
       "categoria":"Diversão",
       "pessoa":"Lucas Souza Bastos"
    },
    {
       "codigo":3,
       "descricao":"Bahamas",
       "dataVencimento":"2017-02-10",
       "dataPagamento":"2017-02-10",
       "valor":100.32,
       "tipo":"DESPESA",
       "categoria":"Lazer",
       "pessoa":"Lucas Souza Bastos"
    },
    {
       "codigo":4,
       "descricao":"Bahamas",
       "dataVencimento":"2017-02-10",
       "dataPagamento":"2017-02-10",
       "valor":100.32,
       "tipo":"DESPESA",
       "categoria":"Lazer",
       "pessoa":"Lucas Souza Bastos"
    },
    {
       "codigo":8,
       "descricao":"CEMIG",
       "dataVencimento":"2017-02-10",
       "dataPagamento":"2017-02-10",
       "valor":110.44,
       "tipo":"RECEITA",
       "categoria":"Limpeza",
       "pessoa":"César Abrue Souza"
    },
    {
       "codigo":9,
       "descricao":"CEMIG",
       "dataVencimento":"2017-02-10",
       "dataPagamento":"2017-02-10",
       "valor":110.44,
       "tipo":"RECEITA",
       "categoria":"Diversão",
       "pessoa":"César Abrue Souza"
    },
    {
       "codigo":11,
       "descricao":"DMAE",
       "dataVencimento":"2017-06-10",
       "dataPagamento":null,
       "valor":200.3,
       "tipo":"DESPESA",
       "categoria":"Limpeza",
       "pessoa":"Solange Custódia Abreu Souza Bastos"
    },
    {
       "codigo":12,
       "descricao":"DMAE",
       "dataVencimento":"2017-06-10",
       "dataPagamento":null,
       "valor":200.3,
       "tipo":"DESPESA",
       "categoria":"Limpeza",
       "pessoa":"Solange Custódia Abreu Souza Bastos"
    },
    {
       "codigo":13,
       "descricao":"DMAE",
       "dataVencimento":"2017-06-10",
       "dataPagamento":null,
       "valor":200.3,
       "tipo":"DESPESA",
       "categoria":"Limpeza",
       "pessoa":"Solange Custódia Abreu Souza Bastos"
    },
    {
       "codigo":14,
       "descricao":"DMAE",
       "dataVencimento":"2017-06-10",
       "dataPagamento":null,
       "valor":200.3,
       "tipo":"DESPESA",
       "categoria":"Limpeza",
       "pessoa":"Solange Custódia Abreu Souza Bastos"
    },
    {
       "codigo":15,
       "descricao":"DMAE",
       "dataVencimento":"2017-06-10",
       "dataPagamento":null,
       "valor":200.3,
       "tipo":"DESPESA",
       "categoria":"Limpeza",
       "pessoa":"Solange Custódia Abreu Souza Bastos"
    },
    {
       "codigo":16,
       "descricao":"DMAE",
       "dataVencimento":"2017-06-10",
       "dataPagamento":null,
       "valor":200.3,
       "tipo":"DESPESA",
       "categoria":"Limpeza",
       "pessoa":"Solange Custódia Abreu Souza Bastos"
    },
    {
       "codigo":17,
       "descricao":"Extra",
       "dataVencimento":"2017-03-10",
       "dataPagamento":"2017-03-10",
       "valor":1010.32,
       "tipo":"RECEITA",
       "categoria":"Escolar",
       "pessoa":"Solange Custódia Abreu Souza Bastos"
    },
    {
       "codigo":18,
       "descricao":"Extra",
       "dataVencimento":"2017-03-10",
       "dataPagamento":"2017-03-10",
       "valor":1010.32,
       "tipo":"RECEITA",
       "categoria":"Escolar",
       "pessoa":"Solange Custódia Abreu Souza Bastos"
    },
    {
       "codigo":19,
       "descricao":"Extra",
       "dataVencimento":"2017-03-10",
       "dataPagamento":"2017-03-10",
       "valor":1010.32,
       "tipo":"RECEITA",
       "categoria":"Escolar",
       "pessoa":"Solange Custódia Abreu Souza Bastos"
    },
    {
       "codigo":20,
       "descricao":"Extra",
       "dataVencimento":"2017-03-10",
       "dataPagamento":"2017-03-10",
       "valor":1010.32,
       "tipo":"RECEITA",
       "categoria":"Escolar",
       "pessoa":"Solange Custódia Abreu Souza Bastos"
    },
    {
       "codigo":21,
       "descricao":"Bahamas",
       "dataVencimento":"2017-06-10",
       "dataPagamento":null,
       "valor":500,
       "tipo":"RECEITA",
       "categoria":"Diversão",
       "pessoa":"Solange Custódia Abreu Souza Bastos"
    },
    {
       "codigo":22,
       "descricao":"Bahamas",
       "dataVencimento":"2017-06-10",
       "dataPagamento":null,
       "valor":500,
       "tipo":"RECEITA",
       "categoria":"Diversão",
       "pessoa":"Solange Custódia Abreu Souza Bastos"
    },
    {
       "codigo":23,
       "descricao":"Bahamas",
       "dataVencimento":"2017-06-10",
       "dataPagamento":null,
       "valor":500,
       "tipo":"RECEITA",
       "categoria":"Diversão",
       "pessoa":"Solange Custódia Abreu Souza Bastos"
    },
    {
       "codigo":24,
       "descricao":"Bahamas",
       "dataVencimento":"2017-06-10",
       "dataPagamento":null,
       "valor":500,
       "tipo":"RECEITA",
       "categoria":"Diversão",
       "pessoa":"Solange Custódia Abreu Souza Bastos"
    },
    {
       "codigo":25,
       "descricao":"Top Club",
       "dataVencimento":"2017-03-10",
       "dataPagamento":"2017-03-10",
       "valor":400.32,
       "tipo":"DESPESA",
       "categoria":"Escolar",
       "pessoa":"Solange Custódia Abreu Souza Bastos"
    }
  ];

}

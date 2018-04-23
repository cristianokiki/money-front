import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {


    public colunas = [
      { field: 'nome', header: 'Nome' },
      { field: 'endereco.logradouro', header: 'Cidade' },
      { field: 'endereco', header: 'Estado' },
      { field: 'ativo', header: 'Status' }
    ];

    public pessoas = [
      {
          "codigo": 1,
          "nome": "Lucas Souza Bastos",
          "ativo": true,
          "endereco": {
              "logradouro": "Rua Carola",
              "numero": 106,
              "complemento": "casa",
              "bairro": "Cidade Nova",
              "cep": "32900000",
              "cidade": "Igarapé",
              "estado": "MG"
          }
      },
      {
          "codigo": 2,
          "nome": "Lucas Souza Bastos",
          "ativo": true,
          "endereco": {
              "logradouro": "Rua Carola",
              "numero": 106,
              "complemento": "casa",
              "bairro": "Cidade Nova",
              "cep": "32900000",
              "cidade": "Igarapé",
              "estado": "MG"
          }
      },
      {
          "codigo": 4,
          "nome": "César Abrue Souza",
          "ativo": true,
          "endereco": {
              "logradouro": "Rua Carola",
              "numero": 84,
              "complemento": null,
              "bairro": "Cidade Nova",
              "cep": "32900000",
              "cidade": "Igarapé",
              "estado": "MG"
          }
      },
      {
          "codigo": 5,
          "nome": "Solange Custódia Abreu Souza Bastos",
          "ativo": true,
          "endereco": {
              "logradouro": "Rua Carola",
              "numero": 84,
              "complemento": "casa",
              "bairro": "Cidade Nova",
              "cep": "32900000",
              "cidade": "Igarapé",
              "estado": "MG"
          }
      },
      {
          "codigo": 6,
          "nome": "Solange Custódia Abreu Souza Bastos",
          "ativo": false,
          "endereco": {
              "logradouro": "Rua Carola",
              "numero": 84,
              "complemento": "casa",
              "bairro": "Cidade Nova",
              "cep": "32900000",
              "cidade": "Igarapé",
              "estado": "MG"
          }
      },
      {
          "codigo": 7,
          "nome": "Solange Custódia Abreu Souza Bastos",
          "ativo": false,
          "endereco": {
              "logradouro": "Rua Carola",
              "numero": 84,
              "complemento": "casa",
              "bairro": "Cidade Nova",
              "cep": "32900000",
              "cidade": "Igarapé",
              "estado": "MG"
          }
      },
      {
          "codigo": 8,
          "nome": "Solange Custódia Abreu Souza Bastos",
          "ativo": false,
          "endereco": {
              "logradouro": "Rua Carola",
              "numero": 84,
              "complemento": "casa",
              "bairro": "Cidade Nova",
              "cep": "32900000",
              "cidade": "Igarapé",
              "estado": "MG"
          }
      },
      {
          "codigo": 9,
          "nome": "Solange Custódia Abreu Souza Bastos",
          "ativo": false,
          "endereco": {
              "logradouro": "Rua Carola",
              "numero": 84,
              "complemento": "casa",
              "bairro": "Cidade Nova",
              "cep": "32900000",
              "cidade": "Igarapé",
              "estado": "MG"
          }
      },
      {
          "codigo": 11,
          "nome": "Solange Custódia Abreu Souza Bastos",
          "ativo": false,
          "endereco": {
              "logradouro": "Rua Carola",
              "numero": 84,
              "complemento": "casa",
              "bairro": "Cidade Nova",
              "cep": "32900000",
              "cidade": "Igarapé",
              "estado": "MG"
          }
      },
      {
          "codigo": 12,
          "nome": "Solange Custódia Abreu Souza Bastos",
          "ativo": false,
          "endereco": {
              "logradouro": "Rua Carola",
              "numero": 84,
              "complemento": "casa",
              "bairro": "Cidade Nova",
              "cep": null,
              "cidade": "Igarapé",
              "estado": "MG"
          }
      },
      {
          "codigo": 16,
          "nome": "Lucas Souza Bastos",
          "ativo": false,
          "endereco": {
              "logradouro": "Rua Carola",
              "numero": 106,
              "complemento": "casa",
              "bairro": "Cidade Nova",
              "cep": "32900000",
              "cidade": "Igarapé",
              "estado": "MG"
          }
      },
      {
          "codigo": 18,
          "nome": "Mateus Souza Bastos",
          "ativo": false,
          "endereco": {
              "logradouro": "Rua Carola",
              "numero": 106,
              "complemento": null,
              "bairro": "Cidade Nova",
              "cep": "32900000",
              "cidade": "Igarapé",
              "estado": "MG"
          }
      }
  ];


}

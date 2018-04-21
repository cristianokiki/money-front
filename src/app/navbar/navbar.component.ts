import { Component, OnInit } from '@angular/core';


import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ngOnInit() {
    this.popularMenu();
  }

  public itens: MenuItem[];

  private popularMenu(): void {
    this.itens = [
      {
          label: 'Arquivo',
          icon: 'fa-file-o',
          items: [{
                  label: 'Novo',
                  icon: 'fa-plus',
                  items: [
                      {label: 'Projeto'},
                      {label: 'Outro'},
                  ]
              },
              {label: 'Abrir'},
              {label: 'Fechar'}
          ]
      },
      {
          label: 'Editar',
          icon: 'fa-edit',
          items: [
              {label: 'Desfazer', icon: 'fa-mail-forward'},
              {label: 'Refazer', icon: 'fa-mail-reply'}
          ]
      },
      {
          label: 'Ajuda',
          icon: 'fa-question',
          items: [
              {
                  label: 'Conteúdo'
              },
              {
                  label: 'Buscar',
                  icon: 'fa-search',
                  items: [
                      {
                          label: 'Texto',
                          items: [
                              {
                                  label: 'Área de trabalho'
                              }
                          ]
                      },
                      {
                          label: 'Arquivo'
                      }
              ]}
          ]
      },
      {
          label: 'Ações',
          icon: 'fa-gear',
          items: [
              {
                  label: 'Editar',
                  icon: 'fa-refresh',
                  items: [
                      {label: 'Salvar', icon: 'fa-save'},
                      {label: 'Atualizar', icon: 'fa-save'},
                  ]
              },
              {
                  label: 'Outro',
                  icon: 'fa-phone',
                  items: [
                      {label: 'Apagar', icon: 'fa-minus'}
                  ]
              }
          ]
      }
  ];
  }


}

import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
  <div *ngIf="temErro()" class="ui-message ui-messages-error">
    {{ texto }}
  </div>
  `,
  styles: [`
  .ui-messages-error {
    margin: 0px;
    margin-top: 4px;
  }
  `]
})
export class MessageComponent {

  @Input() erro: string;
  @Input() controle: FormControl;
  @Input() texto: string;

  temErro(): boolean {
    return this.controle.hasError(this.erro) && this.controle.dirty;
  }

}

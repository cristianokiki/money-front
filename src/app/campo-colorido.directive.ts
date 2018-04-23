import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {
/*
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {

  }

  @HostListener('focus') aoGanharFoco(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'gray');
  }

  @HostListener('blur') aoPerderFoco(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }*/

  @Input('appCampoColorido') cor = 'gray';

  @HostBinding('style.backgroundColor') private corFundo: string;

  @HostListener('focus') colorir(): void {
    this.corFundo = this.cor;
  }

  @HostListener('blur') descolorir(): void {
    this.corFundo = 'transparent';
  }

}

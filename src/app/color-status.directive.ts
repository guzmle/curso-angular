import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[leoColorStatus]'
})
export class ColorStatusDirective implements OnInit {

  @Input() item;

  @HostBinding('style.color')
  private color;

  constructor(private ref: ElementRef) {
  }

  ngOnInit(): void {
    if (this.item.id === 7) {
      this.ref.nativeElement.style.color = 'red';
    }
  }

  @HostListener('click')
  onClickSpan() {
    console.log('clickado elemento');
    this.color = 'blue';
  }
}

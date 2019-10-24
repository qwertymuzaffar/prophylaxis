import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appTableRowSelect]'
})
export class TableRowSelectDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('change', ['$event'])
  onClick(e) {
    if (e.checked) {
      this.elem.nativeElement.parentElement.parentElement.classList.add('rowSelect');
    } else {
      this.elem.nativeElement.parentElement.parentElement.classList.remove('rowSelect');
    }
  }

}

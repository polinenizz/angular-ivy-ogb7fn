import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private el:ElementRef) { }
  @HostListener ('mouseover') enter(){
    this.highlighter('red');
  }
  @HostListener('mouseout') out(){
    this.highlighter('white');
  }
  highlighter(color:string){
    this.el.nativeElement.Style = color;
  }
}
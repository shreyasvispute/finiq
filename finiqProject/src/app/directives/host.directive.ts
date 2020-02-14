import { Directive,ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {

  constructor(private el:ElementRef , private renderer:Renderer) {

    //this.ChangeColor ( "Red");
   }

@HostListener("mouseover") onMouseOver(){
this.ChangeColor("red");

}

@HostListener("click") onClick(){
  window.alert("Host Clicked");
  
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.ChangeColor("black");
    
    }
   ChangeColor(color:string){
    this.renderer.setElementStyle(this.el.nativeElement,"color", color)

   }

}

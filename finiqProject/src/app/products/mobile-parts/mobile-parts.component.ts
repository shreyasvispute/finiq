import { MOBILEPARTS } from './mock';
import { Component, OnInit } from '@angular/core';
import { MobileParts } from './mobile-parts';

@Component({
  selector: 'app-mobile-parts',
  templateUrl: './mobile-parts.component.html',
  styles: []
})
export class MobilePartsComponent implements OnInit {
  mobParts:MobileParts[];

  constructor() { }

  ngOnInit() {
    this.mobParts = MOBILEPARTS
  }
  ngOnChanges(){
  }
  ngDoCheck()	{}

  ngAfterContentInit()	{}

  ngAfterContentChecked()	{}
  
  ngAfterViewInit()	{}

  ngOnDestroy()	{}


}

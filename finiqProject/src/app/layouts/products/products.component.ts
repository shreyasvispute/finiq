import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
<app-mobile-parts></app-mobile-parts>
  `,
  styles: []
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

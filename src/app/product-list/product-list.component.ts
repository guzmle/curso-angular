import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'leo-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  mostrar = true;
  list: { name: string, id: number }[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.list.push({
        name: 'Leo ' + i,
        id: i,
      });
    }
  }

  ngOnDestroy(): void {

  }

  isShow(item) {
    return item.id % 2;
  }
}

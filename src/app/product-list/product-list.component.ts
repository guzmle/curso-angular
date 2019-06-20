import { Component, OnDestroy, OnInit } from '@angular/core';
import { IsodatePipe } from '../isodate.pipe';

@Component({
  selector: 'leo-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  mostrar = true;
  list: { name: string, id: number, date: Date }[] = [];

  constructor(private isoDate: IsodatePipe) { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.list.push({
        date: new Date(),
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

  transformDate(date: Date) {
    return this.isoDate.transform(date);
  }

  order(prop) {
  }
}

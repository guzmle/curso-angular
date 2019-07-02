import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListService } from '../../list.service';
import { IsodatePipe } from '../../shared/pipes/isodate.pipe';

@Component({
  selector: 'leo-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  search = 'Leo';
  original: { name: string, id: number, date: Date }[] = [];
  list: { name: string, id: number, date: Date }[] = [];

  constructor(private isoDate: IsodatePipe,
              private service: ListService,
              private router: Router) { }

  ngOnInit() {
    this.original = this.service.getList();
    this.list = JSON.parse(JSON.stringify(this.original));
  }

  ngOnDestroy(): void {

  }

  isShow = (item) => item.id % 2;

  transformDate(date: Date) {
    return this.isoDate.transform(date);
  }

  order(prop) {
    console.log(prop);
  }

  onSearch(data) {
    this.list = this.original.filter((obj) => obj.name.startsWith(this.search));
    this.search = '';
  }

  goToDetail(product) {
    this.router.navigate(['detail', product.id], {
      queryParams: {
        id: product.id,
      },
    });
  }

  notificateChild() {
    this.service.notificateMessage({message: 'Mensaje desde el Padre', id: 1});
  }
}

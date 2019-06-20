import { Component, OnDestroy, OnInit } from '@angular/core';
import { IsodatePipe } from '../isodate.pipe';
import { ListService } from '../list.service';

@Component({
  selector: 'leo-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  search = '';
  original: { name: string, id: number, date: Date }[] = [];
  list: { name: string, id: number, date: Date }[] = [];

  constructor(private isoDate: IsodatePipe, private service: ListService) { }

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

  searchChange(valor) {
    this.search = valor;
  }

  onSearch() {
    this.list = this.original.filter((obj) => obj.name.startsWith(this.search));
  }
}

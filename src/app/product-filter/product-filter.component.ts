import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'leo-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  private _search;
  @Output() searchChange = new EventEmitter();
  @Output() searchClick = new EventEmitter();

  @Input()
  set search(value) {
    console.log(value);
    this._search = value;
    this.searchChange.emit(this._search);
  }

  get search() {
    return this._search;
  }


  constructor() { }

  ngOnInit() {
  }

  onSearchChange() {
    this.searchClick.emit(this._search);
  }
}

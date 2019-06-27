import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ListService} from '../list.service';

@Component({
  selector: 'leo-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public form: { id?: number, name: string, date: Date } = {
    name: '',
    date: null,
  };

  constructor(private route: ActivatedRoute,
              private service: ListService,
              private location: Location) {
  }

  ngOnInit() {

    this.route.paramMap.subscribe(value => console.log(value));

    console.log(this.route.snapshot.params.id, 'Por path');
    const list = this.service.getList();

    console.log(list);
    this.form = list.find((value) => value.id === parseInt(this.route.snapshot.params.id, 10));
    if (!this.form) {
      this.form = {
        name: '',
        date: null,
      };
    }
  }

  public save() {
    if (!this.form.id) {
      this.service.save(this.form);
    } else {
      this.service.update(this.form);
    }

    console.log(this.service.getList());
  }

  public returnLastPage() {
    this.location.back();
  }

}

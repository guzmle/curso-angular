import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductFilterComponent } from "./product-filter/product-filter.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

const productRoutes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: ':id',
    component: ProductDetailComponent,
  }
];

@NgModule({
  declarations: [
    ProductFilterComponent,
    ProductDetailComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ProductModule {}

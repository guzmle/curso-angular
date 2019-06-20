import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { IsodatePipe } from './isodate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    IsodatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    IsodatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

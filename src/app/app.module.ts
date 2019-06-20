import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { IsodatePipe } from './isodate.pipe';
import { ColorStatusDirective } from './color-status.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    IsodatePipe,
    ColorStatusDirective
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

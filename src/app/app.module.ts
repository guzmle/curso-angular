import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    IsodatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorStatusDirective } from "./directives/color-status.directive";
import { IsodatePipe } from "./pipes/isodate.pipe";

@NgModule({
  declarations: [
    IsodatePipe,
    ColorStatusDirective,
  ],
  exports: [
    IsodatePipe,
    ColorStatusDirective,
  ],
  providers: [
    IsodatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {}

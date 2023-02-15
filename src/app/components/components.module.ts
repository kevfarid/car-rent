import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CarModalComponent } from './car-modal/car-modal.component';

@NgModule({
  declarations: [CardComponent, CarModalComponent],
  imports: [CommonModule],
  exports: [CardComponent, CarModalComponent],
})
export class ComponentsModule {}

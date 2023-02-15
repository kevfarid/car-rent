import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ModalComponent } from './modal/modal.component';
import { ImageSliderModule } from './image-slider/imageSlider.module';

@NgModule({
  declarations: [HeaderComponent, HeroComponent, ModalComponent],
  imports: [CommonModule, ImageSliderModule],
  exports: [HeaderComponent, HeroComponent, ModalComponent],
})
export class SharedModule {}

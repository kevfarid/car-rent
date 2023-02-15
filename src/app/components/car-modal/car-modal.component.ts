import { Component, Input } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-modal',
  templateUrl: './car-modal.component.html',
  styleUrls: ['./car-modal.component.scss']
})
export class CarModalComponent {

  @Input() car: Car = {} as Car;

}

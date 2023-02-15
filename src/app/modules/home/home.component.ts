import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public cars: Car[] = [];
  public car: Car = {} as Car;
  public showModal: boolean = false;

  constructor(private carService: CarsService) {}

  ngOnInit(): void {
    this.carService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }

  openModal(carId: number) {
    this.showModal = true;
    this.carService.getCar(carId).subscribe((data) => {
      this.car = data;
    });
  }

  closeModal() {
    this.showModal = false;
  }
}

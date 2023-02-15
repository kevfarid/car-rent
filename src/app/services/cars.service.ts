import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  url = '/assets/data/cars.json';

  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get<Array<Car>>(this.url);
  }

  getCar(id: number) {
    return this.http.get<Car>(this.url).pipe(
      map((data: any) => {
        return data.find((car: any) => car.id === id);
      })
    );
  }
}

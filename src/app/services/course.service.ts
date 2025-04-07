import { Injectable } from '@angular/core';
import { PiloteService } from './pilote.service';
import { Circuit } from '../models/circuit';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  circuits: Circuit[] = [
    new Circuit(1, 'Monza', 'Italie'),
    new Circuit(2, 'Silverstone', 'Royaume-Uni'),
    new Circuit(3, 'Suzuka', 'Japon')
  ];

  pointsClassement = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

  constructor(private piloteService: PiloteService) {}

  getCircuits(): Circuit[] {
    return this.circuits;
  }

  validerClassement(classement: number[]): void {
    classement.forEach((piloteId, index) => {
      if (piloteId) {
        this.piloteService.updatePilotePoints(piloteId, this.pointsClassement[index] || 0);
      }
    });
  }
}

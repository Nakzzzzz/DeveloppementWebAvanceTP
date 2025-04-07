import { Component, OnInit } from '@angular/core';
import { RaceService } from '../../services/race.service';
import { PiloteService } from '../../services/pilote.service';
import { RaceResult } from '../../models/RaceResult';
import { Pilot } from '../../models/pilot';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-generateur-course',
  templateUrl: './generateur-course.component.html',
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ]
})
export class GenerateurCourseComponent implements OnInit {
  circuits = ['Monaco', 'Spa-Francorchamps', 'Silverstone', 'Suzuka']; // Liste des circuits
  selectedCircuit: string = '';
  selectedRaceType: string = 'Grand Prix';
  classement: { pilot: Pilot; position: number }[] = [];
  pointsAttribution = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

  constructor(private raceService: RaceService, private piloteService: PiloteService) {}

  ngOnInit(): void {
    this.loadRaceResult();
  }

  loadRaceResult(): void {
    const existingResult = this.raceService.getRaceResult(this.selectedCircuit);
    if (existingResult) {
      this.selectedRaceType = existingResult.raceType;
      this.classement = [...existingResult.classement]; // Charger l'ancien classement
    } else {
      this.resetClassement();
    }
  }

  resetClassement(): void {
    this.classement = [];
  }

  validateRace(): void {
    const raceResult = new RaceResult(this.selectedCircuit, this.selectedRaceType, this.classement);
    this.raceService.saveRaceResult(raceResult);
  }
}

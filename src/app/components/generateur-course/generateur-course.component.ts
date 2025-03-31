import { Component, OnInit } from '@angular/core';
import { PiloteService } from '../../services/pilote.service';
import { Pilot } from '../../models/pilot';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-generateur-course',
  templateUrl: './generateur-course.component.html',
  imports: [
    NgForOf,
    FormsModule,
    NgIf
  ],
  styleUrls: ['./generateur-course.component.css']
})
export class GenerateurCoursesComponent implements OnInit {
  pilotes: Pilot[] = [];
  positions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  classement: { position: number, pilote: Pilot | null }[] = [];

  constructor(private piloteService: PiloteService) {}

  ngOnInit(): void {
    this.pilotes = this.piloteService.getPilots();
    this.classement = this.positions.map(pos => ({ position: pos, pilote: null }));
  }

  // Vérifie si un pilote est déjà sélectionné
  isPilotSelected(pilot: Pilot): boolean {
    return this.classement.some(c => c.pilote && c.pilote.id === pilot.id);
  }

  // Supprime un pilote de la liste et rend disponible sa sélection
  removePilot(position: number): void {
    this.classement[position - 1].pilote = null;
  }

  // Valide la course (méthode de sauvegarde potentielle)
  validerCourse(): void {
    console.log('Classement validé:', this.classement);
  }

  onPilotChange(): void {
  }
}

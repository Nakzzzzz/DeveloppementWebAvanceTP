import { Component, OnInit } from '@angular/core';
import { PiloteService } from '../../services/pilote.service';
import { Pilot } from '../../models/pilot';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-classement',
  templateUrl: 'classement.component.html',
  styleUrls: ['./classement.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ]
})
export class ClassementComponent implements OnInit {
  pilotes: Pilot[] = [];
  selectedPilot: Pilot | null = null;
  points: number = 0;

  constructor(private piloteService: PiloteService) {}

  ngOnInit(): void {
    this.refreshPilots();
  }

  openModal(pilot: Pilot): void {
    this.selectedPilot = pilot;
    this.points = 0; // Réinitialiser les points à chaque ouverture de la pop-up
  }

  closeModal(): void {
    this.selectedPilot = null;
  }

  addPoints(): void {
    if (this.selectedPilot) {
      this.piloteService.updatePilotPoints(this.selectedPilot.id, this.points).subscribe(() => {
        this.closeModal();
        this.refreshPilots(); // Rafraîchir la liste des pilotes après la mise à jour
      });
    }
  }

  refreshPilots(): void {
    this.piloteService.getPilots().subscribe(pilots => {
      this.pilotes = pilots;
    });
  }


}

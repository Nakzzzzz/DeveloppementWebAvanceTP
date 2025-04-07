import { Component, OnInit } from '@angular/core';
import { PiloteService } from '../../services/pilote.service';
import { Pilot } from '../../models/pilot';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css'],
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    NgForOf
  ]
})
export class ClassementComponent implements OnInit {
  pilotes: Pilot[] = [];
  showModal = false;
  newPilote: {
    lastname: string;
    firstname: string;
    team: { id: number; name: string; country: string; points: number };
    points: number;
  } = {
    lastname: '',
    firstname: '',
    team: { id: 1, name: 'Ferrari', country: 'Italy', points: 0 },
    points: 0
  };

  constructor(private piloteService: PiloteService) {}

  ngOnInit(): void {
    this.loadPilots();
  }

  loadPilots(): void {
    this.pilotes = this.piloteService.getPilots();
  }

  addPilote(): void {
    if (this.newPilote instanceof Pilot) {
      this.piloteService.addPilot(this.newPilote);
    }
    this.showModal = false;
    this.newPilote = {
      lastname: '',
      firstname: '',
      team: { id: 1, name: '', country: '', points: 0 },
      points: 0
    };
  }

  deletePilote(id: number): void {
    this.piloteService.deletePilot({ id } as Pilot);
  }
}

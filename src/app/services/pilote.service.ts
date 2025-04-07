import { Injectable } from '@angular/core';
import { Pilot } from '../models/pilot';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PiloteService {

  private pilotes: Pilot[] = [];

  constructor(private api: ApiService) {
    this.refreshPilots();
  }

  // Retourne la liste des pilotes
  getPilots(): Pilot[] {
    return this.pilotes;
  }

  // Rafraîchit la liste des pilotes
  refreshPilots(): void {
    this.api.getPilots().then((pilots: any) => {
      this.pilotes = pilots;
    }).catch((error: any) => {
      console.error('Error loading pilots:', error);
    });
  }

  // Ajoute un pilote
  addPilot(pilot: Pilot): void {
    this.api.addPilot(pilot).catch((error: any) => {
      console.error('Error adding pilot:', error);
    }).finally(() => {
      this.refreshPilots();
    });
  }

  // Supprime un pilote
  deletePilot(pilot: Pilot): void {
    this.api.deletePilot(pilot.id).catch((error: any) => {
      console.error('Error deleting pilot:', error);
    }).finally(() => {
      this.refreshPilots();
    });
  }
}

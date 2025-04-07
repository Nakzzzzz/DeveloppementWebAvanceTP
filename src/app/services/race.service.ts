import { Injectable } from '@angular/core';
import { RaceResult } from '../models/RaceResult';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  private raceResults: RaceResult[] = [];

  getRaceResult(circuit: string): RaceResult | undefined {
    return this.raceResults.find(result => result.circuit === circuit);
  }

  saveRaceResult(result: RaceResult): void {
    const index = this.raceResults.findIndex(r => r.circuit === result.circuit);
    if (index !== -1) {
      this.raceResults[index] = result; // Mise à jour si la course existe déjà
    } else {
      this.raceResults.push(result); // Ajout si c'est un nouveau GP
    }
  }
}

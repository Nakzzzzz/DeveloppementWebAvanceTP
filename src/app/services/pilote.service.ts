import { Injectable } from '@angular/core';
import { Pilot } from '../models/pilot';
import { TeamService } from './team.service';

@Injectable({
  providedIn: 'root'
})
export class PiloteService {
  private pilots: Pilot[] = [];

  constructor(private teamService: TeamService) {
    const teams = this.teamService.getTeams();
    this.pilots = [
      new Pilot(1, 'Verstappen', 'Max', teams[0], 0),
      new Pilot(2, 'Tsunoda', 'Yuki', teams[0], 0),
      new Pilot(3, 'Antonelli', 'Andrea Kimi', teams[1], 0),
      new Pilot(4, 'Russell', 'George', teams[1], 0),
      new Pilot(5, 'Hamilton', 'Lewis', teams[2], 0),
      new Pilot(6, 'Leclerc', 'Charles', teams[2], 0),
      new Pilot(7, 'Norris', 'Lando', teams[3], 0),
      new Pilot(8, 'Piastri', 'Oscar', teams[3], 0),
      new Pilot(9, 'Doohan', 'Jack', teams[4], 0),
      new Pilot(10, 'Gasly', 'Pierre', teams[4], 0),
      new Pilot(11, 'Alonso', 'Fernando', teams[5], 0),
      new Pilot(12, 'Stroll', 'Lance', teams[5], 0),
      new Pilot(13, 'Hadjar', 'Isack', teams[6], 0),
      new Pilot(14, 'Lawson', 'Liam', teams[6], 0),
      new Pilot(15, 'Ocon', 'Esteban', teams[7], 0),
      new Pilot(16, 'Bearman', 'Oliver', teams[7], 0),
      new Pilot(17, 'Sainz.JR', 'Carlos', teams[8], 0),
      new Pilot(18, 'Albon', 'Alex', teams[8], 0),
      new Pilot(19, 'Hulkenberg', 'Nico', teams[9], 0),
      new Pilot(20, 'Bortoleto', 'Gabriel', teams[9], 0),
    ]
  }

  getPilots(): Pilot[] {
    return this.pilots;
  }

  addPilote(pilote: Pilot): void {
    this.pilots.push({...pilote, id: this.pilots.length + 1});
  }

  deletePilote(id: Number | undefined): void {
    this.pilots = this.pilots.filter(p => p.id !== id);
  }

  updatePilotePoints(id: number, points: number): void {
    const pilote = this.pilots.find(p => p.id === id);
    if (pilote) {
      pilote.points += points;
      this.teamService.updateTeamPoints(pilote.team.id, points);
    }
  }
}

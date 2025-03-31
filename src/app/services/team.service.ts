import { Injectable } from '@angular/core';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teams: Team[] = [
    new Team(1, 'Red Bull', 'Autriche', 0),
    new Team(2, 'Mercedes', 'Royaume-Uni', 0),
    new Team(3, 'Ferrari', 'Italie', 0),
    new Team(4, 'McLaren', 'Royaume-Uni', 0),
    new Team(5, 'Alpine', 'France', 0),
    new Team(6, 'Aston Martin', 'Royaume-Uni', 0),
    new Team(7, 'RB Cash App', 'Autriche', 0),
    new Team(8, 'Haas', 'USA', 0),
    new Team(9, 'Williams', 'Royaume-Uni', 0),
    new Team(10, 'Kick Sauber', 'Suisse', 0)
  ];

  getTeams(): Team[] {
    return this.teams;
  }

  updateTeamPoints(teamId: number, points: number): void {
    const team = this.teams.find(t => t.id === teamId);
    if (team) {
      team.points += points;
    }
  }
}

import {Team} from './team';

export class Pilot {
  id: number;
  lastname: string;
  firstname: string;
  points: number;
  team: Team; // lien direct vers une instance de team

  constructor(id: number, lastname: string, firstname: string, points: number, team: Team) {
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.points = points;
    this.team = team;
  }
}

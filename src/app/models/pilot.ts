import {Team} from './team';

export class Pilot {
  id?: Number;
  lastname: string;
  firstname: string;
  team: Team;
  points: number;

  constructor(id: number, lastname: string, firstname: string, team: Team, points: number) {
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.team = team;
    this.points = points;
  }
}

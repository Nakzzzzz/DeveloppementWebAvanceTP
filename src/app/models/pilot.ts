export class Pilot {
  id?: Number;
  lastname: string;
  firstname: string;
  team: string;
  points: number;

  constructor(id: number, lastname: string, firstname: string, team: string, points: number) {
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.team = team;
    this.points = points;
  }
}

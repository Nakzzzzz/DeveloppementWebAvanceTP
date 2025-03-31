export class Team {
  id: number;
  name: string;
  country: string;
  points: number;

  constructor(id: number, name: string, country: string, points: number) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.points = points;
  }
}

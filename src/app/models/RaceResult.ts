import { Pilot } from "./pilot";

export class RaceResult {
  circuit: string;
  raceType: string; // "Sprint" ou "Grand Prix"
  classement: { pilot: Pilot; position: number }[];

  constructor(circuit: string, raceType: string, classement: { pilot: Pilot; position: number }[]) {
    this.circuit = circuit;
    this.raceType = raceType;
    this.classement = classement;
  }
}

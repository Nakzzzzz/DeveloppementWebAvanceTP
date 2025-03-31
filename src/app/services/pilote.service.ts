import { Injectable } from '@angular/core';
import { Pilot } from '../models/pilot';

@Injectable({
  providedIn: 'root'
})
export class PiloteService {
  private pilots: Pilot[] = [
    { id: 1, lastname: 'Verstappen', firstname: 'Max', team: 'Red Bull', points: 0 },
    { id: 2, lastname: 'Tsunoda', firstname: 'Yuki', team: 'Red Bull', points: 0 },
    { id: 3, lastname: 'Hamilton', firstname: 'Lewis', team: 'Ferrari', points: 0 },
    { id: 4, lastname: 'Leclerc', firstname: 'Charles', team: 'Ferrari', points: 0 },
    { id: 5, lastname: 'Antonelli', firstname: 'Andrea Kimi', team: 'Mercedes', points: 0 },
    { id: 6, lastname: 'Russell', firstname: 'George', team: 'Mercedes', points: 0 },
    { id: 7, lastname: 'Norris', firstname: 'Lando', team: 'McLaren', points: 0 },
    { id: 8, lastname: 'Piastri', firstname: 'Oscar', team: 'McLaren', points: 0 },
    { id: 9, lastname: 'Doohan', firstname: 'Jack', team: 'Alpine', points: 0 },
    { id: 10, lastname: 'Gasly', firstname: 'Pierre', team: 'Alpine', points: 0 },
    { id: 11, lastname: 'Alonso', firstname: 'Fernando', team: 'Aston Martin', points: 0 },
    { id: 12, lastname: 'Stroll', firstname: 'Lance', team: 'Aston Martin', points: 0 },
    { id: 13, lastname: 'Hadjar', firstname: 'Isack', team: 'RB Visa Cash App', points: 0 },
    { id: 14, lastname: 'Lawson', firstname: 'Liam', team: 'RB Visa Cash App', points: 0 },
    { id: 15, lastname: 'Ocon', firstname: 'Esteban', team: 'Haas', points: 0 },
    { id: 16, lastname: 'Bearman', firstname: 'Oliver', team: 'Haas', points: 0 },
    { id: 17, lastname: 'Sainz.JR', firstname: 'Carlos', team: 'Williams', points: 0 },
    { id: 18, lastname: 'Albon', firstname: 'Alex', team: 'Williams', points: 0 },
    { id: 19, lastname: 'Hulkenberg', firstname: 'Nico', team: 'Kick Sauber', points: 0 },
    { id: 20, lastname: 'Bortoleto', firstname: 'Gabriel', team: 'Kick Sauber', points: 0 },
  ];

  getPilots(): Pilot[] {
    return this.pilots;
  }
}

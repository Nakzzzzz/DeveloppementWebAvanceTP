import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pilot} from '../models/pilot';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  checkPing(): Promise<boolean> {
    return new Promise(resolve => {
      this.httpClient.get("api/ping", { responseType: "text" })
        .subscribe({
          next: (responses: any) => {
            resolve(responses);
          },
          error: () => {
            resolve(false);
          }
        });
    });
  }

// Extrait pour les pilotes
  getPilots(): Promise<Pilot[]> {
    return new Promise(resolve => {
      this.httpClient.get('/api/pilots')
        .subscribe({
          next: (res: any) => resolve(res),
          error: () => resolve([])
        });
    });
  }

  addPilot(pilot: {
    lastname: string;
    firstname: string;
    team: { id: number; name: string; country: string; points: number };
    points: number
  }): Promise<Pilot> {
    return new Promise((resolve, reject) => {
      this.httpClient.post('/api/pilots', pilot)
        .subscribe({
          next: res => resolve(res as Pilot),
          error: err => reject(err)
        });
    });
  }

  deletePilot(pilotId: number | undefined): Promise<void> {
    return new Promise((resolve, reject) => {
      this.httpClient.delete(`/api/pilots/${pilotId}`)
        .subscribe({
          next: () => resolve(),
          error: err => reject(err)
        });
    });
  }
}

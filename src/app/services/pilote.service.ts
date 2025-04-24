import { Injectable } from '@angular/core';
import { Pilot } from '../models/pilot';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PiloteService {
  private apiUrl = 'http://localhost:8080/api/pilots';

  constructor(private http: HttpClient) {}

  getPilots(): Observable<Pilot[]> {
    return this.http.get<Pilot[]>(this.apiUrl).pipe(
      map(pilots => pilots.sort((a, b) => b.points - a.points))
    );
  }

  // Ajoute un pilote
  addPilot(pilot: Pilot): Observable<Pilot> {
    return this.http.post<Pilot>(this.apiUrl, pilot);
  }

  // Supprime un pilote
  deletePilot(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Met à jour les points d'un pilote
  updatePilotPoints(pilotId: number, points: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${pilotId}/points`, { points });
  }
}

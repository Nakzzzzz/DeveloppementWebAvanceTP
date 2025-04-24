import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://localhost:8080/api/teams';

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl);
  }

  updateTeamPoints(teamId: number, points: number): Observable<any> {
    const url = `${this.apiUrl}/${teamId}/points`;
    return this.http.put(url, { points });
  }
}

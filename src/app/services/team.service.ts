import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://localhost:8080/api/teams';

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl).pipe(
      map(teams => teams.sort((a, b) => b.points - a.points))
    );
  }

}

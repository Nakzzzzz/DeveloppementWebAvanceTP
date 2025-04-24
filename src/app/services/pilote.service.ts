import { Injectable } from '@angular/core';
import { Pilot } from '../models/pilot';
import { ApiService } from './api.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Team} from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class PiloteService {
  private apiUrl = 'http://localhost:8080/api/pilots';
  constructor(private http: HttpClient) {}

  getPilots(): Observable<Pilot[]> {
    return this.http.get<Pilot[]>(this.apiUrl);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  checkPing(): Promise<boolean> {
    return new Promise(resolve => {
      this.httpClient.get("/api/ping", {responseType: "text"})
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
}

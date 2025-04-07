import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  apiState: boolean = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.checkApiState();
    setInterval(() => this.checkApiState(), 1000);
  }

  checkApiState(): void {
    this.api.checkPing().then(state => this.apiState = state);
  }
}

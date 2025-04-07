import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  apiState: boolean = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.checkApiState();
    setInterval(() => this.checkApiState(), 10000);
  }

  checkApiState(): void {
    this.api.checkPing().then(state => this.apiState = state);
  }
}

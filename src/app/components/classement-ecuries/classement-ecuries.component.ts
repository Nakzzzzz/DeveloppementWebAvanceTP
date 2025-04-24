import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Team } from '../../models/team';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-classement-ecuries',
  templateUrl: './classement-ecuries.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./classement-ecuries.component.css']
})
export class ClassementEcuriesComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }
}

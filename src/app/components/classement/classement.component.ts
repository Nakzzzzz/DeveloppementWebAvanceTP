import { Component, OnInit } from '@angular/core';
import { PiloteService } from '../../services/pilote.service';
import { TeamService } from '../../services/team.service';
import { Pilot } from '../../models/pilot';
import { Team } from '../../models/team';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  imports: [
    NgForOf,
    NgIf,
    FormsModule
  ],
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {
  pilotes: Pilot[] = [];
  teams: Team[] = [];
  showModal = false; // Pour afficher le formulaire d'ajout
  newPilote: Pilot = { id: 0, lastname: '', firstname: '', team: {} as Team, points: 0 };

  constructor(private piloteService: PiloteService, private teamService: TeamService) {}

  ngOnInit(): void {
    this.pilotes = this.piloteService.getPilots();
    this.teams = this.teamService.getTeams();
  }

  addPilote(): void {
    this.piloteService.addPilote(this.newPilote);
    this.updateTeamPoints();
    this.pilotes = this.piloteService.getPilots();
    this.showModal = false;
    this.newPilote = { id: 0, lastname: '', firstname: '', team: {} as Team, points: 0 };
  }

  deletePilote(id: Number | undefined): void {
    this.piloteService.deletePilote(id);
    this.updateTeamPoints();
    this.pilotes = this.piloteService.getPilots();
  }

  updateTeamPoints(): void {
    this.teams.forEach(team => {
      team.points = this.pilotes
        .filter(pilote => pilote.team.id === team.id)
        .reduce((sum, pilote) => sum + pilote.points, 0);
    });
  }
}

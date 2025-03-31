import { Component, OnInit } from '@angular/core';
import { PiloteService } from '../../services/pilote.service';
import { TeamService } from '../../services/team.service';
import { Pilot } from '../../models/pilot';
import { Team } from '../../models/team';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-generateur-course',
  templateUrl: './generateur-course.component.html',
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./generateur-course.component.css']
})
export class GenerateurCourseComponent implements OnInit {
  pilotes: Pilot[] = [];
  teams: Team[] = [];
  circuits = ['Monaco', 'Silverstone', 'Spa-Francorchamps', 'Suzuka', 'Interlagos'];
  selectedCircuit = '';
  selectedRaceType = '';

  classement: (Pilot | null)[] = Array(20).fill(null);
  pointsAttribution = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1]; // Points F1 standard

  constructor(private piloteService: PiloteService, private teamService: TeamService) {}

  ngOnInit(): void {
    this.pilotes = this.piloteService.getPilots();
    this.teams = this.teamService.getTeams();
  }

  isSelected(pilote: Pilot): boolean {
    return this.classement.includes(pilote);
  }

  validateRace(): void {
    // Mise à jour des points des pilotes
    this.classement.forEach((pilote, index) => {
      if (pilote) {
        let points = this.pointsAttribution[index] || 0;
        pilote.points += points;
      }
    });

    // Mise à jour des points des écuries
    this.updateTeamPoints();

    // Trier les classements
    this.pilotes.sort((a, b) => b.points - a.points);
    this.teams.sort((a, b) => b.points - a.points);
  }


  updateTeamPoints(): void {
    this.teams.forEach(team => {
      team.points = this.pilotes
        .filter(pilote => pilote.team.id === team.id)
        .reduce((sum, pilote) => sum + pilote.points, 0);
    });
  }
}

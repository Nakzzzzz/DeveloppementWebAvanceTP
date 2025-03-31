import { Component, OnInit } from '@angular/core';
import { PiloteService } from '../../services/pilote.service';
import { Pilot } from '../../models/pilot';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {
  pilotes: Pilot[] = [];

  constructor(private piloteService: PiloteService) {}

  ngOnInit(): void {
    this.pilotes = this.piloteService.getPilots();
  }
}

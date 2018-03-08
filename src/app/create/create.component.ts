import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  tournaments: any;
  tournamentText: string = "test";

  constructor(private router: Router, private _data: DataService) { }    

  ngOnInit() {
    this._data.tournament.subscribe(res => this.tournaments = res);
  }

  createTournament() {
    this.tournaments.push(this.tournamentText);
    this.tournamentText = "";
    this._data.changeGoal(this.tournaments);
    this.router.navigate(['']);
  }
}
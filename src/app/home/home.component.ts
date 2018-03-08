import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  current_games = [];
  games = ["Game11", "Game21", "Game31"];
  
  constructor(private router: Router, private _data: DataService) { }
  
  ngOnInit() {
    this._data.tournament.subscribe(res => this.current_games = res);
    this._data.changeGoal(this.current_games);
  }

  createTournamentClick() {
    this.router.navigate(['create']);
  }

  viewTournamentClick() {
    this.router.navigate(['view']);
  }

}

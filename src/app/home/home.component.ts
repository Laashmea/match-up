import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  current_games = ["Game1", "Game2", "Game3"];
  games = ["Game11", "Game21", "Game31"];
  constructor(private router: Router) { }
  
  ngOnInit() {
  }

  createTournamentClick() {
    this.router.navigate(['/create']);
  }

}

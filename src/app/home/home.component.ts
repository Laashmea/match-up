import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  current_matches = [];
  avail_matches = [];
  
  constructor(private router: Router, private _data: DataService) { }
  
  ngOnInit() {
    this._data.current_match.subscribe(res => this.current_matches = res);
    this._data.changeCurrentMatch(this.current_matches);
    this._data.avail_match.subscribe(res => this.avail_matches = res);
    this._data.changeAvailMatch(this.avail_matches);
  }
  
  registerClick(i) {
    this.router.navigate(['register', i])
  }

  createTournamentClick() {
    this.router.navigate(['create']);
  }

  viewTournamentClick() {
    this.router.navigate(['view']);
  }

}

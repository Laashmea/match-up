import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  teams: string [];
  teamName: string;
  teammate1: string;
  teammate2: string;
  avail_matches: any;

  constructor(private router: Router, private _data: DataService) { }

  ngOnInit() {
    this._data.avail_match.subscribe(res => this.avail_matches = res);
  }

  addTeamClick() {
    var new_match = this.avail_matches[0];
    new_match["teams"] = this.teams;
    this.avail_matches.push(new_match);
    this._data.changeAvailMatch(this.avail_matches);
    this.router.navigate[''];
  }
}

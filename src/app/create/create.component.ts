import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  avail_matches: any;
  matchName: string;
  hostName: string;
  matchDate: string;
  details: string;
  teams: string [];
  teamName: string;
  teammate1: string;
  teammate2: string;

  constructor(private router: Router, private _data: DataService) { }    

  ngOnInit() {
    this._data.avail_match.subscribe(res => this.avail_matches = res);
  }

  createTournamentClick() {
    var new_match = {
      title: this.matchName,
      host: this.hostName,
      teams: [ this.teamName ],
      date: this.matchDate,
      details: this.details
    }
    
    this.matchName = '';
    this.avail_matches.push(new_match);
    this._data.changeAvailMatch(this.avail_matches);
    this.router.navigate(['']);
  }
}
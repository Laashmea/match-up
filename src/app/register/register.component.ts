import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
  idx: number;

  constructor(private router: Router, private _data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(res => this.idx = res.match);
   }

  ngOnInit() {
    this._data.avail_match.subscribe(res => this.avail_matches = res);
  }

  addTeamClick() {
    var match = this.avail_matches[this.idx];
    match["teams"].push(this.teamName);
    this.avail_matches.splice(this.idx, 1);
    this.avail_matches.push(match);
    this._data.changeAvailMatch(this.avail_matches);
    this.router.navigate[''];
  }
}

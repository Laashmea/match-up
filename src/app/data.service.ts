import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private current_matches = new BehaviorSubject<any>([
    {
      title: "Tournament 1",
      host: "d{ }",
      teams: ["d{ }", "TR"],
      date: "Fri Mar 09 2018 1:00:00 GMT-0500 (EST)",
      details: "Match is at 5pm! Hope to see you all there!"
    }
  ]);
  private avail_matches = new BehaviorSubject<any>([
    {
      title: "Tournament",
      host: "d{ }",
      teams: ["d{ }", "TR"],
      date: "Mon Mar 12 2018 11:30:00 GMT-0500 (EST)",
      details: "Match is at 4pm! Be there or be square!"
    }
  ]);

  current_match = this.current_matches.asObservable();
  avail_match = this.avail_matches.asObservable();

  constructor() { }

  changeCurrentMatch(current_match) {
    this.current_matches.next(current_match);
  }

  changeAvailMatch(avail_match) {
    this.avail_matches.next(avail_match);
  }

}

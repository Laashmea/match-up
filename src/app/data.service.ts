import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private current_matches = new BehaviorSubject<any>([
    {
      title: "Tournament 1",
      host: "d {}",
      teams: ["Stephanie", "Leslie"],
      date: "01/02/2018",
      details: "Match is at 5pm! Hope to see you all there!"
    }
  ]);
  private avail_matches = new BehaviorSubject<any>([
    {
      title: "Tournament",
      host: "d {}",
      teams: ["Michael", "Loveneet"],
      date: "01/09/2018",
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

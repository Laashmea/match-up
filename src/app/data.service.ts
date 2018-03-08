import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private tournamenets = new BehaviorSubject<any>(["Turn1", "Turn2", "Turn3"]);
  tournament = this.tournamenets.asObservable();

  constructor() { }

  changeGoal(tournament) {
    this.tournamenets.next(tournament);

  }

}

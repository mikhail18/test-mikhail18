import { Injectable } from '@angular/core';
import { Cases } from './cases';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CasesDataService {
  private casesMessageSource = new BehaviorSubject(null);
  casesMsg = this.casesMessageSource.asObservable();
  allCases: any;

  private cases = new Cases();

  constructor() { }
  getCases(): any {
    this.casesMessageSource.next(this.cases.list); /*this solution will kep latest data
    specialy if data will be updated for other resource*/
    return this.cases.list;
  }
}




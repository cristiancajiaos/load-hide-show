import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  currentRequests = 0;
  currentRequestsSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.currentRequests);
  currentRequestsObs: Observable<number> = this.currentRequestsSubject.asObservable();

  constructor() { }

  setRequest(status: string): void {
    this.currentRequests = (status == 'start') ? this.currentRequests + 1 : this.currentRequests - 1;
    this.currentRequestsSubject.next(this.currentRequests);
  }

  getRequests(): void {
    
  }
}

import { DEFAULT_USER } from './../constants/DEFAULT_USER';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(DEFAULT_USER);

  constructor(
    private http: HttpClient
  ) { }

  getUser(id: number | string): void {
    this.currentUser.next(DEFAULT_USER);
    this.http.get<User>(`/users/${id}`).subscribe(user => {
      this.currentUser.next(user);
    });
  }
}

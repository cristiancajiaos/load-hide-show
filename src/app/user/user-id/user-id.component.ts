import { DEFAULT_USER } from './../../constants/DEFAULT_USER';
import { User } from './../../interfaces/user';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, Observable } from 'rxjs';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.scss']
})
export class UserIdComponent implements OnInit {

  id: number | string = 0;

  user$: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params?.subscribe(params => {
      const id = params['id'];
      this.userService.getUser(id);
    });
    this.user$ = this.userService.currentUser;
  }

}

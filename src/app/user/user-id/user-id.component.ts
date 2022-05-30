import { DEFAULT_USER } from './../../constants/DEFAULT_USER';
import { User } from './../../interfaces/user';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.scss']
})
export class UserIdComponent implements OnInit {

  id: number = 0;
  currentUser: User = DEFAULT_USER;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params?.subscribe(params => {
      this.id = parseInt(params['id']);
      this.userService.getUser(this.id).subscribe(user => {
        this.currentUser = user;
      });
    });
  }

}

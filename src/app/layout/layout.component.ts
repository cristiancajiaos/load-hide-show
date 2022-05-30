import { DEFAULT_USER } from './../constants/DEFAULT_USER';
import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  foo: User = DEFAULT_USER;

  constructor() { }

  ngOnInit(): void {
  }

}

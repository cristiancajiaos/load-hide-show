import { Observable } from 'rxjs';
import { RequestsService } from './../../services/requests.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  public requests$: Observable<number>;

  constructor(
    private requestsService: RequestsService
  ) { }

  ngOnInit(): void {
    this.requests$ = this.requestsService.currentRequestsSubject;
  }

}

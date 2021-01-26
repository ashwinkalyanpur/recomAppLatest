import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-events-home',
  templateUrl: './events-home.component.html',
  styleUrls: ['./events-home.component.css']
})
export class EventsHomeComponent implements OnInit {
  
  eventName = '';
  eventDescription = '';
  eventId = '';
  state$: Observable<object>;
  title = 'recomApp';
  active = 1;

  constructor(private modalService: NgbModal, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state));
    this.state$.subscribe((state: any) => {
      console.log(state);
      this.eventId = state.id;
      this.eventName = state.name;
      this.eventDescription = state.description;
    })
  }
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
}

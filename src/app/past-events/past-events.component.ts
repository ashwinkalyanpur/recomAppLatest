import { Component, OnInit } from '@angular/core';
import { EventService } from '../API/events.service';

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.css']
})
export class PastEventsComponent implements OnInit {
  pastEvents: any = [];


  constructor(public RestAPI: EventService) { }

  ngOnInit(): void {
    this.getPastEvents()
  }
  getPastEvents(){
    return this.RestAPI.getEventList().subscribe((data: any) => {
      if(data.eventlist && data.eventlist[0] && data.eventlist[0].completed){
        this.pastEvents = data.eventlist[0].completed;
      }
    })
  }
}

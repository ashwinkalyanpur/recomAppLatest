import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from 'src/app/API/events.service';

@Component({
  selector: 'app-latest-events',
  templateUrl: './latest-events.component.html',
  styleUrls: ['./latest-events.component.css']
})
export class LatestEventsComponent implements OnInit {
  upcomingEvents: any = [];
  // returnURL: string;

  constructor(
    public RestAPI: EventService, public router: Router) { }
    
  ngOnInit(): void {
    this.getUpcomingEvents();
  }
  getUpcomingEvents() {
    this.RestAPI.getEventList().subscribe((data: any) => {
      if(data.eventlist && data.eventlist[0] && data.eventlist[0].upcoming){
        this.upcomingEvents = data.eventlist[0].upcoming;
      }
    })
  }
  registerAnEvent(event: any){
    console.log("sample event data", event.fileUpload);
    this.router.navigateByUrl('/EventsHomeComponent', { state: { id:event.id, name:event.name, description:event.description } });
    localStorage.setItem('eventId', JSON.stringify({ state: { id:event.id, name:event.name, description:event.description,fileUpload:event.fileUpload }}));
    localStorage.setItem('SupportedId', JSON.stringify({ state: { id:event.id, name:event.name, description:event.description }}));
    localStorage.setItem('speakersId', JSON.stringify({ state: { id:event.id, name:event.name, description:event.description }}));
    localStorage.setItem('AssociationId', JSON.stringify({ state: { id:event.id, name:event.name, description:event.description }}));
    localStorage.setItem('MediaId', JSON.stringify({ state: { id:event.id, name:event.name, description:event.description }}));
    localStorage.setItem('TestimonalsId', JSON.stringify({ state: { id:event.id, name:event.name, description:event.description }}));
    
  }
}

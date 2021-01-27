import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventService } from '../API/events.service';

@Component({
  selector: 'app-events-home',
  templateUrl: './events-home.component.html',
  styleUrls: ['./events-home.component.css'],
})
export class EventsHomeComponent implements OnInit {
  upcomingEvents: any = [];
  fachevronup = faChevronCircleUp;
  windowScrolled: boolean;
  eventName = '';
  eventDescription = '';
  eventId = '';
  SupportedId ='';
  speakersId='';
  SupportedName ='';
  SupportedDescription ='';
  event_urls=''
  state$: Observable<object>;
  title = 'recomApp';
  active = 'support';
  AssociationId='';
  MediaId='';
  TestimonalsId='';
  eventEndDate= '';

  constructor(
    @Inject(DOCUMENT) private document: Document, 
    public RestAPI: EventService, 
    public activatedRoute: ActivatedRoute,
    ) { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  scrollToTop() {
      (function smoothscroll() {
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 8));
          }
      })();
  }


  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state));
   
    this.state$.subscribe((state: any) => {
       //Partner
      var retrievedObject = localStorage.getItem('eventId');
      var event_lists=JSON.parse(retrievedObject);
      this.eventId = event_lists.state.id;
      this.eventName = event_lists.state.name;
      this.eventEndDate = event_lists.state.startDate;
      this.eventDescription =event_lists.state.description;
      this.event_urls =event_lists.state.fileUpload;
      console.log('event',this.eventName)
      console.log('event date', event_lists)

     
      
      //Supported by
      var retrievedObjectsupport = localStorage.getItem('SupportedId');
      var event_lists=JSON.parse(retrievedObjectsupport);
      this.SupportedId = event_lists.state.id;
      this.SupportedName = event_lists.state.name;
      this.SupportedDescription =event_lists.state.description;

       //Speakers
       var retrievedObjectspeakers = localStorage.getItem('speakersId');
       var event_lists=JSON.parse(retrievedObjectspeakers);
       this.speakersId=event_lists.state.id
      
      //Association
       var retrievedObjectAssociation = localStorage.getItem('AssociationId');
       var event_lists=JSON.parse(retrievedObjectAssociation);
       this.AssociationId=event_lists.state.id
      
       //Media
       var retrievedObjectMediaId = localStorage.getItem('MediaId');
       var event_lists=JSON.parse(retrievedObjectMediaId);
       this.MediaId=event_lists.state.id
       
      //TestimonalsId
      var retrievedObjectMediaId = localStorage.getItem('TestimonalsId');
      var event_lists=JSON.parse(retrievedObjectMediaId);
      this.TestimonalsId=event_lists.state.id
      
    })
    this.getUpcomingEvents();
  }
  getUpcomingEvents() {
    this.RestAPI.getEventList().subscribe((data: any) => {
      if(data.eventlist && data.eventlist[0] && data.eventlist[0].upcoming){
        this.upcomingEvents = data.eventlist[0].upcoming;
        console.log(this.upcomingEvents)
        
      }
    })
  }
}

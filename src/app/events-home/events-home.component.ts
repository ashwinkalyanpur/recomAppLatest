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
  SupportedId ='';
  speakersId='';
  SupportedName ='';
  SupportedDescription ='';
  event_urls=''
  state$: Observable<object>;
  title = 'recomApp';
  active = 1;
  AssociationId='';
  MediaId='';
  TestimonalsId='';

  constructor(private modalService: NgbModal, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state));
   
    this.state$.subscribe((state: any) => {
       //Partner
      var retrievedObject = localStorage.getItem('eventId');
      var event_lists=JSON.parse(retrievedObject);
      
      this.eventId = event_lists.state.id;
      this.eventName = event_lists.state.name;
      this.eventDescription =event_lists.state.description;
      this.event_urls =event_lists.state.fileUpload;
     
      
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
      console.log(this.TestimonalsId)

      
    })
  }
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/API/events.service';
@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  @Input() speakersId='';
  speakersList: any;
  a="https://";

  constructor(public RestAPI: EventService) { }

  ngOnInit(): void {
    this.getPartnersEvents();
  }
 
  getPartnersEvents() {
    console.log('L',this.speakersId)
    this.RestAPI.getPartners(this.speakersId).subscribe((data: any) => {
      this.speakersList=data.eventlist.speakers
      
    
      
    })
  }
}

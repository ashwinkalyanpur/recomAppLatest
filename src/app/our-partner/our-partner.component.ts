import { Component, Input, OnInit } from '@angular/core';
// import { EventService } from '../API/events.service';
import { EventService } from 'src/app/API/events.service';


@Component({
  selector: 'app-our-partner',
  templateUrl: './our-partner.component.html',
  styleUrls: ['./our-partner.component.css']
})
export class OurPartnerComponent implements OnInit {
  @Input() eventId= '';
  partnersList: any;

  constructor(public RestAPI: EventService) {
    
  }

  ngOnInit(): void {
    this.getPartnersEvents();
    // console.log('sample show mw ID',this.eventId);
  }
  getPartnersEvents() {
    this.RestAPI.getPartners(this.eventId).subscribe((data: any) => {
      // if(data.event_speakers && data.event_speakers[0] && data.event_speakers[0].upcoming){
      //   this.partnersList = data.event_speakers[0].upcoming;
      this.partnersList = data;
        console.log("sample click 121", this.partnersList)
      // }
    })
  }
}

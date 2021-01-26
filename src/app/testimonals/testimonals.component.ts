import { Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/API/events.service';

@Component({
  selector: 'app-testimonals',
  templateUrl: './testimonals.component.html',
  styleUrls: ['./testimonals.component.css']
})
export class TestimonalsComponent implements OnInit {
  @Input() TestimonalsId= '';
  TestimonalsIdList: any;
  a="https://";
  constructor(public RestAPI: EventService) {
    
  }

  ngOnInit(): void {
    this.getPartnersEvents();
    // console.log('sample show mw ID',this.eventId);
  }
  getPartnersEvents() {
    this.RestAPI.getPartners(this.TestimonalsId).subscribe((data: any) => {
      this.TestimonalsIdList = data.eventlist.testimonial
      console.log('rj',data)
      
    })
  }

}

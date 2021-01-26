import { Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/API/events.service';


@Component({
  selector: 'app-supported',
  templateUrl: './supported.component.html',
  styleUrls: ['./supported.component.css']
})
export class SupportedComponent implements OnInit {
  @Input() SupportedId='';
  supporteList: any;
  a="https://";

  constructor(public RestAPI: EventService) { }

  ngOnInit(): void {
    this.getPartnersEvents();
  }
  // getPartnersEvents() {
  //   this.RestAPI.getPartners(this.SupportedId).subscribe((data: any) => {

  //     console.log(data)
  //     this.supporteList = data.eventlist.supported
      
  //   })
  // }
  getPartnersEvents() {
 
    this.RestAPI.getPartners(this.SupportedId).subscribe((data: any) => {
        console.log(data.eventlist.supported)
      this.supporteList = data.eventlist.supported
    
      
    })
  }
}

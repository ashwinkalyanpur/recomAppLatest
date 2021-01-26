import { Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/API/events.service';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {

  @Input() AssociationId='';
  AssociationList: any;
  a="https://";

  constructor(public RestAPI: EventService) { }

  ngOnInit(): void {
    this.getPartnersEvents();
  }
 
  getPartnersEvents() {
    console.log('m',this.AssociationId)
    this.RestAPI.getPartners(this.AssociationId).subscribe((data: any) => {

      this.AssociationList=data.eventlist.association;
      console.log(this.AssociationList)
      
    
      
    })
  }

}

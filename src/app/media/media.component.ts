import { Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/API/events.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  @Input() MediaId= '';
  MediaIdList: any;
  a="https://";
  constructor(public RestAPI: EventService) {
    
  }

  ngOnInit(): void {
    this.getPartnersEvents();
    // console.log('sample show mw ID',this.eventId);
  }
  getPartnersEvents() {
    this.RestAPI.getPartners(this.MediaId).subscribe((data: any) => {
      this.MediaIdList = data.eventlist.media
      console.log(this.MediaIdList[0].link)
      
    })
  }
}

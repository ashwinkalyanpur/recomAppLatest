import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-reg',
  templateUrl: './event-reg.component.html',
  styleUrls: ['./event-reg.component.css']
})
export class EventRegComponent implements OnInit {
  active = 1;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessage } from 'ng-bootstrap-form-validation';
import { EventService } from '../API/events.service';

@Component({
  selector: 'app-conference-reg',
  templateUrl: './conference-reg.component.html',
  styleUrls: ['./conference-reg.component.css']
})
export class ConferenceRegComponent implements OnInit {
  EventData: any = [] = [];
  formGroup: FormGroup;
  @Input() conference = {
    name: '',
    designation: '',
    company: '',
    phone: '',
    mail: '',
    GST: '',
    amount: '',
    address1:'',
    address2:'',
    city:'',
    state:''
  }

  customErrorMessages: ErrorMessage[] = [
    {
      error: 'required',
      format: (label, error) => `${label.toUpperCase()} IS DEFINITELY REQUIRED!`
    }, {
      error: 'pattern',
      format: (label, error) => `${label.toUpperCase()} DOESN'T LOOK RIGHT...`
    }
  ];

  constructor(public restApi: EventService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      Name: new FormControl('', [
        Validators.required,
        Validators.pattern("^[A-Za-z ]{4,15}$")
      ]),
      Designation: new FormControl('', [
        Validators.required,
        Validators.pattern("^[A-Za-z ]{3,15}$")
      ]),
      Company: new FormControl('', [
        Validators.required,
        Validators.pattern("^[A-Za-z ]{3,15}$")
      ]),
      Phone: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]{10,15}$")
      ]),
      GST: new FormControl('', [
        Validators.required,
        Validators.pattern("^[A-Za-z0-9 ]{3,15}$")
      ]),
      Amount: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9,.]{3,15}$")
      ]),
      address1: new FormControl('', [
        Validators.required,
        Validators.pattern("^[A-Za-z ]{3,15}$")
      ]),
      address2: new FormControl('', [
        Validators.required,
        Validators.pattern("^[A-Za-z ]{3,15}$")
      ]),
      city: new FormControl('', [
        Validators.required,
        Validators.pattern("^[A-Za-z]{3,15}$")
      ]),
      state: new FormControl('', [
        Validators.required,
        Validators.pattern("^[A-Za-z]{3,15}$")
      ])
    });
  }

  onSubmit() {
    this.restApi.getConference(this.conference).subscribe((data: {}) => {
    })
    console.log(this.formGroup);
  }
 
  onReset() {
    this.formGroup.reset();
  }

}

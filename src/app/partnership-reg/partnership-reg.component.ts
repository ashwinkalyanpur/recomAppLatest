import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessage } from 'ng-bootstrap-form-validation';
import { EventService } from '../API/events.service';


@Component({
  selector: 'app-partnership-reg',
  templateUrl: './partnership-reg.component.html',
  styleUrls: ['./partnership-reg.component.css']
})
export class PartnershipRegComponent implements OnInit {
  EventData: any = [] = [];
  formGroup: FormGroup;
  @Input() partnership = {
    name: '',
    designation: '',
    company: '',
    phone: '',
    address1: '',
    city: '',
    mail: '',
    GST: '',
    amount: '',
    address2: '',
    state: ''
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
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
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
      Address1: new FormControl('', [
        Validators.required
      ]),
      City: new FormControl('', [
        Validators.required,
        Validators.pattern("^[A-Za-z ]{3,15}$")
      ]),
      GST: new FormControl('', [
        Validators.required,
        Validators.pattern("^[A-Za-z0-9 ]{3,15}$")
      ]),
      Amount: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9,.]{3,15}$")
      ]),
      Address2: new FormControl('', [
        Validators.required
      ]),
      State: new FormControl('', [
        Validators.required,
        Validators.pattern("^[A-Za-z ]{3,15}$")
      ])
    });
  }
  onSubmit() {
    this.restApi.getPartnership(this.partnership).subscribe((data: {}) => {
    })
    console.log(this.formGroup);
  }
 
  onReset() {
    this.formGroup.reset();
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OurPartnerComponent } from './our-partner/our-partner.component';
import { CarouselDirective } from './carousel.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { LatestEventsComponent } from './latest-events/latest-events.component';
import { EventsHomeComponent } from './events-home/events-home.component';
import { SupportedComponent } from './supported/supported.component';
import { MediaComponent } from './media/media.component';
import { AssociationComponent } from './association/association.component';
import { EventsComponent } from './events/events.component';
import { PastEventsComponent } from './past-events/past-events.component';
import { AppRoutingModule } from './app.routing.module';
import { PartnershipRegComponent } from './partnership-reg/partnership-reg.component';
import { ExhibitorRegComponent } from './exhibitor-reg/exhibitor-reg.component';
import { ConferenceRegComponent } from './conference-reg/conference-reg.component';
import { VisitorRegComponent } from './visitor-reg/visitor-reg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ERROR_MESSAGES, NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import {CUSTOM_ERRORS} from "./custom-errors";
import { SpeakersComponent } from './speakers/speakers.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventRegComponent } from './event-reg/event-reg.component';



@NgModule({
  declarations: [
    AppComponent,
    OurPartnerComponent,
    CarouselDirective,
    LatestEventsComponent,
    EventsHomeComponent,
    SupportedComponent,
    MediaComponent,
    AssociationComponent,
    EventsComponent,
    PastEventsComponent,
    PartnershipRegComponent,
    ExhibitorRegComponent,
    ConferenceRegComponent,
    VisitorRegComponent,
    SpeakersComponent,
    TestimonalsComponent,
    EventRegComponent
  ],
  imports: [
    BrowserModule,
    NgbModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [HttpClientModule,{  
    provide: CUSTOM_ERROR_MESSAGES,
    useValue: CUSTOM_ERRORS,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

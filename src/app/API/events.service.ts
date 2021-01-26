import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { EventData } from '../our-partner/eventData';
import { PartnerShip } from '../partnership-reg/partnerShip';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  apiURL = 'http://52.66.120.154:89';
  // apiURLInsertData = 'http://52.66.120.154:89';

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getEventList(): Observable<EventData> {
    return this.http.get<EventData>(this.apiURL + '/eventlist')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  //Insert data for registration form start
  getPartnership(partnership): Observable<PartnerShip> {
    return this.http.post<PartnerShip>(this.apiURL + '/partnership', JSON.stringify(partnership), this.httpOptions )
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  //Insert data for registration form End
  //Insert data for exhibitor form start
  getExhibitor(exhibitor): Observable<PartnerShip> {
    return this.http.post<PartnerShip>(this.apiURL + '/exhibitor', JSON.stringify(exhibitor), this.httpOptions )
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getConference(conference): Observable<PartnerShip> {
    return this.http.post<PartnerShip>(this.apiURL + '/conference', JSON.stringify(conference), this.httpOptions )
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getVisitor(visitor): Observable<PartnerShip> {
    return this.http.post<PartnerShip>(this.apiURL + '/visitor', JSON.stringify(visitor), this.httpOptions )
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getPartners(id:any): Observable<PartnerShip> {
    const requestParm = {
       "event_id":  id
    }
    return this.http.post<PartnerShip>(this.apiURL + '/eventdetails', JSON.stringify(requestParm), this.httpOptions )
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
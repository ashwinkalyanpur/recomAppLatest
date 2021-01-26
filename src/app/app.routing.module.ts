import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConferenceRegComponent } from './conference-reg/conference-reg.component';
import { EventsHomeComponent } from './events-home/events-home.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
    { path: '', redirectTo: '/EventsComponent', pathMatch: 'full' },
    { path: "EventsComponent", component: EventsComponent },
    { path: "EventsHomeComponent", component: EventsHomeComponent},
    { path: "ConferenceRegComponent", component: ConferenceRegComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

// modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database'
import { AngularFireDatabase } from '@angular/fire/compat/database';

//componentes
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { AddProfessionalComponent } from './components/add-professional/add-professional.component';
import { AddSpecialityComponent } from './components/add-speciality/add-speciality.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { AppointmentScheduleComponent } from './components/appointment-schedule/appointment-schedule.component';
import { AppointmentSchemaComponent } from './components/appointment-schema/appointment-schema.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContentNavComponent } from './components/content-nav/content-nav.component';
import { AngularFireModule } from '@angular/fire/compat';




@NgModule({
  declarations: [
    
    AppComponent,
    SidebarComponent,
    AddAppointmentComponent,
    AddProfessionalComponent,
    AddSpecialityComponent,
    AddRoomComponent,
    AppointmentScheduleComponent,
    AppointmentSchemaComponent,
    AddPatientComponent,
    DashboardComponent,
    ContentNavComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, SidebarModule.forRoot(), 
    AngularFireModule.initializeApp(environment.firebase),
    provideDatabase(() => getDatabase()),
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

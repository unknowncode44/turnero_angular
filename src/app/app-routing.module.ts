import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { AddProfessionalComponent } from './components/add-professional/add-professional.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { AddSpecialityComponent } from './components/add-speciality/add-speciality.component';
import { AppointmentScheduleComponent } from './components/appointment-schedule/appointment-schedule.component';
import { AppointmentSchemaComponent } from './components/appointment-schema/appointment-schema.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "addPatient",
    component: AddPatientComponent
  },
  {
    path: "addAppointment",
    component: AddAppointmentComponent
  },
  {
    path: "appointmentSchedule",
    component: AppointmentScheduleComponent
  },
  {
    path: "appointmentSchema",
    component: AppointmentSchemaComponent
  },
  {
    path: "addProfessional",
    component: AddProfessionalComponent
  },
  {
    path: "addSpeciality",
    component: AddSpecialityComponent
  },
  {
    path: "addRoom",
    component: AddRoomComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

export interface Professional {
  id?: string,
  ateDays?: string,
  ateTime?: string,
  email?: string,
  experience?: string,
  gender?: string,
  matProf?: string,
  name?: string,
  patients?: string,
  rating?: string,
  speciality?: string,
  attr01?: string,
  attr02?: string,
  attr03?: string,
  attr04?: string,
}

export interface Appointment {
  createAt: string;
  professional: string,
  patient: string,
  appointmentDate: string,
  appointmentTime: string,
  createdBy: string,
  speciality: string,
  status: string,
  lastModifiedAt?: string,
  deletedAt?: string,
  attr01?: string,
  attr02?: string,
  attr03?: string,
  attr04?: string,
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private realtimeDb: AngularFireDatabase,
              ) {

  }

  getProfessionals(): Observable<any> {
    return this.realtimeDb.list<Professional>('users/professionals').valueChanges();
  }

  setAppointment(professional: string, patient: string, appointmentDate: string, appointmentTime: string, createdBy: string, speciality: string) {
    // get current timestamp
    const currTime = Number(new Date());
    // convert timestamp in a readable time string
    const readableTime = new Date(currTime).toLocaleTimeString();
    // convert timestamp in a readable date string
    const readableDate = new Date(currTime).toDateString();
    // push new appointment,
    this.realtimeDb
      .list<Appointment>('activeAppointments')
      .push({
        createAt: readableDate + " " + readableTime,
        professional: professional,
        patient: patient,
        appointmentDate: appointmentDate,
        appointmentTime: appointmentTime,
        createdBy: createdBy,
        speciality: speciality,
        status: "Programado",
      });
      // Update appointment meta data
      this.realtimeDb
      .object('activeAppointments')
      .update({'last_updated_at': currTime});
  }
  
  getProfessionalData(professional: string){
    return this.realtimeDb.object<Professional>('user/professional/'+professional).valueChanges();
  }


}


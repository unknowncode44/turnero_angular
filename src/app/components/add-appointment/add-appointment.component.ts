import { Component} from '@angular/core';
import { Database } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { DatabaseService, Professional } from 'src/app/services/database.service';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent {
  allProfessionals: Observable<Professional[]>;
  professional01!: Professional;
  professionalId! : string;
  

  constructor(private realtimeDb: DatabaseService) { 
    this.allProfessionals = realtimeDb.getProfessionals();
   
  }

  createAppointment(professional: string, patient: string, appointmentDate: string, appointmentTime: string, createdBy: string, speciality: string){
    this.realtimeDb.setAppointment(professional, patient, appointmentDate, appointmentTime, createdBy,speciality)
  }

  // selectedOption(_professional: Professional){
  //   return this.professional01? = _professional;
  //   // this.selectedSpeciality = _professional.speciality
    
  // }

  // getdata(){
  //   this.professional01 = this.realtimeDb.getProfessionalData(this.professionalId)
  // }

  

  


}

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent  implements OnInit {
  // professionals: Observable<any[]>;
  // constructor(db: AngularFireDatabase) {
  //   this.professionals = db.list('users/professionals').valueChanges();
  //   console.log(this.professionals)
  // }

  ngOnInit(): void {
    
  }

}

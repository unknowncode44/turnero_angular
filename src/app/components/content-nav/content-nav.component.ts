import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-content-nav',
  templateUrl: './content-nav.component.html',
  styleUrls: ['./content-nav.component.css']
})
export class ContentNavComponent implements OnInit {


  constructor(public opened: AppComponent) {}

  ngOnInit(): void {
  }
  
  toggleSidebar() {
    this.opened.toggleSidebar();
  }


}





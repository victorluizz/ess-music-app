import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent {

  constructor( private service: AuthService, private dialog: MatDialog) { 
    this.Loadinfouser();
  }

  user:any;
  
  Loadinfouser() {
    this.user = this.service.GetbyCode(localStorage.getItem('username')).subscribe(res => {
      this.user = res;
    });
  }

}

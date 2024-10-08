import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { UserDatasService } from '../../../servises/user-datas.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../servises/api.service';



@Component({
  selector: 'app-log-in-page',
  standalone: true,
  imports: [RouterLinkActive, FormsModule],
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.css',
})
export class LogInPageComponent {
  constructor(private api:ApiService , private _route: Router) {}
  userEmail: string = ''
  password: string = ''
  
  submitLogIn(email: string , pass: string) {
    /////
  }
  
 
}

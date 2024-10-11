import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { UserDatasService } from '../../../servises/user-datas.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../servises/api.service';
import { HttpParams } from '@angular/common/http';



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
  apiData : any = {}
  status: boolean = false
  
  submitLogIn(email: string, pass: string) {
   this.api.getUser().subscribe((response) => {
    this.apiData = response
    this.checker(email , pass)
   })
}
checker(email: string, pass: string) {
  if (Array.isArray(this.apiData)) {
    this.apiData.forEach((item: any) => {
      if (item.email === email && item.password === pass) {
        localStorage.setItem('username' , email)
        localStorage.setItem('password' , pass)
        this.api.setUserStatus(true)
        this._route.navigate(['/home'])
      } else {
        console.log("API Data does not match with user input");
      }
    });
  } else {
    console.log("API Data is not an array");
  }
  
}

}

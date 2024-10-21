import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../servises/api.service';
import { HttpParams } from '@angular/common/http';
import { FormBuilder , FormGroup , Validator } from '@angular/forms';



@Component({
  selector: 'app-log-in-page',
  standalone: true,
  imports: [RouterLinkActive, FormsModule , ReactiveFormsModule],
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.css',
})
export class LogInPageComponent {
  logInForm: FormGroup
  constructor(private api:ApiService , private _route: Router , private formbuildar: FormBuilder) {
    this.logInForm = this.formbuildar.group({
      email: ['' , Validators.required] ,
      password: ['' , Validators.required] 
    })
  }
  userEmail: string = ''
  password: string = ''
  apiData : any = {}
  status: boolean = false
  
  submitLogIn() {
   const email = this.logInForm.get('email')?.value; // Get email from the form
   const password = this.logInForm.get('password')?.value;
   this.api.getUser().subscribe((response) => {
    this.apiData = response
    this.checker(email , password)
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

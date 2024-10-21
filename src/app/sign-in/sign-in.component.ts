import { Component , OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { UserDatasService } from '../../servises/user-datas.service';
import { FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../servises/api.service';
import { FormBuilder , FormGroup , Validator } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, RouterLinkActive , ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent implements OnInit {
  signInFrom : FormGroup

  constructor(
    private userData: UserDatasService,
    private api: ApiService,
    private _route: Router,
    private formbuildar: FormBuilder
  ) {
    this.signInFrom = this.formbuildar.group({
      name: ['' , Validators.required] ,
      password: ['' , Validators.required]
    })
  }

  ngOnInit(): void {
    
  }





  nameInput: string = '';
  passWordInput: string = '';
  LogStatus: boolean = false;

  submitChecker() {
    const name = this.signInFrom.get('name')?.value;
    const password = this.signInFrom.get('password')?.value;


    this.userData.setLogStatus(true);
    this.api.newUser(name, password).subscribe((response) => {
      if (response) {
        console.log(true);
        localStorage.setItem('username', name); 
        localStorage.setItem('password', password); 
        localStorage.setItem('user-status', 'true');
        localStorage.setItem('role', 'admin');
        this._route.navigate(['home']);
      } else {
        alert('password or name is not correct');
        console.error('api fetch error');
      }
    });
  }
}

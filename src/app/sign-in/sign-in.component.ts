import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { UserDatasService } from '../../servises/user-datas.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../servises/api.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, RouterLinkActive],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(
    private userData: UserDatasService,
    private api: ApiService,
    private _route: Router
  ) {}
  nameInput: string = '';
  passWordInput: string = '';
  LogStatus: boolean = false;

  submitCheacker(name: string, pass: string) {
    this.userData.setLogStatus(true);
    this.api.newUser(name, pass).subscribe((response) => {
      if (response) {
        console.log(true);
        localStorage.setItem('username', this.nameInput);
        localStorage.setItem('password', this.passWordInput);
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

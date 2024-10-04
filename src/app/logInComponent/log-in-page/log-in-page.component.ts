import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { UserDatasService } from '../../../servises/user-datas.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in-page',
  standalone: true,
  imports: [RouterLinkActive, FormsModule],
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.css',
})
export class LogInPageComponent {
  constructor(private userData: UserDatasService, private _route: Router) {}
  nameInput: string = '';
  passWordInput: string = '';
  LogStatus: boolean = false;

  submitCheacker(name: string, pass: string) {
    const getData = this.userData.getUserData();
    if (getData) {
      const foundUser = getData.find(
        (user) => user.name === name && user.password === pass 
      );
      if (foundUser) {
        this.userData.setLogStatus(true)
        localStorage.setItem('username' , this.nameInput)
        localStorage.setItem('password' , this.passWordInput)
        localStorage.setItem('role' , foundUser.role)
        this._route.navigate(['/'])
      } else {
        alert('password or name is not correct');
        console.log(this.LogStatus);
      }
    }
  }
}

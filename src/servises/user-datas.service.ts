import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDatasService {

  constructor() { }

  public usersData = [
    {id:1 , name: 'reza' , email:'reza@gmail.com' , password: '2264', role: 'admin' , status : false} ,
    {id:2 , name: 'amir' , email:'amir@gmail.com' , password: '1987' , role: 'user' , status : false} ,
    {id:3 , name: 'diyako' , email:'diyako@gmail.com' , password: '2645' , role: 'user' , status : false} ,
    {id:4 , name: 'korosh' , email:'korosh@gmail.com' , password: '1865' , role: 'admin' , status : false} ,
  ]
  private isLoggedIn: boolean = false;
  private userRole : any = ''

  getUserData() {
    return this.usersData
  }
  setLogStatus(status: boolean):void {
    this.isLoggedIn = status
  }
  getLogStatus(): boolean {
    return this.isLoggedIn;
  }
}

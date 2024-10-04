import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDatasService } from '../../../servises/user-datas.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BooksDataService } from '../../../servises/books-data.service';
import { BooksDataPipe } from '../../../pipes/books-data.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule , CommonModule , FormsModule , BooksDataPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  headerName: any = ''
  localStorage: any = localStorage
  bookDatas: any
  searchText: string = ''
  roleHandler: string = ''
  constructor(private logInData: UserDatasService , private _route: Router , private booksData: BooksDataService ) {}
  
  ngOnInit(): void {
    this.bookDatas = this.booksData.getBooksData()
    // if(this.logInData.getLogStatus()) {
    //   const username = localStorage.getItem('username')
    //   const role = this.localStorage.getItem('role')
    //   this.roleHandler = role
    //   this.headerName = username
    // } else {
    //   this.headerName = 'log in'
    // }
    if(this.logInData.getLogStatus()) {
      const data = this.localStorage.getItem('username')
      this.headerName = data
    }
  }

  logOutHandler() {
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    this._route.navigate(['log-in'])
  }

  

}

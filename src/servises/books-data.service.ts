import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {

  constructor() { }

  public bookData = [
    {id:1 , name:'harry potter' , price: 25000 , status: 'we have this book in store'},
    {id:2 , name:'deutsch fremds' , price: 50000 , status: 'we dont have this book soryy'},
    {id:3 , name:'osyangar' , price: 30000 , status: 'we have this book in store'},
    {id:4 , name:'div o delbar' , price: 90000 , status: 'we have this book in store'},
    {id:5 , name:'ashaare saadi' , price: 12000 , status: 'we have this book in store'},
    {id:6 , name:'golestan' , price: 60000  , status: 'we dont have this book soryy'},
    {id:7 , name:'code in papers' , price: 12000 , status: 'we have this book in store'},
    {id:8 , name:'manam melale' , price: 67000 , status: 'we have this book in store'},
    {id:9 , name:'siyasat tamiz' , price: 88000 , status: 'we dont have this book soryy'},
    {id:10 , name:'englich book' , price: 54000  , status: 'we dont have this book soryy'},
  ]

  getBooksData() {
    return this.bookData
  }


}

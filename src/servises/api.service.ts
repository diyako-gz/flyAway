import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('https://fakestoreapi.com/products')
  }
  newUser(name :string , password: string) {
    const userData = {name , password }
    return this.http.post('https://fakestoreapi.com/users' , userData)
  }
  getUser() {
   return this.http.get('https://fakestoreapi.com/users') 
  }


}

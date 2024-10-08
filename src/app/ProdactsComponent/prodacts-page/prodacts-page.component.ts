import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../servises/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodacts-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prodacts-page.component.html',
  styleUrl: './prodacts-page.component.css'
})
export class ProdactsPageComponent implements OnInit{
  constructor(private api: ApiService) {}
  userId : any = []


  ngOnInit(): void {
    this.api.getData().subscribe((respanse: any) => {
      if(respanse) {
        console.log(respanse);
        this.userId = respanse
      } else {
        console.error(respanse)
      }
    })
  }

}

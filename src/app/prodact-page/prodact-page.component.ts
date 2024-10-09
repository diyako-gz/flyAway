import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../servises/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodact-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './prodact-page.component.html',
  styleUrl: './prodact-page.component.css',
})
export class ProdactPageComponent implements OnInit {
  prodactsId: string = '';
  selectedItem: any = {};
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.prodactsId = this.route.snapshot.paramMap.get('id') ?? '';
    this.fetchData();
  }
  fetchData(): void {
    this.api.getDatas(this.prodactsId).subscribe((response: any) => {
      console.log(response);
      this.selectedItem = [response]; 
    });
  }
  
}

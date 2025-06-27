import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'jupiter-frontpage';
  frontPageData: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getFrontPageData().subscribe({
      next: (data) => {
        this.frontPageData = data;
        console.log("Fetched API data: ", data);
      },
      error: (err) => {
        console.log("Failed to fetch ", err);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { StripComponent } from './components/strip/strip.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, StripComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  frontPageData: any;
  strips: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getFrontPageData().subscribe({
      next: (data) => {
        this.frontPageData = data;
        const allStrips = data?.data?.category?.frontPage || [];

        // Filter out invalid strips (no data, no header)
        this.strips = allStrips.filter(
          (strip: any) => Array.isArray(strip.data) && strip.data.length > 0 && strip.header
        );
      },
      error: (err) => {
        console.error("Failed to fetch", err);
      }
    });
  }
}


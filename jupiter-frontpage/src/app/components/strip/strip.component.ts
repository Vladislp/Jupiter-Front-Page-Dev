import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ng-carousel-cdk';

@Component({
  selector: 'app-strip',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './strip.component.html',
  styleUrls: ['./strip.component.css']
})
export class StripComponent {
  @Input() strip: any;
  
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  scrollRight() {
    const container = this.scrollContainer.nativeElement;
    const cardWidth = container.querySelector('.strip-card')?.offsetWidth || 0;
    container.scrollBy({ left: cardWidth * 7, behavior: 'smooth' });
  }

  scrollLeft() {
    const container = this.scrollContainer.nativeElement;
    const cardWidth = container.querySelector('.strip-card')?.offsetWidth || 0;
    container.scrollBy({ left: -cardWidth * 7, behavior: 'smooth' });
  }
}

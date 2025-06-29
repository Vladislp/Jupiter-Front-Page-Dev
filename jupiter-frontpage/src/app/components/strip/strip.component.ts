import { Component, Input } from '@angular/core';
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
}

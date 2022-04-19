import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 0;

  constructor() { }

  ngOnInit(): void {}

  get Rating(): string {
    return `${Math.floor(this.rating) / 10 * 100}%`;
  }
}

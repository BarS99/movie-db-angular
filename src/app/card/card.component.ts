import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { MovieInterface } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data!: MovieInterface;

  constructor(public appService : AppService) {
  }

  ngOnInit(): void {
  }

  get Path() {
    return `/movie/${this.data.id}`;
  }

  get PosterPath() {
    return `${this.appService.Api.poster}${this.data.poster_path}`;
  }
}

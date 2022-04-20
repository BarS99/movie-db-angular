import { Component, OnInit, Input } from '@angular/core';
import { Api, assets } from 'src/environments/environment';
import { AppService } from '../../../app.service';
import { MovieInterface } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data!: MovieInterface;

  constructor(public appService : AppService) {}

  ngOnInit(): void {}

  get Path() {
    return `/movie/${this.data.id}`;
  }

  get PosterPath() {
    if (this.data.poster_path === null || this.data?.adult === true) {
      return `${assets}/images/thumbnail.jpg`;
    } 

    return `${Api.poster}${this.data.poster_path}`;
  }
}

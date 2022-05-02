import { Component, Input, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { timestampToIso, timestampToString } from 'src/app/shared/utilities';
import { CommentInterface } from './comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment!: CommentInterface;

  constructor(library: FaIconLibrary) {
    library.addIcons(faCalendar);
  }

  ngOnInit(): void {}

  get Date() {
    return timestampToString(this.comment.createdAt);
  }

  get DateIso() {
    return timestampToIso(this.comment.createdAt);
  }
}

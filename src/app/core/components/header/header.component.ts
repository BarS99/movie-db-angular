import { Component, OnInit } from '@angular/core';
import { HeaderService, Menu } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: Menu[] = [];

  constructor(private headerService: HeaderService) {
    this.menu = headerService.Menu;
  }

  ngOnInit(): void {
  }

}

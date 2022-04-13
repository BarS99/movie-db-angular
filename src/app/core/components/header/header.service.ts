import { Injectable } from '@angular/core';

export interface Menu { 
  readonly name: string, 
  readonly path: string 
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private menu: Menu[] = [
    {
      name: "Home",
      path: "",
    },
    {
      name: "Favorite",
      path: "favorite",
    },
  ];

  constructor() {
  }

  get Menu(): Menu[] {
    return this.menu;
  }
}

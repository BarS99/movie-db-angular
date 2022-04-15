import { Injectable } from '@angular/core';
import { getLocalStorage } from '../shared/utilities';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  constructor() { }

  addToFavorite(id: number): number[] {
    let favoriteArray = getLocalStorage('favorite');

    if (!favoriteArray.includes(id)) {
      favoriteArray = [...favoriteArray, id];
    }

    localStorage.setItem('favorite', JSON.stringify(favoriteArray));

    return favoriteArray;
  }

  removeFromFavorite(id: number): number[] {
    let favoriteArray = getLocalStorage('favorite');
    
    favoriteArray = favoriteArray.filter((_id) => {
      return parseInt(_id) !== id;
    })

    localStorage.setItem('favorite', JSON.stringify(favoriteArray));

    return favoriteArray;
  }

  isFavorite(id: number): boolean {
    const favoriteStorage: null|string = localStorage.getItem('favorite');
    let favoriteArray: number[] = [];

    if (favoriteStorage !== null) {
      favoriteArray = JSON.parse(favoriteStorage);
    }

    return favoriteArray.includes(id);
  }
}

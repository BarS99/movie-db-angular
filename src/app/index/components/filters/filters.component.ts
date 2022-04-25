import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/app.state';
import { GenreInterface } from 'src/app/shared/components/card/card.model';
import { FiltersService } from './filters.service';
import { updateGenre, updateYear } from './state/filters.actions';
import { selectFilters } from './state/filters.selectors';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit  {
  genres$!: Observable<GenreInterface[]>;
  genreId: string = "";
  year: string = "";

  constructor(private filtersService: FiltersService, private formBuilder: FormBuilder, private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.genres$ = this.filtersService.getGenres();

    this.store.select(selectFilters).subscribe((state) => {
      this.genreId = state.genreId;
      this.year = state.year;
    })
  }

  generateYears(): number[] {
    return this.filtersService.generateYears(1900, new Date().getFullYear());
  }

  updateGenre() {
    this.store.dispatch(updateGenre({genreId: this.genreId}));
  }

  updateYear() {
    this.store.dispatch(updateYear({year: this.year}));
  }
}

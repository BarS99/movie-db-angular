import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GenreInterface } from 'src/app/shared/components/card/card.model';
import { FiltersService } from './filters.service';
import { updateGenre, updateYear } from './store/filters.actions';
import { FiltersStoreInterface } from './store/filters.reducer';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, AfterViewInit  {
  filtersForm!: FormGroup;
  genres$!: Observable<GenreInterface[]>;

  constructor(private filtersService: FiltersService, private formBuilder: FormBuilder, private store: Store<{filters: FiltersStoreInterface}>) {}

  ngOnInit(): void {
    this.filtersForm = this.formBuilder.group({
      genre: new FormControl(""),
      year: new FormControl(""),
    });

    this.genres$ = this.filtersService.getGenres();
  }

  ngAfterViewInit(): void {
    this.store.select('filters').subscribe((params) => {
      this.filtersForm.setValue({
        genre: params.genre || "",
        year: params.year || "",
      })
    });
  }

  generateYears(): number[] {
    return this.filtersService.generateYears(1900, new Date().getFullYear());
  }

  updateGenre() {
    this.store.dispatch(updateGenre({genre: this.filtersForm.value.genre}));
  }

  updateYear() {
    this.store.dispatch(updateYear({year: this.filtersForm.value.year}));
  }
}

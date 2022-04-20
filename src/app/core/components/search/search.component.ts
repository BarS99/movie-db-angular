import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, Observable } from 'rxjs';
import { Api, assets } from 'src/environments/environment';
import { SearchInterface } from './search.model';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('searchForm') searchForm!: NgForm;
  autocomplete$!: Observable<SearchInterface[]>|null;
  searchInput = "";

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {}
  
  ngAfterViewInit(): void {
    this.searchForm.valueChanges?.pipe(debounceTime(500)).subscribe((params) => {
      if (params.search?.length > 2) {
        this.search(params.search);
      } else {
        this.autocomplete$ = null;
      }
    })
  }

  search(value: string): void {
    this.autocomplete$ = this.searchService.getSearch(value);
  }

  getHref(id: number): string {
    return `/movie/${id}`;
  }

  getPosterPath(item: SearchInterface): string {
    if (item?.poster_path === null) {
      return `${assets}/images/thumbnail.jpg`;
    }

    return `${Api.poster}${item.poster_path}`;
  }

  onBlur() {
    this.searchInput = "";
  }
}

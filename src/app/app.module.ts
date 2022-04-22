import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndexComponent } from './index/index.component';
import { Page404Component } from './page404/page404.component';
import { CardComponent } from './shared/components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { FiltersComponent } from './index/components/filters/filters.component';
import { filtersReducer } from './index/components/filters/store/filters.reducer';
import { indexReducer } from './index/store/index.reducer';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Page404Component,
    CardComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ filters: filtersReducer, movies: indexReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}

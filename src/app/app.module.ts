import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltersComponent } from './index/components/filters/filters.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { filtersReducer } from './index/components/filters/state/filters.reducer';
import { environment } from 'src/environments/environment';
import { indexReducer } from './index/state/index.reducer';
import { EffectsModule } from '@ngrx/effects';
import { IndexEffects } from './index/state/index.effects';
import { FiltersEffects } from './index/components/filters/state/filters.effects';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({filters: filtersReducer, index: indexReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production, 
      autoPause: true, 
    }),
    EffectsModule.forRoot([IndexEffects, FiltersEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}

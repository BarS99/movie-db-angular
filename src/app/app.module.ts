import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCalendar, faVideo } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { Page404Component } from './page404/page404.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { CardViewComponent } from './card/card-view/card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    Page404Component,
    FooterComponent,
    CardComponent,
    LoaderComponent,
    CardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faVideo, faCalendar);
  }
}

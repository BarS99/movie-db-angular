import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCalendar, faVideo } from '@fortawesome/free-solid-svg-icons';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faVideo, faCalendar);
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SummaryPipe } from './pipes/summary';
import { FormsModule } from '@angular/forms';
import { Filter } from './pipes/filter';
import { AlertifyService } from './Services/alertify.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    SummaryPipe,
    Filter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

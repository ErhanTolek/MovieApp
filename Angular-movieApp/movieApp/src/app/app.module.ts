import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SummaryPipe } from './pipes/summary';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Filter } from './pipes/filter';
import { AlertifyService } from './Services/alertify.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CreateMovieComponent } from './create-movie/create-movie.component'
import { getCategorized } from './pipes/getCategorized';
import { getPopular } from './pipes/getPopular';
import { CreateCategoryComponent } from './create-category/create-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    SummaryPipe,
    Filter,
    getCategorized,
    CreateMovieComponent,
    getPopular,
    CreateCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

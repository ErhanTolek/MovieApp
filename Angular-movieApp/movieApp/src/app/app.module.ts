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
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CreateMovieComponent } from './create-movie/create-movie.component'
import { getCategorized } from './pipes/getCategorized';
import { getPopular } from './pipes/getPopular';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptor } from './Services/auth.interceptor';
import { MovieHomeComponent } from './movies/movie-home/movie-home.component';
import { ErrorComponent } from './common/error/error.component';
import { LoadingComponent } from './common/loading/loading.component';
import { getListed } from './pipes/getListed';

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
    CreateCategoryComponent,
    AuthComponent,
    MovieHomeComponent,
    ErrorComponent,
    LoadingComponent,
    getListed
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AlertifyService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

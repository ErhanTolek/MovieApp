import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { CategoriesComponent } from './categories/categories.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';

const routes : Routes = [
  {path: 'movies/category/:id', component: MoviesComponent},
  {path: 'movies/category', component: CategoriesComponent},
  {path: 'movies/details/:movieId', component: MovieDetailsComponent},
  {path: 'movies/create', component: CreateMovieComponent},
  {path: 'movies', component: MoviesComponent },
  {path: '', redirectTo: 'movies', pathMatch:'full'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { CategoriesComponent } from './categories/categories.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { MovieHomeComponent } from './movies/movie-home/movie-home.component';
import { MovieComponent } from './movies/movie/movie.component';
import { DeactivateGuard } from './guards/deactivate.guard';

const routes : Routes = [
  {path: '', redirectTo: 'movies', pathMatch:'full'},
  {path: 'movies', component: MovieHomeComponent, canActivate:[AuthGuard],children:[
    {path: '', component:MoviesComponent},
    {path: 'category/:id', component: MoviesComponent},
    {path: 'category', component: CategoriesComponent},
    {path: 'details/:movieId', component: MovieDetailsComponent},
    {path: 'create', component: CreateMovieComponent, canDeactivate:[DeactivateGuard]},
  ]},
  {path: 'login', component: AuthComponent},
  {path: 'category/create', component: CreateCategoryComponent,canDeactivate:[DeactivateGuard], canActivate:[AuthGuard]},
  {path: 'movie', component: MovieComponent, canActivate:[AuthGuard]}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

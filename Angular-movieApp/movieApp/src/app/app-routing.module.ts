import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { CategoriesComponent } from './categories/categories.component';

const routes : Routes = [
  {path: 'movies/category/:id', component: MoviesComponent},
  {path: 'movies/category', component: CategoriesComponent},
  {path: 'movies', component: MoviesComponent },
  {path: '', redirectTo: 'movies', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

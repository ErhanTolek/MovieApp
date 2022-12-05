import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { Category } from '../models/CategoriesModel';
import { Movies } from '../models/model';
import { MoviesComponent } from '../movies/movies.component';
import { CategoryServices } from '../Services/category.service';
import { MoviesServices } from '../Services/movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
  providers: [CategoryServices,MoviesServices,Validators]
})
export class CreateMovieComponent implements OnInit {
  categories: Category[];
  movies: Movies[];
  NewMovies : Movies[] = [];
  model: any = {
    categoryId: -1
  };
  

  constructor(private Categoryservice : CategoryServices, private Movies:MoviesServices, private router: Router) {

   }

  ngOnInit(): void {
    this.Categoryservice.getCategory().subscribe(
      data => {
        this.categories = data
      }
    )
    this.Movies.getMovies().subscribe(
      data => {
        this.movies = data
      }
    )
  }

  selectedValue(value : string){
    console.log(value)
  }
  log(x :any){
    console.log(x);
  }

  createMovie(){

    console.log(this.model)
    

      const newFilm : Movies = 
      {
        id : 0,
        name: this.model.title,
        description: this.model.description,
        imageurl: this.model.url,
        isPopular: false,
        categoryId: this.model.categoryId
      }
      this.Movies.putMovies(newFilm).subscribe();
      this.router.navigateByUrl('movies')
  }
}

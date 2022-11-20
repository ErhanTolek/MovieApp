import { Component, OnInit } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { Categories, Category } from '../models/CategoriesModel';
import { Movies } from '../models/model';
import { MoviesComponent } from '../movies/movies.component';
import { CategoryServices } from '../Services/category.service';
import { MoviesServices } from '../Services/movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
  providers: [CategoryServices,MoviesServices]
})
export class CreateMovieComponent implements OnInit {
  categories: Category[];
  movies: Movies[];
  NewMovies : Movies[] = [];

  constructor(private Categoryservice : CategoryServices, private Movies:MoviesServices) {

   }

  ngOnInit(): void {
    this.Categoryservice.category.subscribe(
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

  createMovie(title: any ,description: any,url: any,category : any ){

    const newFilm : Movies = 
      {
        id : 0,
        name: title.value,
        description: description.value,
        imageurl: url.value,
        isPopular: false,
        categoryId: category.value
      }
  

    this.Movies.putMovies(newFilm).subscribe()
    

  }
}

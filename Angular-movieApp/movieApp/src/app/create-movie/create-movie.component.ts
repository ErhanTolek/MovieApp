import { Component, OnInit } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { Categories, Category } from '../models/CategoriesModel';
import { MoviesComponent } from '../movies/movies.component';
import { CategoryServices } from '../Services/category.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
  providers: [CategoryServices]
})
export class CreateMovieComponent implements OnInit {
  categories: Category[];
  title: string  ='';
  description: string=''
  url:string=''
  category : string=''
  constructor(private Categoryservice : CategoryServices) {

   }

  ngOnInit(): void {
    this.Categoryservice.category.subscribe(
      data => {
        this.categories = data
      }
    )
  }

  selectedValue(value : string){
    console.log(value)
  }

}

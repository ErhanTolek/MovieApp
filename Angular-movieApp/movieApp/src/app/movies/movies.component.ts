import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Category } from '../models/CategoriesModel';
import { Films, Model, Movies } from '../models/model';
import { Filter } from '../pipes/filter';
import { AlertifyService } from '../Services/alertify.service';
import { MoviesServices } from '../Services/movies.service';

declare let alertify : any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesServices]
})
export class MoviesComponent implements OnInit{
  title = "Film Listesi"
  model = new Model();
  searchText: string = "";
  
  categoryId : any;

  movies: Movies[]= [];
  


  alertify1: AlertifyService = new AlertifyService;
  constructor(private alertify2: AlertifyService, private ActivatedRoute: ActivatedRoute, private movieService : MoviesServices){
  }
  ngOnInit(): void {
      this.movieService.getMovies().subscribe(
        (data) =>{
          this.movies = data
          console.log(data)
        }
      )
      this.ActivatedRoute.params.subscribe(
        params => {
          this.categoryId = params['id'];
          console.log(this.categoryId)
        }
      )
      }

  
  getCategoryFilms(){
    if(this.categoryId){
      return this.movies.filter(i => i.categoryId == this.categoryId)
    }
    return this.movies
  }
  getPopularFilm(){
    return this.movies.filter(i => i.isPopular == true)
  }
  
  addList($event: any,movie: Movies){
    if($event.target.classList.contains('btn-primary')){
      $event.target.classList.remove("btn-primary");
      $event.target.classList.add("btn-danger");
      $event.target.innerText = 'Discard from List';


      this.alertify2.alertSuccess(movie.name + 'listeye eklendi')
    } else{
      $event.target.classList.remove("btn-danger");
      $event.target.classList.add("btn-primary");
      $event.target.innerText = 'Add to List';
      alertify.error(movie.name + 'listeden çıkarıldı')
    }
  }
  

}

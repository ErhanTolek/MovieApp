import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, pipe } from 'rxjs';
import { Movies } from '../models/model';
import { MoviesComponent } from '../movies/movies.component';
import { MoviesServices } from '../Services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MoviesServices, MoviesComponent]
})
export class MovieDetailsComponent implements OnInit {

  movieId: number;
  movie: Movies [] = []
  constructor(private route: ActivatedRoute, private movies: MoviesServices, public MoviesComponent : MoviesComponent) {}

  ngOnInit(): void {
    this.movies.getMovies().subscribe(
      data => {
        this.movie = data
      }
    )
    this.route.params.subscribe(
      params => {
        console.log(params['movieId'])
        this.movieId = params['movieId']
      }
    )
  }

  getMoviesDetails(){
    return this.movie.filter(
      i => i.id == this.movieId
    )
  }
  deleteMovie(id : any){
    this.movies.deleteMovies(id).subscribe();
  }
}

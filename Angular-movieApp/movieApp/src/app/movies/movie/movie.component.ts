import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { MoviesServices } from 'src/app/Services/movies.service';
import { Model, Movies } from '../../models/model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MoviesServices]
})
export class MovieComponent implements OnInit {
  model = new Model();
  listedMovieId: string[]= [];
  listedMovies : Movies[] = [];
  movies : Movies[] = [];
  userId : string;
  constructor(private movieService : MoviesServices,private authService: AuthService){
    
  }
  ngOnInit(): void {
      this.authService.user.subscribe(
        user => {
          this.userId = user.id
        }
      )
      this.movieService.getMovies().subscribe(
        data => {
          this.movies = data
        }
      )

      this.movieService.getListedMoviesId(this.userId).subscribe(
        data => {
          this.listedMovieId = data
        }
      )
  
    }
  
  
}

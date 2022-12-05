import { Component, OnInit } from '@angular/core';
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
  listedMovieId: any= [];
  movies : Movies[] = []
  constructor(private movieService : MoviesServices){
    
  }
  ngOnInit(): void {
    
      // this.movieService.getListedMovies().subscribe(
      //   data => {
      //     for(let i=0;i<data.length; i++){
      //       this.listedMovieId.push(data[i].movieId)  
            
      //     }
      //     console.log(this.listedMovieId)
      //   }
      // )
  
    
      // this.movieService.getMovies().subscribe(
      //   data =>{
      //     this.movies = data
      //   }
      // )
    }
  
  
  getListedMovies(){
    return this.movies.filter(movies => movies.id == this.listedMovieId)
  }
}

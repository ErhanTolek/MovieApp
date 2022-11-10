import { Component, OnInit } from '@angular/core';
import { Model } from '../../models/model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  model = new Model();
  getFilm(){
    return this.model.movies;
  }

}

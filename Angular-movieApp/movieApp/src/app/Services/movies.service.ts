import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { first, map, Observable, Subject } from "rxjs";
import { Movies } from "../models/model";

@Injectable()
export class MoviesServices{

    constructor(private http : HttpClient){}
    movies : Movies[] = []
    url = "http://localhost:3000/movies";
    url_firebase = "https://movieapp-204f3-default-rtdb.firebaseio.com/"
    
    getMovies(): Observable<Movies[]>{
        return this.http.get<Movies[]>(this.url_firebase + "/movies.json").pipe(
            map(res => {
                let movie: Movies[] = [];

                for(let key in res){
                    movie.push({...res[key], id : key})  
                };
                return movie
            }
                )
        )
    }

    putMovies(movie: any): Observable<Movies[]>{
        return this.http.post<Movies[]>(this.url_firebase + "/movies.json", movie)
    }
    
    deleteMovies(id : any): Observable<Movies[]>{
        const movieUrl = `http://localhost:3000/movies/${id}`    
        return this.http.delete<Movies[]>(movieUrl)
    }
}
import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { first, map, Observable, Subject } from "rxjs";
import { Movies } from "../models/model";
import { AuthService } from "./auth.service";

@Injectable()
export class MoviesServices implements OnInit{

    constructor(private http : HttpClient, private auth : AuthService){}
    ngOnInit(): void {
    }
    movies : Movies[] = []
    url = "http://localhost:3000/movies";
    url_firebase = "https://movieapp-204f3-default-rtdb.firebaseio.com/"
    token = "";
    
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
        const movieUrl = `https://movieapp-204f3-default-rtdb.firebaseio.com/movies/${id}.json`    
        return this.http.delete<Movies[]>(movieUrl)
    }
}
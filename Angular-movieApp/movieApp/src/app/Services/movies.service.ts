import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { first, Observable, Subject } from "rxjs";
import { Movies } from "../models/model";

@Injectable()
export class MoviesServices{

    constructor(private http : HttpClient){}
    movies : Movies[] = []
    url = "http://localhost:3000/movies";
    
    
    getMovies(): Observable<Movies[]>{
        return this.http.get<Movies[]>(this.url)
    }

    putMovies(movie: any): Observable<Movies[]>{
        return this.http.post<Movies[]>(this.url, movie)
    }
    
    deleteMovies(id : any): Observable<Movies[]>{
        const movieUrl = `http://localhost:3000/movies/${id}`    
        return this.http.delete<Movies[]>(movieUrl)
    }
}
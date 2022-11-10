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

    
}
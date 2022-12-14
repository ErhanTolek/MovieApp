import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { first, map, Observable, Subject, tap } from "rxjs";
import { Movies } from "../models/model";
import { movieList } from "../models/movieList";
import { AuthService } from "./auth.service";

@Injectable()
export class MoviesServices implements OnInit{

    constructor(private http : HttpClient, private auth : AuthService){}
    ngOnInit(): void {
    }
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

    add2List(list : movieList): Observable<movieList>{
        return this.http.post<movieList>(this.url_firebase + "/users/" + list.userId + "/userList/" + list.movieId + ".json",{
            dateAdded: new Date().getTime()
        })

    }
    removeFromList(userId: string, movieId: string): Observable<movieList>{
        return this.http.delete<movieList>(this.url_firebase+`/users/${userId}/userList/${movieId}.json`)
    }
    getListedMoviesId(userId: string): Observable<string[]>{
        return this.http.get<string[]>(this.url_firebase+ `/users/${userId}/userList.json`).pipe(
            map(data=>{
                const idList:string[] = []
                for(let key in data){
                    idList.push(key)
                }
                return idList
            }),
            tap(data => console.log(data))
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
import { Pipe, PipeTransform } from "@angular/core";
import { Movies } from "../models/model";

@Pipe({
    name : "getListed"
})
export class getListed implements PipeTransform{
    transform(movies : Movies[], listedMovieId: string[]) {
        const filteredMovies = 
        movies.filter(
            (e)=>{
                return listedMovieId.some(
                    (f)=>{
                        return e.id === f
                    }
                )
            }
        )
        return filteredMovies
    }
    
}
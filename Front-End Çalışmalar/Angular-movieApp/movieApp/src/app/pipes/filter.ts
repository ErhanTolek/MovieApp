import {Pipe, PipeTransform} from "@angular/core";
import { Movies } from "../models/model";
@Pipe(
    {name : 'filter'}
)
export class Filter implements PipeTransform{
    transform(movies: Movies[], searchText: string) {
        searchText = searchText.toLowerCase();
        console.log(searchText); 

       return  searchText? 
       movies.filter(m => m.name.toLowerCase().indexOf(searchText) !== -1 || m.description.toLowerCase().indexOf(searchText) !== -1):
       movies;
             
    }
}
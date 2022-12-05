import {Pipe, PipeTransform} from "@angular/core";
import { Movies } from "../models/model";

@Pipe(
    {name : 'getCategorized'}
)
export class getCategorized implements PipeTransform{
    transform(movies : Movies[], categoryId: any){
        if(categoryId){
            return movies.filter(i => i.categoryId == categoryId)
          }
          return movies
    }

}
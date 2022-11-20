import { Pipe, PipeTransform } from "@angular/core";
import { Movies } from "../models/model";
@Pipe(
    {name: "getPopular"}
)

export class getPopular implements PipeTransform {
    transform(movies : Movies[]) {
        return movies.filter(i => i.isPopular === true)
    }
}
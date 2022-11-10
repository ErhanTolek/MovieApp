import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/CategoriesModel";

@Injectable()
export class CategoryServices{
    url = "http://localhost:3000/categories";
    category : Observable<Category[]> |undefined;
    constructor(private http: HttpClient){
        this.category = this.http.get<Category[]>(this.url)
    }

}
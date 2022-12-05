import { HttpClient } from "@angular/common/http";
import { TypeofExpr } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Category } from "../models/CategoriesModel";

@Injectable()
export class CategoryServices{
    url = "http://localhost:3000/categories";
    url_firebase = "https://movieapp-204f3-default-rtdb.firebaseio.com/"
    category : Observable<Category[]> |undefined;
    constructor(private http: HttpClient){
        this.category = this.http.get<Category[]>(this.url)
    }

    putCategory(category: Category[]){
      return  this.http.post<Category[]>(this.url_firebase + "categories.json", category);
    }

    getCategory(){
        return this.http.get<Category[]>(this.url_firebase + "categories.json").pipe(
            map(res => {
                let newCategory: Category[] = [];
                for(let key in res){
                    newCategory.push({...res[key], id : key})
                }
                return newCategory;
            })
        )
    }
}
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category, Categories } from '../models/CategoriesModel';
import { CategoryServices } from '../Services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoryServices]
})
export class CategoriesComponent implements OnInit {
  isDisplayedAll = true;
  selectedCategory!: Category;
  categories: Category[] | undefined;


  ngOnInit(){
    this.CategoryServices.category?.subscribe(
      (data) => {
        this.categories = data;
      }
    )
  }
  constructor(private http : HttpClient, private CategoryServices : CategoryServices){
  }
  
  categories1 = new Categories()
  getCategory(){
    return this.categories1.categories
  }
  selectCategory(item?: Category){
    if(item){
      this.selectedCategory = item
      this.isDisplayedAll = false
    }
    else{
      this.selectedCategory
      this.isDisplayedAll = true
    }
  }

}

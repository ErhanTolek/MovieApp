import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category} from '../models/CategoriesModel';
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
    this.CategoryServices.getCategory().subscribe(
      (data) => {
        this.categories = data;
      }
    )
    
  }
  constructor(private CategoryServices : CategoryServices, private ActivatedRoute : ActivatedRoute){

    
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

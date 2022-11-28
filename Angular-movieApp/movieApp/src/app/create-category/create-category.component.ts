import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/CategoriesModel';
import { CategoryServices } from '../Services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
  providers: [CategoryServices]
})
export class CreateCategoryComponent implements OnInit {
  category_model: any = {};
  constructor(private CategoryService: CategoryServices, private router: Router) { }

  ngOnInit(): void {
    this.CategoryService.getCategory().subscribe(
      data => console.log(data)
    )
  }

  createCategory(){
    this.CategoryService.putCategory(this.category_model).subscribe();
    this.router.navigateByUrl('/movies')
  }
}

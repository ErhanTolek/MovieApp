import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
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
  @ViewChild('form', {static: true}) form : NgForm;
  category_model: any = {};
  
  constructor(private CategoryService: CategoryServices, private router: Router) { }

  ngOnInit(): void {
    this.CategoryService.getCategory().subscribe(
      data => console.log(data)
    )
    console.log('asdda:', this.form)
  }

  createCategory(){
    this.CategoryService.putCategory(this.category_model).subscribe();
    this.router.navigateByUrl('/movies')
  }
  canExit():boolean{
    let response : boolean = true
    if(this.form.dirty && !this.form.pristine){
     response = confirm('You have unsaved changes. Do you want leave anyway?')
    }
    return response
  }
}

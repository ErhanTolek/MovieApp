import { trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Model, todoItems } from './model';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  isDisplayAll = false;
  value = "";
  

  getName(){
    return this.model.name
  };
  
  getItems(){
    if(!this.isDisplayAll){
      return this.model.items.filter(item => !item.action)
    }
    return this.model.items
  }
  addItem(){

    if(this.value != ""){
      this.model.items.push(new todoItems(this.value, false))
      this.setItemtoLS("items", this.model.items)
    }
  }
  onChangeAction(item: any){
    let i = this.getItemfromLS();
    localStorage.clear();
    i.forEach(a => {
      if(a.description = item.description){
        a.action = item.action
     }
  })
    this.setItemtoLS("items", i);
  }
  getItemfromLS(){
 
   let things : todoItems[] = [];
   let value = localStorage.getItem("items");
  
   if(value!= null){
    things=JSON.parse(value)
   }

   return things

  }

  setItemtoLS(key : string, items : any ){
    localStorage.setItem(key, JSON.stringify(items))
  }





  // viewMap = "map";
  // title = 'todo app';
  // items = {
  //   desc : "kahvaltı",
  //   act : true 
  // }
  // getItem(){
  //   return this.title
  // }
}

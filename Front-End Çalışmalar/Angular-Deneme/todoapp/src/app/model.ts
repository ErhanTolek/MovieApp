export class Model{
    name;
    items;
    constructor(){
        this.name = "erhan";
        this.items = [
                new todoItems("Kahvaltı", true),
                new todoItems("Spor", false),
                new todoItems("Gezi", true),
                new todoItems("Ders", false),
                // {description:"Kahvaltı", action:"Yes"},
                // {description:"Spor", action:"No"},
                // {description:"Ders", action:"Yes"},
                // {description:"Gezi", action:"No"}
              ];
        
    }

}

export class todoItems{
    // description;
    // action;
    constructor(public description: string, public action: boolean){}

    // constructor(description: string, action: boolean){
    //     this.description = description;
    //     this.action = action;
    // }

}
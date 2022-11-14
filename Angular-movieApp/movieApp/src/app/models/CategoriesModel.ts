export class Categories{
    categories
    constructor(){
        this.categories= [
            // new Categorie("1", "All"),
            new Category("2", "Adventure"),
            new Category("3", "Romantic"),
            new Category("4", "Sci-Fi"),
            new Category("5", "Comedy")
        ]
        

    }
}


export class Category{
    constructor(public id: string, public categorie: string){
    }
}
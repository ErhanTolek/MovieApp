export class Model{
    movies;
    constructor(){
        this.movies = [ new Films("Film1", 'lorem10', 'assets/img/1.jpeg',false),
        new Films("Film2", 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, odit!', 'assets/img/2.jpeg', true),
        new Films("Film3", 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, odit!', 'assets/img/3.jpeg', true),
        new Films("Film4", 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, odit!', 'assets/img/4.jpeg', true),
    ]
        

    }
}

 export interface Movies{
    id: string;
    name: string;
    description : string;
    imageurl: string;
    isPopular: string;

 }

export class Films{
    constructor(public MovieName: string, public MovieLorem : any, public MovieImgSrc: any, public isPopular: boolean){
    }
}


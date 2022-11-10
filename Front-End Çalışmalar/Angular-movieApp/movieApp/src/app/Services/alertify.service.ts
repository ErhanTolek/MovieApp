import { Injectable } from "@angular/core";


declare let alertify: any;


@Injectable()

export class AlertifyService{
    constructor(){}

    alertSuccess(message: string){
        alertify.success(message)
    }

}
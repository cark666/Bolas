import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable,tap,throwError } from "rxjs";


@Injectable()

export class PublicService{

constructor(private http:HttpClient) {}

private handleError(error: Response){

    console.log(error)
const msg = 'Error status code' + error.status + 'status' + error.statusText ;
return throwError(msg)

}





}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable,tap,throwError } from "rxjs";


@Injectable()

export class PublicService{

constructor(private http:HttpClient) {}

getUsers():Observable<any> {
return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
    tap(console.log),
    catchError(this.handleError)
)
}
getPosts():Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
        tap(console.log),
        catchError(this.handleError)
    )
}
getComments():Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments').pipe(
        tap(console.log),
        catchError(this.handleError)
    )
}

private handleError(error: Response){

    console.log(error)
const msg = 'Error status code' + error.status + 'status' + error.statusText ;
return throwError(msg)

}





}
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from 'rxjs/operators';
import { IDive } from "./IDive";

@Injectable({
    providedIn: 'root'
})
export class DiveService {
    /**
     *
     */
    constructor(private http: HttpClient) {

    }

    getDicks(): any {
        return this.http.get("dicksUrls");
    };
    // private readonly serviceUrl = "api/products/products.json";
    private readonly serviceUrl = "http://localhost:5000/api/Appointment/GetDives?date=2018-02-02";

    getProducts(): Observable<IDive[]> {
        return this.http.get<IDive[]>(this.serviceUrl).pipe(
            tap(data => console.log('All data', data)),
            catchError(this.handleError)
        )
    }
    handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `Client side or network-related error occurred: ${err.error.message}`
        } else {
            //backend returned an error response
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(err);
    }
}
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IProduct } from "./IProduct";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    /**
     *
     */
    constructor(private http: HttpClient) {

    }

    getDicks(): any {
        return this.http.get("dicksUrls");
    };
    private readonly serviceUrl = "api/products/products.json";
    // private readonly serviceUrl = "http://localhost:5000/api/values/GetProducts";

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.serviceUrl).pipe(
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
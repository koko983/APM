import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProduct } from "./IProduct";
import { Observable } from "rxjs";

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
    getProducts():  Observable<IProduct[]> {
        return this.http.get<IProduct[]>("api/products/products.json").pipe(
            
        )
    }
}
import { Component, OnInit } from "@angular/core";
import { IProduct } from "./IProduct";
import { ProductService } from "./product.service";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html"
})
export class ProductListComponent implements OnInit {
    title: string = 'Available products';
    showImages: boolean = false;
    currentRating: string;
    _filter: string;
    get filter(): string {
        return this._filter;
    }
    set filter(value: string) {
        this._filter = value;
        this.finalProducts = value ? this.filterProducts(value) : this.products;
    }
    finalProducts: IProduct[];
    products: IProduct[];

    /****/
    constructor(private productService: ProductService) {

    }

    filterProducts(value: string): IProduct[] {
        var maFilter = value.toLowerCase();
        return this.products.filter((p: IProduct) => p.productName.toLowerCase().includes(maFilter) || p.productCode.includes(this.filter));
    };

    toggleImages(): void {
        this.showImages = !this.showImages;
    };

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.finalProducts = this.products;
            }
        );
    }

    onRatingClickedToo(message: string): void {
        this.currentRating = message;
    }
}
import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import { ProductService } from './product.service';
import { Router, Routes, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  id: number;
  pageTitle: string = "Product";
  product: IProduct;

  constructor(private productService: ProductService,
     private route: ActivatedRoute,
     private router: Router) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => this.product = products.find(p => p.productId === this.id)
    )
  }

  onBack():void{
    this.router.navigate(['/products']);
  }
}

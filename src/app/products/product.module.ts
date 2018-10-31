import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { StarComponent } from "../shared/star.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ProductDetailGuard } from "./product-detail.guard";
import { ConvertToSpacePipe } from "../shared/covert-to-space.pipe";

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        StarComponent,
        ConvertToSpacePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
        ])
    ]
})
export class ProductModule { }
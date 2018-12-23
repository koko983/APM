import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { RouterModule } from "@angular/router";
import { ProductDetailGuard } from "./product-detail.guard";
import { ConvertToSpacePipe } from "../shared/covert-to-space.pipe";
import { SharedModule } from "../shared/shared.module";
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ConvertToSpacePipe
    ],
    imports: [
        SharedModule,
        // MatButtonModule, MatCheckboxModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
        ])
    ]
})
export class ProductModule { }
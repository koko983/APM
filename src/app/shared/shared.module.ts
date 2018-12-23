import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StarComponent } from "./star.component";
import { ListDisplayerComponent } from "./list-displayer.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations:[
        StarComponent,
        ListDisplayerComponent
    ],
    exports:[
        CommonModule,
        FormsModule,
        StarComponent,
        ListDisplayerComponent
    ]
})
export class SharedModule{}
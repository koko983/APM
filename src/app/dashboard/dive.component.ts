import { Component, OnChanges, Input } from "@angular/core";
import { IDive } from "./IDive";

@Component({
    selector: ".diveTable",
    templateUrl: "./dive.component.html"
})
export class DiveComponent {
    @Input() dive: IDive;
}
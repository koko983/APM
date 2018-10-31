import { IDive } from "./IDive";
import { Component } from "@angular/core";
import { DiveService } from "./dive.service";

@Component({
    selector: "ex-dashboard",
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent {
    singleDive: IDive = {
        "Id": "08d63dd5-426d-b954-31d8-b9bdcec537c6",
        "number": "08d63dd5-426d-b954-31d8-b9bdcec537c6",
        "chamber": {
            "name": "A",
            "seats": [
                {
                    "id": "08d63dd5-4232-cd76-dac2-3e20e030ebfa",
                    "name": "1A",
                    "appointment": null
                },
                {
                    "id": "08d63dd5-4235-1066-6082-ad411446b305",
                    "name": "2A",
                    "appointment": null
                },
                {
                    "id": "08d63dd5-4235-17e8-5f3b-0a26c28d787b",
                    "name": "3A",
                    "appointment": null
                },
                {
                    "id": "08d63dd5-4235-1d79-08e4-68484bca16a7",
                    "name": "4A",
                    "appointment": null
                },
                {
                    "id": "08d63dd5-4235-226d-1b92-342c292ba9e7",
                    "name": "5A",
                    "appointment": null
                },
                {
                    "id": "08d63dd5-4235-26f7-331f-05e27e62c87c",
                    "name": "1B",
                    "appointment": null
                },
                {
                    "id": "08d63dd5-4235-2c61-2159-170c3fd5ef67",
                    "name": "2B",
                    "appointment": null
                },
                {
                    "id": "08d63dd5-4235-3197-b968-4d34c5142251",
                    "name": "3B",
                    "appointment": null
                },
                {
                    "id": "08d63dd5-4235-373a-8248-69c182ab9cc3",
                    "name": "4B",
                    "appointment": null
                },
                {
                    "id": "08d63dd5-4235-3d26-f73a-b74f33891e3c",
                    "name": "5B",
                    "appointment": null
                }
            ]
        },
        "start": "2018-02-02T09:00:00",
        "end": "2018-02-02T11:30:00"
    };

    dives: IDive[];

    constructor(private diveService: DiveService) {

    }

    ngOnInit(): void {
        this.diveService.getProducts().subscribe(
            dives => {
                this.dives = dives;
            }
        );
    }
}
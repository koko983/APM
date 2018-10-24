import { IDive } from "./IDive";
import { Component } from "@angular/core";

@Component({
    selector: "ex-dashboard",
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent {
    singleDive: IDive = {
        number: 216,
        chamber: 'B',
        start: '12 PM',
        end: '1:45 PM',
        seats: ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B', '5A', '5B'],
        patients: [{
            id: 4,
            name: 'Mimi Dickhead'
        },
        {
            id: 31,
            name: 'Joe Smith'
        }]
    };
    dives: IDive[] = [{
        number: 213,
        chamber: 'A',
        start: '9 AM',
        end: '11:30 AM',
        seats: ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B', '5A', '5B'],
        patients: [{
            id: 1,
            name: 'Bibi Chaplin'
        },
        {
            id: 32,
            name: 'Stonton Stone'
        }]
    },
    {
        number: 216,
        chamber: 'B',
        start: '12 PM',
        end: '1:45 PM',
        seats: ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B', '5A', '5B'],
        patients: [{
            id: 4,
            name: 'Mimi Dickhead'
        },
        {
            id: 31,
            name: 'Joe Smith'
        }]
    }];
}
import { IPatient } from "./IPatient";

export interface IDive {
    number: number;
    chamber: string;
    start: string;
    end: string;
    seats: string[];
    patients: IPatient[];
}
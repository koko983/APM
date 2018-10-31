import { IChamber } from "./IChamber";
import { ISeat } from "./ISeat";

export interface IDive {
    Id: string;
    number: string;
    chamber: IChamber;
    start: string;
    end: string;
}
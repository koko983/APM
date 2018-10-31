import { IAppointment } from "./IAppointment";

export interface ISeat{
    id: string;
    name: string;
    appointment: IAppointment;
}
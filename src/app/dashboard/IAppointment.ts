import { IPatient } from "./IPatient";

export interface IAppointment{
    date: string;
    arrivalTime: string;
    statusValue: string;
    patinet: IPatient;
    // DateTime Date ;

    // DateTime? ArrivalTime ;

    // AppointmentStatus Status ;

    // string StatusValue => Enum.GetName(typeof(AppointmentStatus), Status);

    // PatientDto Patient ;
}
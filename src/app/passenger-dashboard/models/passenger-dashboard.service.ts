import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Passenger } from "./passenger.interface";

@Injectable()
export class PassengerDashboardService {
    constructor(private http: HttpClient) {

    }
    getPassengerList(): Observable<Passenger[]> {
        return this.http.get<Passenger[]>('http://localhost:5000/passengers');
    }
    getPassenger(id: number): Observable<Passenger> {
        return this.http.get<Passenger>('http://localhost:5000/passengers/' + id);
    }


    deletePassenger(id: number): Observable<Passenger> {
        return this.http.delete<Passenger>('http://localhost:5000/passengers/' + id);
    }

    updatePassengers(passenger: Passenger) : Observable<Passenger> {
        return this.http.put<Passenger>('http://localhost:5000/passengers/' + passenger.id, passenger);
    }

}
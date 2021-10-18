import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-count',
    templateUrl: './passenger-count.component.html',
    styleUrls: ['./passenger-count.component.scss']
})
export class PassengerCountComponent {

    @Input()
    items: Passenger[] | undefined;

    constructor(){}

    getActivePassenger() {
        return this.items?.filter((passenger: Passenger) => passenger.status).length;
    }
}
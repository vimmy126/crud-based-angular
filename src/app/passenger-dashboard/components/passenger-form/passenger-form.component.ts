import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { baggage } from "../../models/baggage.interface";
import { Passenger } from "../../models/passenger.interface";
@Component({
    selector: 'passenger-form',
    templateUrl: './passenger-form.component.html',
    styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent {

    showBookedDate: boolean = true;

    @Input()
    detail: Passenger | undefined;

    @Output()
    update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    constructor(private router: Router) {
    }

    baggages: baggage[] = [
        { key: 'none', value: 'None' },
        { key: 'hand-baggage', value: 'Hand Baggage' },
        { key: 'hold-baggage', value: 'Hold Baggage' },
        { key: 'hand-hold-baggage', value: 'Hand Hold Baggage' },
    ]

    goBack() {
        this.router.navigate(['/passengers'])
    }

    showHideBookingDate(event: boolean) {
        if(event) {
            this.showBookedDate = true;
            this.detail = Object.assign({}, this.detail, {bookedDate: Date.now()})
        }else {
            this.showBookedDate = false;
        }
    }

    onSubmit(formValue: Passenger, valid: any){
            if(valid) {
                this.update.emit(Object.assign({}, this.detail, formValue));
            }
            
       
    }
}
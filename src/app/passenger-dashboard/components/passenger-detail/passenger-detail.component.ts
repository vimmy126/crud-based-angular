import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    templateUrl: './passenger-detail.component.html',
    styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent {

    editing: boolean = false;
    updatedObject: Passenger | undefined;
    

    @Input()
    detail: Passenger | undefined;

    @Output()
    delete: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    view: EventEmitter<Passenger> = new EventEmitter<Passenger>();



    constructor(){}

    toggleEditing(event: any) {
        event.preventDefault();
        if(this.editing) {
            this.update.emit(this.updatedObject);  
        }
        this.editing = !this.editing;
    }

    handleDelete() {
        this.delete.emit(this.detail);
    }

    updateName(value: any) {
        if(value === "") return;
        this.updatedObject = Object.assign({}, this.detail, {name: value});        
    }

    goToView() {
        this.view.emit(this.detail);
    }
}
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PassengerDashboardService } from "../../models/passenger-dashboard.service";
import { Passenger } from "../../models/passenger.interface";


@Component({
    selector: 'passenger-dashboard',
    templateUrl: './passenger-dashboard.component.html',
    styleUrls: ['./passenger-dashboard.component.scss']
})

export class PassengerDashboardComponent implements OnInit {

    passengerList: Passenger[] | undefined;

    constructor(private passengerDashboardService: PassengerDashboardService, private router: Router){}
    
    ngOnInit() {
        this.passengerDashboardService.getPassengerList().subscribe((data: Passenger[]) => {
            this.passengerList = data;
        })
    }


    onDelete(event: Passenger) {
        this.passengerDashboardService.deletePassenger(event.id).subscribe(() => {   
            this.passengerList = this.passengerList?.filter(passenger => passenger.id !== event.id);
        })
        
    }

    onUpdate(event: Passenger) {
       this.passengerDashboardService.updatePassengers(event).subscribe((data: Passenger) => {
          this.passengerList = this.passengerList?.map(passenger => {
               if(passenger.id === data.id) {
                   return Object.assign({}, passenger, data);
               }
               return passenger;
           })
       });
    }

    onView(event: Passenger) {
        this.router.navigate(['/passengers', event.id]);
    }

}
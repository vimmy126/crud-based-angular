import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PassengerDashboardService } from "../../models/passenger-dashboard.service";
import { Passenger } from "../../models/passenger.interface";
@Component({
    selector: 'passenger-viewer',
    templateUrl: './passenger-viewer.component.html',
    styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {
    passenger: Passenger | undefined;
    constructor(private passengerDashboardService: PassengerDashboardService, private router: Router, private route: ActivatedRoute) {
        
    }

    ngOnInit() {
        this.route.params.subscribe(data => {
            this.passengerDashboardService.getPassenger(data.id).subscribe((data: Passenger) => {
                this.passenger = data;
            });
        })
       
    }

    onUpdate(event: Passenger){
        this.passengerDashboardService.updatePassengers(event).subscribe((data: any) => {
            this.router.navigate(['/passengers']);
        })
    }

}
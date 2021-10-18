import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";


import { PassengerDashboardService } from "./models/passenger-dashboard.service";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";



const routes: Routes = [
    { path: 'passengers', children: [
        { path: '', component: PassengerDashboardComponent },
        { path: ':id', component: PassengerViewerComponent }
    ]}
];

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerViewerComponent,
        PassengerFormComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        PassengerDashboardComponent
    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {

}
import { Component } from "@angular/core";
@Component({
    selector: 'app-nav',
    template: `<nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="container">
      <a class="navbar-brand" routerLink="/">Bus Seat Booking Status</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/passengers" routerLinkActive="active">Passengers</a>
        </li>
        <li class="nav-item">
          <a routerLink="/about" class="nav-link" routerLinkActive="active">About this app</a>
        </li>
      
      </ul>
    </div>
  </nav>`,
})
export class NavComponent {

}
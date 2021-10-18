import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: 'not-found',
    template: `<div class="container">
    <div class="row">
      <div class="col-12 py-3 text-center">
        <p class="text-center">Oops</p>
        <p class="mb-0 text-center">The information you are looking for is not available</p>
        <button type="button" (click)="goBacktoHome()" class="btn btn-sm btn-outline-secondary mt-4">Go back to Dashboard</button>
      </div>
    </div>
  </div>`
})
export class NotFoundComponent {

    constructor(private router: Router) {}

    goBacktoHome() {
        this.router.navigate(['/']);
    }

}
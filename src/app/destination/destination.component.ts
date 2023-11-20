import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent {
  bookingForm = new FormGroup({
    destination: new FormControl(''),
    arrivalDate: new FormControl(''),
    departureDate: new FormControl('')
  });

  constructor(private router: Router) { }

  onSubmit() {
    // Here you might want to do something with the form data, like sending it to a server
    // After handling the form submission:
    this.router.navigate(['/booking-summary']);
  }
}

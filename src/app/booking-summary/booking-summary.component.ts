import { Component } from '@angular/core';

interface Seat {
  id: number;
  status: 'available' | 'selected' | 'booked';
}

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.scss']
})
export class BookingSummaryComponent {

  seats: Seat[] = Array(100).fill(null).map((_, index) => ({
    id: index,
    status: 'available' // other statuses can be 'selected' or 'booked'
  }));

  selectSeat(seat: Seat): void {
    if (seat.status === 'available') {
      seat.status = 'selected';
    } else if (seat.status === 'selected') {
      seat.status = 'available';
    }
    // 'booked' seats should not be clickable
  }
}

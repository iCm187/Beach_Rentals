import { Component, OnInit } from '@angular/core';
import { BeachLocation } from './beach-location.model'; // Update with the correct path

@Component({
  selector: 'app-beach-filter',
  templateUrl: './beach-filter.component.html',
  styleUrls: ['./beach-filter.component.scss']
})
export class BeachFilterComponent implements OnInit {
  beachLocations: BeachLocation[] = [];
  filteredBeachLocations: BeachLocation[] = [];

  ngOnInit(): void {
    // TODO: Fetch the beach locations from a service or define them here
    this.beachLocations = [
      // Dummy data, replace with actual data fetching logic
      { id: 1, name: 'Alba plage', location: 'Frejus saint raphael', imageUrl: 'assets/images/plage2.png' },
      // ... more beach locations
    ];

    // Initially, all locations are shown
    this.filteredBeachLocations = [...this.beachLocations];
  }

  filterByCriteria(criteria: string, value: string): void {
    // Implement the filtering logic based on criteria
    // For example, if criteria is 'location', filter by location property
    if (criteria === 'location') {
      this.filteredBeachLocations = this.beachLocations.filter(beachLocation =>
        beachLocation.location.toLowerCase().includes(value.toLowerCase())
      );
    }
    // Implement other criteria similarly
  }

  // You may have separate methods for each filter type or a single method that handles all based on arguments
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  carouselItems = [
    { title: 'Destination 1', image: '/assets/images/plage.png' },
    { title: 'Destination 2', image: '/assets/images/plage.png' },
    { title: 'Destination 3', image: '/assets/images/plage.png' }
]

descriptionItems = [
  { 
    logo: 'assets/images/Logo1.png',
    title: 'Destination 1',
    description: 'Description de la destination 1'
  },
  { 
    logo: 'assets/images/Logo1.png',
    title: 'Destination 2',
    description: 'Description de la destination 1'
  },
  { 
    logo: 'assets/images/Logo1.png',
    title: 'Destination 3',
    description: 'Description de la destination 1'
  }
]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  logoPath = 'assets/images/Logo.png';
  links = [
    { title: 'ACCUEIL', url: '/accueil' },
    { title: 'Nos Destination', url: '/destinations' },
    { title: 'Connexion', url: '/connexion' },
    { title: 'Contactez-Nous', url: '/contact' }
  ];
}


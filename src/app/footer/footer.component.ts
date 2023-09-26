import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  logoPath = 'assets/images/Logo.png';
  links = [
    { title: 'ACCUEIL', url: './homepage/homepage.component' },
    { title: 'Nos Destination', url: './destination/destination.component' },
    { title: 'Connexion', url: './login/login.component' },
    { title: 'Contactez-Nous', url: './contact-us/contact-us.component' }
  ];
}


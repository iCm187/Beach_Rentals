import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DestinationComponent } from './destination/destination.component';
import { DeckchairLocationComponent } from './deckchair-location/deckchair-location.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BeachFilterComponent } from './beach-filter/beach-filter.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { PaypalComponent } from './paypal/paypal.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { AdminComponent } from './admin/admin.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ReservationComponent,
    LoginComponent,
    SigninComponent,
    HomepageComponent,
    DestinationComponent,
    DeckchairLocationComponent,
    ProfileComponent,
    ContactUsComponent,
    BeachFilterComponent,
    DashboardClientComponent,
    PaypalComponent,
    BookingSummaryComponent,
    AdminComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

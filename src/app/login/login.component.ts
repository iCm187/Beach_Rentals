import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  onSignUpClick(container: HTMLElement): void {
    container.classList.add("right-panel-active");
  }

  onSignInClick(container: HTMLElement): void {
    container.classList.remove("right-panel-active");
  }
}

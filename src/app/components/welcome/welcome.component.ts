import { Component } from '@angular/core';
@Component({ selector: 'app-welcome', standalone: true, templateUrl: './welcome.component.html', styleUrl: './welcome.component.scss' })
export class WelcomeComponent {
  perks = ['Vetted professionals', 'Affordable Prices', 'Next day availability', 'Best Quality', 'Standard cleaning tasks', 'Affordable Prices'];
}

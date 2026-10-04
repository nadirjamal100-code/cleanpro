import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-contact-page', standalone: true,
  imports: [HeaderComponent, FooterComponent, ContactComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {}

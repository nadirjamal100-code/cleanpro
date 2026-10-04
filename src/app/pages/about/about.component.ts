import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-about', standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  values = [
    { icon: '✦', title: 'Care in every corner', copy: 'We treat every space with the attention and respect we’d give our own.' },
    { icon: '✓', title: 'People you can trust', copy: 'Friendly, trained professionals who arrive ready to do the job right.' },
    { icon: '↗', title: 'A lighter footprint', copy: 'Thoughtful products and practices that are kinder to your home and the planet.' }
  ];
}

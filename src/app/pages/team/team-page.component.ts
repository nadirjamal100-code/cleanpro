import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team-page', standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss'
})
export class TeamPageComponent {
  members = [
    { name: 'Erick Reynolds', role: 'Home cleaning specialist', img: 'team-1', alt: 'Erick Reynolds, home cleaning specialist', bio: 'Erick brings a careful eye and a welcoming touch to every home he visits.' },
    { name: 'Daniel Carter', role: 'Team lead', img: 'team-2', alt: 'Daniel Carter, ProCleaning team lead', bio: 'Daniel helps every visit run smoothly, with thoughtful details from start to finish.' },
    { name: 'Sophie Bennett', role: 'Deep cleaning specialist', img: 'team-3', alt: 'Sophie Bennett, deep cleaning specialist', bio: 'Sophie loves turning the hard-to-reach corners into the freshest part of your day.' }
  ];
}

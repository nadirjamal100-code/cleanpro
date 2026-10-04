import { Component } from '@angular/core';

interface Member { name: string; role: string; img: string; alt: string; bio: string; featured?: boolean; }

@Component({ selector: 'app-team', standalone: true, templateUrl: './team.component.html', styleUrl: './team.component.scss' })
export class TeamComponent {
  stars = [1, 2, 3, 4, 5];
  members: Member[] = [
    { name: 'Erick Reynolds', role: 'Home cleaning specialist', img: 'team-1', alt: 'Smiling cleaning expert with a spray bottle', bio: 'Erick brings a careful eye and a welcoming touch to every home he visits.' },
    { name: 'Daniel Carter', role: 'Team lead', img: 'team-2', alt: 'Cleaning expert in green apron', bio: 'Daniel helps every visit run smoothly, with thoughtful details from start to finish.', featured: true },
    { name: 'Sophie Bennett', role: 'Deep cleaning specialist', img: 'team-3', alt: 'Blonde cleaning expert with a cloth', bio: 'Sophie loves turning the hard-to-reach corners into the freshest part of your day.' }
  ];
  socials = [
    { label: 'Facebook', icon: 'facebook' },
    { label: 'X', icon: 'x' },
    { label: 'Instagram', icon: 'instagram' },
    { label: 'LinkedIn', icon: 'linkedin' }
  ];
}

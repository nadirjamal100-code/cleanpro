import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface CleaningService { number: string; title: string; slug: string; description: string; image: string; alt: string; tag: string; }

@Component({ selector: 'app-services-page', standalone: true, imports: [HeaderComponent, FooterComponent, RouterLink], templateUrl: './services-page.component.html', styleUrl: './services-page.component.scss' })
export class ServicesPageComponent {
  services: CleaningService[] = [
    { number: '01', title: 'Home cleaning', slug: 'home-cleaning', description: 'A thoughtful refresh for the rooms you live in every day, tailored to your home and routine.', image: 'photo-1581578731548-c64695cc6952', alt: 'Professional cleaner caring for a bright home', tag: 'For your home' },
    { number: '02', title: 'Office cleaning', slug: 'office-cleaning', description: 'A clean, comfortable workplace ready for the day, from desks and shared areas to kitchens and meeting rooms.', image: 'photo-1497366754035-f200968a6e72', alt: 'Bright, tidy modern workplace', tag: 'For your workplace' },
    { number: '03', title: 'Deep cleaning', slug: 'deep-cleaning', description: 'Extra attention for the details and hard-to-reach places that need a fuller reset.', image: 'photo-1600210492486-724fe5c67fb0', alt: 'Sunlit living room prepared for a detailed clean', tag: 'A little extra' },
    { number: '04', title: 'Kitchen cleaning', slug: 'kitchen-cleaning', description: 'Careful cleaning of worktops, appliance fronts, cupboard exteriors, and floors.', image: 'photo-1600585154340-be6161a56a0c', alt: 'Clean, light-filled kitchen with fresh worktops', tag: 'Room refresh' },
    { number: '05', title: 'Bathroom cleaning', slug: 'bathroom-cleaning', description: 'A fresh-feeling bathroom with care for sinks, showers, fittings, mirrors, and floors.', image: 'photo-1620626011761-996317b8d101', alt: 'Fresh modern bathroom with clean tile and glass', tag: 'Room refresh' },
    { number: '06', title: 'Sofa & upholstery', slug: 'sofa-and-upholstery', description: 'A focused clean for fabric and upholstered surfaces, tailored to the material.', image: 'photo-1555041469-a586c61ea9bc', alt: 'Soft upholstered sofa in a calm, bright living room', tag: 'Soft furnishings' },
    { number: '07', title: 'Carpet & rugs', slug: 'carpet-and-rugs', description: 'Care for the floors that see it all and help your rooms feel renewed.', image: 'photo-1600607687939-ce8a6c25118c', alt: 'Warm, tidy living room with a soft area rug', tag: 'Soft furnishings' },
    { number: '08', title: 'Windows & glass', slug: 'windows-and-glass', description: 'A careful clean of accessible interior windows, glass, and frames to let more light in.', image: 'photo-1497366811353-6870744d04b2', alt: 'Bright interior workspace with large clear windows', tag: 'Finishing touch' }
  ];
  steps = [
    { n: '01', title: 'Tell us what you need', text: 'Share a few details about your space and the kind of clean you have in mind.' },
    { n: '02', title: 'We make a plan', text: 'We’ll help find a service and visit that fits your priorities and schedule.' },
    { n: '03', title: 'Enjoy your fresh space', text: 'Our team arrives ready to work, so you can get back to what matters.' }
  ];
}

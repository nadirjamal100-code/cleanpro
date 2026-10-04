import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service { title: string; slug: string; text: string; img: string; alt: string; }

@Component({ selector: 'app-services', standalone: true, imports: [RouterLink], templateUrl: './services.component.html', styleUrl: './services.component.scss' })
export class ServicesComponent {
  @ViewChild('track') track!: ElementRef<HTMLElement>;
  isSliding = false;
  services: Service[] = [
    { title: 'Office Cleaning', slug: 'office-cleaning', text: 'Keep your workspace fresh and productive with routine cleaning for desks, shared areas, kitchens, and meeting rooms.', img: 'service-office', alt: 'Cleaner wiping a kitchen counter with yellow gloves' },
    { title: 'Deep Cleaning', slug: 'deep-cleaning', text: 'Give your home a seasonal refresh with a thorough clean of the rooms and details that need extra attention.', img: 'service-spring', alt: 'Cleaning team tidying a bright living room' },
    { title: 'House Cleaning', slug: 'home-cleaning', text: 'Enjoy a cleaner home with a tailored visit for everyday chores, from dusting and vacuuming to kitchen and bathroom care.', img: 'service-house', alt: 'Smiling cleaner holding a bucket of supplies' }
  ];
  next(): void {
    const track = this.track.nativeElement;
    const card = track.querySelector<HTMLElement>('.card');
    if (!card) return;

    const styles = getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    const maxScroll = track.scrollWidth - track.clientWidth;

    // With all cards visible there is no scroll range, so rotate the visible
    // order to keep the desktop arrow useful as well.
    if (maxScroll <= 0) {
      this.isSliding = true;
      this.services = [...this.services.slice(1), this.services[0]];
      window.setTimeout(() => this.isSliding = false, 420);
      return;
    }

    // Advance by one card, and wrap back to the beginning at the end.
    if (track.scrollLeft >= maxScroll - 1) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }
    track.scrollBy({ left: card.getBoundingClientRect().width + gap, behavior: 'smooth' });
  }
}

import { Component, DestroyRef, computed, signal } from '@angular/core';

interface Review { name: string; role: string; text: string; img: string; }

@Component({ selector: 'app-testimonials', standalone: true, templateUrl: './testimonials.component.html', styleUrl: './testimonials.component.scss' })
export class TestimonialsComponent {
  private autoplayPaused = false;
  stars = [1, 2, 3, 4, 5];
  reviews: Review[] = [
    { name: 'Robert Fox', role: 'Business Man', img: 'assets/images/testimonial-robert.webp', text: 'Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service.' },
    { name: 'Jane Cooper', role: 'Homeowner', img: 'https://images.unsplash.com/photo-1758598497635-48cbbb1f6555?auto=format&fit=crop&w=600&h=700&q=82', text: 'Booking was simple, and the cleaners did a wonderful job. Every room felt fresh and spotless when they finished.' },
    { name: 'Cameron Williamson', role: 'Small Business Owner', img: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?auto=format&fit=crop&w=600&h=700&q=82', text: 'A dependable team that pays attention to the details. Our office looks great, and we are happy with the service.' }
  ];
  i = signal(0);
  current = computed(() => this.reviews[this.i()]);
  constructor(destroyRef: DestroyRef) {
    const timer = setInterval(() => {
      if (!this.autoplayPaused) this.next();
    }, 5000);
    destroyRef.onDestroy(() => clearInterval(timer));
  }
  pauseAutoplay(): void { this.autoplayPaused = true; }
  resumeAutoplay(): void { this.autoplayPaused = false; }
  onFocusOut(event: FocusEvent): void {
    const section = event.currentTarget as HTMLElement;
    if (!section.contains(event.relatedTarget as Node | null)) this.resumeAutoplay();
  }
  prev(): void { this.i.update(v => (v - 1 + this.reviews.length) % this.reviews.length); }
  next(): void { this.i.update(v => (v + 1) % this.reviews.length); }
}

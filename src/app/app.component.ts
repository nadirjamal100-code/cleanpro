import { AfterViewInit, Component, NgZone, OnDestroy, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({ selector: 'app-root', standalone: true, imports: [RouterOutlet], template: '<router-outlet />' })
export class AppComponent implements AfterViewInit, OnDestroy {
  private readonly router = inject(Router);
  private readonly zone = inject(NgZone);
  private routeChanges?: Subscription;
  private animationContext?: gsap.Context;
  private cleanups: (() => void)[] = [];
  private frame = 0;

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.routeChanges = this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
        .subscribe(() => this.schedulePageMotion());
      this.schedulePageMotion();
    });
  }

  ngOnDestroy(): void {
    this.routeChanges?.unsubscribe();
    cancelAnimationFrame(this.frame);
    this.clearPageMotion();
  }

  private schedulePageMotion(): void {
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => this.animatePage());
  }

  private animatePage(): void {
    this.clearPageMotion();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const outlet = document.querySelector('router-outlet');
    const root = outlet?.nextElementSibling ?? document.querySelector('app-root');
    if (!(root instanceof HTMLElement)) return;

    this.animationContext = gsap.context(() => {
      const main = root.querySelector('main');
      if (!main) return;

      const title = main.querySelector('h1');
      const intro = title?.parentElement?.querySelector('p');
      const heroVisual = main.querySelector('.hero img, .team-hero__photo, .blog-hero__art, .detail-art, .intro__visual');
      const heroActions = main.querySelector('.hero .btn, .team-hero .btn, .blog-hero .hero-link, .detail-hero .actions');
      const heroItems = [title, intro, heroActions, heroVisual].filter((item): item is Element => item !== null);

      if (heroItems.length) {
        gsap.from(heroItems, {
          autoAlpha: 0,
          y: 22,
          duration: 0.72,
          stagger: 0.11,
          ease: 'power3.out',
          clearProps: 'opacity,visibility,transform'
        });
      }

      main.querySelectorAll('section h2, section .sec-head').forEach((heading) => {
        if (heading === title || heading.contains(title)) return;
        gsap.from(heading, {
          autoAlpha: 0,
          y: 18,
          duration: 0.58,
          ease: 'power2.out',
          clearProps: 'opacity,visibility,transform',
          scrollTrigger: { trigger: heading, start: 'top 88%', once: true }
        });
      });

      const cards = main.querySelectorAll('article, .post, .plan, .card, .value-card');
      cards.forEach((card, index) => {
        gsap.from(card, {
          autoAlpha: 0,
          y: 24,
          duration: 0.62,
          delay: (index % 3) * 0.08,
          ease: 'power2.out',
          clearProps: 'opacity,visibility,transform',
          scrollTrigger: { trigger: card, start: 'top 92%', once: true }
        });
      });

      const buttons = main.querySelectorAll<HTMLElement>('a.btn, button.btn, .story-card__read, .hero-link');
      buttons.forEach((button) => {
        const enter = () => gsap.to(button, { scale: 1.035, duration: 0.2, ease: 'power2.out', overwrite: true });
        const leave = () => gsap.to(button, { scale: 1, duration: 0.24, ease: 'power2.out', overwrite: true });
        button.addEventListener('pointerenter', enter);
        button.addEventListener('pointerleave', leave);
        button.addEventListener('focusin', enter);
        button.addEventListener('focusout', leave);
        this.cleanups.push(() => {
          button.removeEventListener('pointerenter', enter);
          button.removeEventListener('pointerleave', leave);
          button.removeEventListener('focusin', enter);
          button.removeEventListener('focusout', leave);
          gsap.killTweensOf(button);
        });
      });

      const imageCards = main.querySelectorAll<HTMLElement>('.story-card, .crew-card, .post, .card, .value-card');
      imageCards.forEach((card) => {
        const image = card.querySelector<HTMLElement>('img');
        if (!image) return;
        const enter = () => gsap.to(image, { scale: 1.045, duration: 0.42, ease: 'power2.out', overwrite: true });
        const leave = () => gsap.to(image, { scale: 1, duration: 0.42, ease: 'power2.out', overwrite: true });
        card.addEventListener('pointerenter', enter);
        card.addEventListener('pointerleave', leave);
        this.cleanups.push(() => {
          card.removeEventListener('pointerenter', enter);
          card.removeEventListener('pointerleave', leave);
          gsap.killTweensOf(image);
        });
      });

      ScrollTrigger.refresh();
    }, root);
  }

  private clearPageMotion(): void {
    this.cleanups.forEach((cleanup) => cleanup());
    this.cleanups = [];
    this.animationContext?.revert();
    this.animationContext = undefined;
  }
}

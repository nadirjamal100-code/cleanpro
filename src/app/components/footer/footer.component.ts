import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { siteContact } from '../../site-contact';

@Component({ selector: 'app-footer', standalone: true, imports: [ReactiveFormsModule, RouterLink], templateUrl: './footer.component.html', styleUrl: './footer.component.scss' })
export class FooterComponent {
  private router = inject(Router);
  done = signal(false);
  email;
  company: { l: string; h: string; fragment?: string }[] = [
    { l: 'About Us', h: '/about' }, { l: 'Services', h: '/services' }, { l: 'Contact Us', h: '/contact' }
  ];
  more = [
    { l: 'Support', h: '/contact' }, { l: 'Privacy Policy', h: '/', fragment: 'home' },
    { l: 'Terms & conditions', h: '/', fragment: 'home' }
  ];
  year = 2026;
  contact = siteContact;
  constructor(fb: FormBuilder) { this.email = fb.nonNullable.control('', [Validators.required, Validators.email]); }
  isActive(href: string, fragment?: string): boolean {
    const [path, currentFragment] = this.router.url.split('#');
    const currentPath = path.split('?')[0] || '/';
    if (fragment) return currentPath === '/' && (currentFragment || 'home') === fragment;
    if (href === '/services') return currentPath === '/services' || currentPath.startsWith('/services/');
    return currentPath === href;
  }
  subscribe(): void { if (this.email.invalid) { this.email.markAsTouched(); return; } this.done.set(true); this.email.reset(); }
}

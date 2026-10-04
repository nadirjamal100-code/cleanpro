import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({ selector: 'app-header', standalone: true, imports: [RouterLink], templateUrl: './header.component.html', styleUrl: './header.component.scss' })
export class HeaderComponent {
  private router = inject(Router);
  open = signal(false);
  servicesOpen = signal(false);
  links = [
    { label: 'Home', href: '/', fragment: 'home' }, { label: 'About us', href: '/about' }, { label: 'Our team', href: '/team' },
    { label: 'Blog', href: '/blog' }, { label: 'Contact', href: '/contact' }
  ];
  serviceLinks = [
    { label: 'Home cleaning', slug: 'home-cleaning' }, { label: 'Office cleaning', slug: 'office-cleaning' },
    { label: 'Deep cleaning', slug: 'deep-cleaning' }, { label: 'Kitchen cleaning', slug: 'kitchen-cleaning' },
    { label: 'Bathroom cleaning', slug: 'bathroom-cleaning' }, { label: 'Sofa & upholstery', slug: 'sofa-and-upholstery' },
    { label: 'Carpet & rugs', slug: 'carpet-and-rugs' }, { label: 'Windows & glass', slug: 'windows-and-glass' }
  ];
  isActive(href: string, fragment?: string): boolean {
    const [path, currentFragment] = this.router.url.split('#');
    const currentPath = path.split('?')[0] || '/';
    if (fragment) return currentPath === '/' && (currentFragment || 'home') === fragment;
    if (href === '/blog') return currentPath === '/blog' || currentPath.startsWith('/blog/');
    if (href === '/services') return currentPath === '/services' || currentPath.startsWith('/services/');
    return currentPath === href;
  }
  toggle(): void { this.open.update(v => !v); }
  toggleServices(): void { this.servicesOpen.update(v => !v); }
  go(): void { this.open.set(false); this.servicesOpen.set(false); }
  @HostListener('window:resize') onResize(): void { if (window.innerWidth > 1023) this.open.set(false); }
  @HostListener('document:keydown.escape') onEsc(): void { this.open.set(false); }
}

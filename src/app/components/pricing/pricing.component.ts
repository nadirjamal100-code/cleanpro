import { Component, computed, signal } from '@angular/core';

interface Plan { name: string; monthly: number; yearly: number; features: string[]; featured?: boolean; }

@Component({ selector: 'app-pricing', standalone: true, templateUrl: './pricing.component.html', styleUrl: './pricing.component.scss' })
export class PricingComponent {
  period = signal<'Monthly' | 'Yearly'>('Monthly');
  suffix = computed(() => this.period());
  plans: Plan[] = [
    { name: 'BASIC PACKAGE', monthly: 59, yearly: 590, features: ['Dusting of all surfaces', 'Sweeping and mopping floors', 'Vacuuming carpets and rugs', 'Cleaning of kitchen surfaces', 'Cleaning of bathroom surfaces', 'Emptying trash bins'] },
    { name: 'ENTERPRISE PACKAGE', monthly: 69, yearly: 690, featured: true, features: ['All services in the Basic Plan', 'Detailed dusting', 'Wiping down of kitchen appt', 'Cleaning inside the microwave', 'Changing bed linens', 'Spot cleaning walls and doors'] },
    { name: 'PREMIUM PACKAGE', monthly: 99, yearly: 990, features: ['All services in the Clean Plan', 'Deep cleaning of kitchen appt', 'baseboards, door frames, & vents', 'Organization of closets pantries', 'Carpet, upholstery spot cleaning', 'Detailed bathroom cleaning'] }
  ];
  price(p: Plan): number { return this.period() === 'Monthly' ? p.monthly : p.yearly; }
}

import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { QualityComponent } from '../../components/quality/quality.component';
import { TeamComponent } from '../../components/team/team.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { BlogComponent } from '../../components/blog/blog.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home', standalone: true,
  imports: [HeaderComponent, HeroComponent, ServicesComponent, QualityComponent, TeamComponent, WelcomeComponent,
    PricingComponent, TestimonialsComponent, BlogComponent, FooterComponent],
  template: `<app-header /><main><app-hero /><app-services /><app-quality /><app-team /><app-welcome />
    <app-pricing /><app-testimonials /><app-blog /></main><app-footer />`
})
export class HomeComponent {}

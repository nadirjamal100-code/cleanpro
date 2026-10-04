import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesPageComponent } from './pages/services/services-page.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { TeamPageComponent } from './pages/team/team-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { BlogPageComponent } from './pages/blog/blog-page.component';
import { BlogArticlePageComponent } from './pages/blog/blog-article-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'team', component: TeamPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'blog/:slug', component: BlogArticlePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'services/:slug', component: ServiceDetailComponent },
  { path: '**', redirectTo: '' }
];

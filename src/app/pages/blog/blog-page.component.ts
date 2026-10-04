import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  category: string;
  date: string;
  readTime: string;
}

@Component({
  selector: 'app-blog-page', standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {
  categories = ['All stories', 'Cleaning tips', 'Healthy home', 'Our approach'];
  activeCategory = signal('All stories');
  searchTerm = signal('');
  articles: Article[] = [
    { slug: 'clean-home-between-visits', title: 'How to Maintain a Clean Home Between Professional Visits', excerpt: 'A few small, thoughtful routines can keep your home feeling fresh all week. Start with these easy habits for the rooms you use most.', image: 'blog-maintain', alt: 'A bright, tidy living room ready to enjoy', category: 'Cleaning tips', date: 'January 6, 2026', readTime: '5 min read' },
    { slug: 'eco-friendly-cleaning', title: 'Eco-Friendly Cleaning: How We Keep Your Home Green', excerpt: 'A cleaner home can be kinder to the planet, too. Learn how mindful products and simple choices make a difference.', image: 'blog-eco', alt: 'Fresh, sunlit home interior with green plants', category: 'Our approach', date: 'December 18, 2025', readTime: '4 min read' },
    { slug: 'benefits-of-regular-cleaning', title: 'The Benefits of Regular Professional Cleaning', excerpt: 'More time to unwind, fewer things on your list, and a space that feels good to come home to. Here is what a regular clean can do.', image: 'blog-benefits', alt: 'A clean, welcoming home with fresh flowers', category: 'Healthy home', date: 'December 2, 2025', readTime: '6 min read' },
    { slug: '15-minute-evening-reset', title: 'The 15-Minute Evening Reset for a Calmer Morning', excerpt: 'A short, easy reset before bed can make the next morning feel less rushed. Try this simple routine in the rooms you use most.', image: 'blog-maintain', alt: 'A neat living space ready for a relaxing evening', category: 'Cleaning tips', date: 'May 12, 2026', readTime: '4 min read' },
    { slug: 'fresh-kitchen-habits', title: 'Five Little Habits for a Fresher Kitchen', excerpt: 'Keep the heart of your home feeling inviting with a few practical habits for counters, dishes, and everyday spills.', image: 'blog-benefits', alt: 'A bright, clean home with fresh flowers', category: 'Healthy home', date: 'April 28, 2026', readTime: '5 min read' },
    { slug: 'dusting-room-by-room', title: 'A Room-by-Room Guide to Dusting', excerpt: 'Work from high to low and give overlooked surfaces a little attention with this straightforward guide to dusting.', image: 'blog-eco', alt: 'Sunlight and greenery in a freshly cared-for home', category: 'Cleaning tips', date: 'April 9, 2026', readTime: '5 min read' },
    { slug: 'gentler-cleaning-products', title: 'How to Choose Cleaning Products for Your Home', excerpt: 'A few simple label-reading tips can help you choose products that suit your surfaces and your household routine.', image: 'blog-eco', alt: 'Green plants in a fresh, sunlit interior', category: 'Our approach', date: 'March 21, 2026', readTime: '6 min read' },
    { slug: 'tidy-entryway', title: 'A Welcoming Entryway in Just a Few Steps', excerpt: 'Make coming home feel a little easier with a simple plan for shoes, bags, keys, and the dust that follows you in.', image: 'blog-maintain', alt: 'An organized, welcoming living area', category: 'Cleaning tips', date: 'March 3, 2026', readTime: '4 min read' },
    { slug: 'first-cleaning-visit', title: 'What to Expect at Your First Professional Cleaning', excerpt: 'A little preparation can help your first visit feel comfortable. Here is how to share priorities and get ready for your team.', image: 'blog-benefits', alt: 'A comfortable and freshly cleaned home', category: 'Our approach', date: 'February 14, 2026', readTime: '5 min read' }
  ];
  filteredArticles = computed(() => {
    const category = this.activeCategory();
    const query = this.searchTerm().trim().toLowerCase();
    return this.articles.filter(article =>
      (category === 'All stories' || article.category === category) &&
      (!query || `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(query))
    );
  });
  setCategory(category: string): void { this.activeCategory.set(category); }
}

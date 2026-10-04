import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Post { slug: string; title: string; excerpt: string; img: string; alt: string; featured?: boolean; }

@Component({ selector: 'app-blog', standalone: true, imports: [RouterLink], templateUrl: './blog.component.html', styleUrl: './blog.component.scss' })
export class BlogComponent {
  posts: Post[] = [
    { slug: 'eco-friendly-cleaning', title: 'Eco-Friendly Cleaning: How We Keep Your Home Green', excerpt: 'Learn about our commitment to eco-friendly practices. We share the eco-conscious products...', img: 'blog-eco', alt: 'Cleaner wiping a bookshelf with a cloth' },
    { slug: 'clean-home-between-visits', title: 'How to Maintain a Clean Home Between Professional Visits', excerpt: 'Get practical advice on maintaining cleanliness between our scheduled visits. These easy-to-follow tips...', img: 'blog-maintain', alt: 'Cleaner tidying a living room', featured: true },
    { slug: 'benefits-of-regular-cleaning', title: 'The Benefits of Regular Professional Cleaning', excerpt: 'Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air...', img: 'blog-benefits', alt: 'Cleaner with a broom among moving boxes' }
  ];
}

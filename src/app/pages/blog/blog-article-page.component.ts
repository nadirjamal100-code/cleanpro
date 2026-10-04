import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface Story {
  slug: string; title: string; excerpt: string; image: string; alt: string; category: string; date: string; readTime: string;
  intro: string; sections: { heading: string; body: string }[];
}

@Component({
  selector: 'app-blog-article-page', standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './blog-article-page.component.html',
  styleUrl: './blog-article-page.component.scss'
})
export class BlogArticlePageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  story?: Story;
  readonly stories: Story[] = [
    {
      slug: 'clean-home-between-visits', title: 'How to Maintain a Clean Home Between Professional Visits', excerpt: 'A few small, thoughtful routines can keep your home feeling fresh all week. Start with these easy habits for the rooms you use most.', image: 'blog-maintain', alt: 'A bright, tidy living room ready to enjoy', category: 'Cleaning tips', date: 'January 6, 2026', readTime: '5 min read',
      intro: 'A home does not need a big reset every day to feel good. A handful of small habits can keep everyday mess from piling up and make it easier to settle in at the end of the day.',
      sections: [
        { heading: 'Give busy surfaces a two-minute reset', body: 'Kitchen counters, the entry table, and bathroom sinks collect the little things first. Put items back where they belong and give the surface a quick wipe when you notice it needs one. Short resets are easier to keep up than a long catch-up clean.' },
        { heading: 'Let each room have a simple routine', body: 'Make the bed when you get up, rinse the shower after use, and return dishes to the kitchen before turning in. Linking a small task to something you already do helps it become part of your day.' },
        { heading: 'Keep your tools close at hand', body: 'A cloth in the kitchen and a small basket for misplaced items can make quick tidying feel effortless. Save deeper tasks for your regular cleaning visit, and use these small routines to keep your home comfortable between appointments.' }
      ]
    },
    {
      slug: 'eco-friendly-cleaning', title: 'Eco-Friendly Cleaning: How We Keep Your Home Green', excerpt: 'A cleaner home can be kinder to the planet, too. Learn how mindful products and simple choices make a difference.', image: 'blog-eco', alt: 'Fresh, sunlit home interior with green plants', category: 'Our approach', date: 'December 18, 2025', readTime: '4 min read',
      intro: 'A fresh home and a thoughtful footprint can go together. The most useful changes are often simple: use only what a task needs, choose products with care, and make good routines easy to repeat.',
      sections: [
        { heading: 'Use the right amount', body: 'More product does not always mean a better clean. Following the label and using the amount needed for the job helps avoid waste and leaves fewer residues behind.' },
        { heading: 'Choose reusable tools', body: 'Washable cloths and durable brushes can stand in for many disposable supplies. Let them dry between uses and keep them in good shape so they last longer.' },
        { heading: 'Make a mindful routine', body: 'Small habits add up over time. Ventilate rooms when practical, avoid running water longer than needed, and take a moment to sort packaging according to local recycling guidance.' }
      ]
    },
    {
      slug: 'benefits-of-regular-cleaning', title: 'The Benefits of Regular Professional Cleaning', excerpt: 'More time to unwind, fewer things on your list, and a space that feels good to come home to. Here is what a regular clean can do.', image: 'blog-benefits', alt: 'A clean, welcoming home with fresh flowers', category: 'Healthy home', date: 'December 2, 2025', readTime: '6 min read',
      intro: 'A dependable cleaning rhythm can make home feel easier to manage. It is not about perfection; it is about having a comfortable baseline you can enjoy and maintain.',
      sections: [
        { heading: 'Enjoy a steadier sense of order', body: 'Regular visits help keep everyday buildup from turning into a large catch-up project. Surfaces, floors, and the spaces you use most can stay consistently cared for.' },
        { heading: 'Make room for the things you enjoy', body: 'Handing off a recurring task can free up time and energy for rest, family, and the parts of home life you look forward to. A schedule also makes it easier to plan around cleaning.' },
        { heading: 'Get care that fits your home', body: 'Every household has different priorities. Share which rooms matter most, how you use the space, and what a good visit looks like for you. A regular plan works best when it reflects your routine.' }
      ]
    },
    {
      slug: '15-minute-evening-reset', title: 'The 15-Minute Evening Reset for a Calmer Morning', excerpt: 'A short, easy reset before bed can make the next morning feel less rushed. Try this simple routine in the rooms you use most.', image: 'blog-maintain', alt: 'A neat living space ready for a relaxing evening', category: 'Cleaning tips', date: 'May 12, 2026', readTime: '4 min read',
      intro: 'You do not need to clean the whole house at night. A focused quarter-hour is enough to take care of a few high-impact tasks and make the morning feel more settled.',
      sections: [
        { heading: 'Start with the kitchen', body: 'Put away food, load or rinse the dishes, and clear the counter you use in the morning. A clear spot for breakfast or coffee makes the first few minutes of the day feel easier.' },
        { heading: 'Reset the shared spaces', body: 'Return blankets and remotes, gather cups, and put stray items in a small basket. You can return those items to their rooms when you have a moment.' },
        { heading: 'Make tomorrow easier', body: 'Set out what you need for the morning and do a quick check of the entryway. Keep the routine flexible: choose the two or three steps that make the biggest difference in your home.' }
      ]
    },
    {
      slug: 'fresh-kitchen-habits', title: 'Five Little Habits for a Fresher Kitchen', excerpt: 'Keep the heart of your home feeling inviting with a few practical habits for counters, dishes, and everyday spills.', image: 'blog-benefits', alt: 'A bright, clean home with fresh flowers', category: 'Healthy home', date: 'April 28, 2026', readTime: '5 min read',
      intro: 'The kitchen sees a lot of daily activity, so small habits can help it stay pleasant without turning cleanup into a project. Pick the routines that fit the way you cook and gather.',
      sections: [
        { heading: 'Clear as you cook', body: 'Put ingredients away when you finish with them and rinse tools while food is cooking. It keeps the counter open and makes the after-meal cleanup shorter.' },
        { heading: 'Wipe spills while they are fresh', body: 'A quick wipe after a splash or crumb is easier than tackling dried-on mess later. Use a cloth suited to the surface and follow care guidance for stone, wood, or specialty finishes.' },
        { heading: 'Finish with the sink', body: 'Rinse the basin and leave it clear after dishes are done. A tidy sink makes the whole kitchen feel more settled and gives you a clean starting point the next day.' }
      ]
    },
    {
      slug: 'dusting-room-by-room', title: 'A Room-by-Room Guide to Dusting', excerpt: 'Work from high to low and give overlooked surfaces a little attention with this straightforward guide to dusting.', image: 'blog-eco', alt: 'Sunlight and greenery in a freshly cared-for home', category: 'Cleaning tips', date: 'April 9, 2026', readTime: '5 min read',
      intro: 'A simple order helps you dust efficiently: begin with higher surfaces, then work down so anything that falls can be picked up as you finish the room.',
      sections: [
        { heading: 'Begin above eye level', body: 'Check shelves, picture frames, and the tops of furniture. Use a clean microfiber cloth or an appropriate duster, and take extra care around delicate objects.' },
        { heading: 'Remember the small touchpoints', body: 'Lampshades, window sills, baseboards, and the edges of door frames can be easy to miss. Work a little at a time, moving around the room in one direction.' },
        { heading: 'Finish with floors and fabrics', body: 'Once surfaces are done, vacuum or sweep the floor. Wash or refresh removable textiles according to their care labels to help keep dust from settling back into the room.' }
      ]
    },
    {
      slug: 'gentler-cleaning-products', title: 'How to Choose Cleaning Products for Your Home', excerpt: 'A few simple label-reading tips can help you choose products that suit your surfaces and your household routine.', image: 'blog-eco', alt: 'Green plants in a fresh, sunlit interior', category: 'Our approach', date: 'March 21, 2026', readTime: '6 min read',
      intro: 'Choosing products can feel confusing when every surface and task seems to call for something different. A careful look at directions and surface guidance is a helpful place to begin.',
      sections: [
        { heading: 'Match the product to the surface', body: 'Check the manufacturer’s care instructions for counters, floors, and fixtures. When you are unsure, test a product on a small, inconspicuous area first.' },
        { heading: 'Read directions and warnings', body: 'Use the amount and method listed on the label, and never mix cleaning products. Store supplies in their original containers and keep them out of reach of children and pets.' },
        { heading: 'Keep your routine simple', body: 'A small set of suitable products can cover many everyday tasks. Keeping only what you use regularly makes storage easier and helps you avoid buying duplicates.' }
      ]
    },
    {
      slug: 'tidy-entryway', title: 'A Welcoming Entryway in Just a Few Steps', excerpt: 'Make coming home feel a little easier with a simple plan for shoes, bags, keys, and the dust that follows you in.', image: 'blog-maintain', alt: 'An organized, welcoming living area', category: 'Cleaning tips', date: 'March 3, 2026', readTime: '4 min read',
      intro: 'The entryway is a hardworking space. A few clear places for the things you carry every day can keep it welcoming and help the rest of the home stay tidier.',
      sections: [
        { heading: 'Give everyday items a home', body: 'Use a hook for bags and coats, a small tray for keys, and a basket or rack for shoes. Choose spots that are easy for everyone in the household to reach.' },
        { heading: 'Keep the floor clear', body: 'A mat near the door can catch some of the dirt and moisture brought in from outside. Shake it out or clean it as directed, and move shoes away from the main walkway.' },
        { heading: 'Do a quick weekly check', body: 'Return stray items to their rooms and wipe the surfaces you use most. A brief reset keeps the entry from becoming a drop zone that needs a bigger sort later.' }
      ]
    },
    {
      slug: 'first-cleaning-visit', title: 'What to Expect at Your First Professional Cleaning', excerpt: 'A little preparation can help your first visit feel comfortable. Here is how to share priorities and get ready for your team.', image: 'blog-benefits', alt: 'A comfortable and freshly cleaned home', category: 'Our approach', date: 'February 14, 2026', readTime: '5 min read',
      intro: 'Your first professional cleaning is a chance to show the team how you use your home and what matters most to you. A few notes ahead of time can help the visit feel smooth and personal.',
      sections: [
        { heading: 'Share your priorities', body: 'Let the team know which rooms or tasks need special attention, and mention any surfaces that need a particular approach. Clear guidance helps the visit reflect your expectations.' },
        { heading: 'Make a little room to work', body: 'You do not need to pre-clean. Putting away important papers and clearing access to the areas you want cleaned can help the team get started comfortably.' },
        { heading: 'Take a moment after the visit', body: 'Walk through the space and share feedback while details are fresh. That conversation helps shape future visits around the way you like your home to feel.' }
      ]
    }
  ];
  get relatedStories(): Story[] { return this.stories.filter(story => story.slug !== this.story?.slug); }
  ngOnInit(): void { this.route.paramMap.subscribe(params => { this.story = this.stories.find(story => story.slug === params.get('slug')); }); }
}

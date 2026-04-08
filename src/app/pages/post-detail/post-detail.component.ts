import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImageWithFallbackComponent } from '../../components/image-with-fallback/image-with-fallback.component';

interface Post {
  id: number;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
}

const BASE_POSTS: Post[] = [
  { id: 1, image: 'https://images.unsplash.com/photo-1773601102508-06141349a30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Street food vibes at their best! 🌮🎉 Come taste the magic of Lucknow\'s favorite food destination. #FoodValley #LucknowFood', likes: 1234, comments: 87, date: '2 days ago' },
  { id: 2, image: 'https://images.unsplash.com/photo-1739909301016-0824e6d8fc68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Awadhi flavors that melt in your mouth! 🍖 Experience authentic Lucknowi kebabs and biryani. #AwdhiFoodLove #Foodie', likes: 2156, comments: 124, date: '4 days ago' },
  { id: 3, image: 'https://images.unsplash.com/photo-1760263051331-0e4d3dafc9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Momos and chaat lovers, this is YOUR place! 🥟 Fresh, hot, and absolutely delicious. #MomoLove #StreetFood', likes: 987, comments: 56, date: '5 days ago' },
  { id: 4, image: 'https://images.unsplash.com/photo-1641848421816-54345bb1fb47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Sweet endings at Food Valley! 🍰☕ Desserts, shakes, and coffee to complete your meal perfectly. #DessertTime #SweetTooth', likes: 1543, comments: 92, date: '1 week ago' },
  { id: 5, image: 'https://images.unsplash.com/photo-1758448500813-59f3770da00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Modern dining experience with a touch of comfort! 🍽️ Your favorite food court just got better. #FoodCourtVibes #FamilyTime', likes: 2034, comments: 145, date: '1 week ago' },
  { id: 6, image: 'https://images.unsplash.com/photo-1761304458796-f5c4b57da00c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Evening vibes by the Gomti Riverfront! 🌅 Food tastes better with this view. #RiverfrontDining #LucknowDiaries', likes: 3201, comments: 198, date: '2 weeks ago' },
];

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, ImageWithFallbackComponent],
  templateUrl: './post-detail.component.html',
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const allPosts: Post[] = Array.from({ length: 30 }, (_, i) => ({
      ...BASE_POSTS[i % 6],
      id: i + 1,
    }));
    this.post = allPosts.find(p => p.id === parseInt(id || '1'));
  }

  goHome() {
    this.router.navigate(['/']);
  }

  formatLikes(n: number): string {
    return n.toLocaleString();
  }
}

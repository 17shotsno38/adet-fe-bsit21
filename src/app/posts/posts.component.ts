import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Post {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: Post[] = [
    {
      id: 1,
      title: 'Getting Started with Angular',
      description: 'Learn the fundamentals of Angular framework and start building modern web applications with component-based architecture.'
    },
    {
      id: 2,
      title: 'Understanding TypeScript',
      description: 'Discover how TypeScript enhances JavaScript with static typing and powerful development tools for better code quality.'
    },
    {
      id: 3,
      title: 'Mastering CSS Flexbox',
      description: 'Explore the power of CSS Flexbox for creating flexible and responsive layouts that adapt to different screen sizes.'
    },
    {
      id: 4,
      title: 'Introduction to Web Development',
      description: 'A comprehensive guide to modern web development practices, tools, and technologies for beginners and enthusiasts.'
    }
  ];

  deletePost(postId: number): void {
    this.posts = this.posts.filter(post => post.id !== postId);
  }
}
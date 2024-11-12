export type Post = {
  path: string;
  locale: string;
  title: string;
  date: string;
  excerpt?: string;
  authorName?: string;
  authorImage?: string;
  tags?: string[];
  image?: string;
  body: string;
  published: boolean;
};

export const allPosts: Post[] = [
  {
    path: 'getting-started',
    locale: 'en',
    title: 'Getting Started',
    date: '2024-03-14',
    excerpt: 'Learn how to get started with our platform',
    authorName: 'John Doe',
    tags: ['guide', 'tutorial'],
    body: '# Getting Started\n\nWelcome to our platform...',
    published: true
  },
  // 添加更多文章...
]; 
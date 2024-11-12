export type DocPage = {
  path: string;
  locale: string;
  title: string;
  subtitle?: string;
  body: string;
  toc: Array<{ title: string; url: string }>;
  date: string;
};

export const allDocumentationPages: DocPage[] = [
  {
    path: 'getting-started',
    locale: 'en',
    title: 'Getting Started',
    subtitle: 'Learn how to get started with our platform',
    body: '# Getting Started\n\nWelcome to our documentation...',
    toc: [
      { title: 'Introduction', url: '#introduction' },
      { title: 'Quick Start', url: '#quick-start' }
    ],
    date: '2024-03-14'
  },
  // 添加更多文档...
]; 
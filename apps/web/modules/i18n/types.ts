import type { AbstractIntlMessages } from 'next-intl';

export interface Messages extends AbstractIntlMessages {
  docs: {
    title: string;
    description: string;
    back: string;
  };
  admin: Record<string, unknown>;
  auth: Record<string, unknown>;
  blog: Record<string, unknown>;
}

declare module 'next-intl/server' {
  export interface IntlMessages extends Messages {}
} 
import { type Metadata } from "next";
import Link from "next/link";
import { allDocumentationPages } from "@/modules/marketing/data/docs";
import { getLocale, getTranslations } from "next-intl/server";
import React from 'react';

type Props = {
  params: {
    locale: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  return {
    title: t("docs.title"),
    description: t("docs.description"),
  };
}

export default async function DocsListPage({ params, searchParams }: Props) {
  const locale = await getLocale();
  const t = await getTranslations();

  return (
    <div className="container max-w-6xl pt-32 pb-16">
      <div className="mb-12 pt-8 text-center">
        <h1 className="mb-2 font-bold text-5xl">{t("docs.title")}</h1>
        <p className="text-lg opacity-50">{t("docs.description")}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {allDocumentationPages
          .filter((doc) => locale === doc.locale)
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          )
          .map((doc) => (
            <Link href={`/docs/${doc.path}`} key={doc.path}>
              <div className="group rounded-lg border p-4 hover:border-primary">
                <h2 className="font-semibold group-hover:text-primary">
                  {doc.title}
                </h2>
                {doc.subtitle && (
                  <p className="mt-2 text-sm opacity-50">{doc.subtitle}</p>
                )}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
} 
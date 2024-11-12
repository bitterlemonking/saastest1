import { redirect } from 'next/navigation';
import { getLocale } from 'next-intl/server';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { allDocumentationPages, type DocPage } from '@/modules/marketing/data/docs';
import { getActivePathFromUrlParam } from '@shared/lib/content';

type TocItem = {
	title: string;
	url: string;
};

type PageParams = {
	path?: string[];
	locale: string;
};

export default async function DocsPage({
	params,
}: {
	params: PageParams;
}) {
	const { path } = params;
	const activePath = path ? getActivePathFromUrlParam(path) : '';
	const currentLocale = await getLocale();

	const page = allDocumentationPages
		.filter((p: DocPage) => p.path === activePath)
		.sort((p: DocPage) => (p.locale === currentLocale ? -1 : 1))[0];

	if (!page) {
		redirect("/");
	}

	const { title, subtitle, body, toc } = page;
	const mdxSource = await serialize(body);

	return (
		<div>
			<div className="mb-8">
				<h1 className="font-bold text-4xl">{title}</h1>
				{subtitle && (
					<p className="mt-3 text-2xl text-foreground/60">{subtitle}</p>
				)}
			</div>

			<div className="flex flex-col gap-6 lg:flex-row-reverse">
				{toc.length > 0 && (
					<div className="table-of-contents">
						<ul>
							{toc.map((item: TocItem) => (
								<li key={item.url}>
									<a href={item.url}>{item.title}</a>
								</li>
							))}
						</ul>
					</div>
				)}
				<div className="flex-1 pb-8">
					<MDXRemote {...mdxSource} />
				</div>
			</div>
		</div>
	);
}

import { getLocale } from "next-intl/server";
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { redirect } from "next/navigation";
import { getActivePathFromUrlParam } from "@shared/lib/content";

// 定义法律文档类型
type LegalDoc = {
	path: string;
	locale: string;
	title: string;
	body: string;
};

// 示例法律文档数据
const legalDocs: LegalDoc[] = [
	{
		path: 'privacy',
		locale: 'en',
		title: 'Privacy Policy',
		body: '# Privacy Policy\n\nThis is our privacy policy...'
	},
	{
		path: 'terms',
		locale: 'en',
		title: 'Terms of Service',
		body: '# Terms of Service\n\nThese are our terms...'
	}
];

export default async function LegalPage({
	params: { path, locale },
}: {
	params: { path: string[]; locale: string };
}) {
	const activePath = getActivePathFromUrlParam(path);
	const currentLocale = await getLocale();

	const doc = legalDocs.find(
		(doc) => doc.path === activePath && doc.locale === currentLocale
	);

	if (!doc) {
		redirect("/");
	}

	const mdxSource = await serialize(doc.body);

	return (
		<div className="container max-w-4xl py-32">
			<h1 className="mb-8 text-4xl font-bold">{doc.title}</h1>
			<div className="prose dark:prose-invert">
				<MDXRemote {...mdxSource} />
			</div>
		</div>
	);
}

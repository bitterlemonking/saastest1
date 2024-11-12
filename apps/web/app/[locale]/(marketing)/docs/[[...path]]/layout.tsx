import { getLocale } from "next-intl/server";
import { allDocumentationPages } from "@/modules/marketing/data/docs";
import { getContentStructure } from "@shared/lib/content";

export default async function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const locale = await getLocale();

	const contentStructure = getContentStructure({
		documents: allDocumentationPages,
		meta: [], // 如果需要，可以添加元数据
		locale,
	});

	return (
		<div className="container max-w-6xl py-32">
			<div className="flex flex-col gap-8 lg:flex-row">
				<div className="w-full lg:w-64">
					{/* 添加您的文档导航组件 */}
				</div>
				<div className="flex-1">{children}</div>
			</div>
		</div>
	);
}

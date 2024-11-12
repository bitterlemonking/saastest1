"use client";

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

export function PostContent({ content }: { content: MDXRemoteSerializeResult }) {
	return (
		<div className="prose dark:prose-invert mx-auto mt-6 max-w-2xl">
			<MDXRemote {...content} />
		</div>
	);
}

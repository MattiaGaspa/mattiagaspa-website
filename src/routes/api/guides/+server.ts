import { json } from '@sveltejs/kit';
import type { Guide } from '$lib/types';

async function getPosts() {
	let guides: Guide[] = [];

	const paths = import.meta.glob('/src/guides/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Guide, 'slug'>;
			const guide = { ...metadata, slug } satisfies Guide;
			guide.published && guides.push(guide);
		}
	}

	return guides;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}

import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const guide = await import(`../../../guides/${params.slug}.md`);

		return {
			content: guide.default,
			meta: guide.metadata
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}

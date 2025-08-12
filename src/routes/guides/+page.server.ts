import type { Guide } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('/api/guides');
	const guides: Guide[] = await response.json();
	return { guides };
}

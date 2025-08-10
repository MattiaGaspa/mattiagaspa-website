import { json } from '@sveltejs/kit';
import { readdirSync } from 'fs';
import { join, resolve } from 'path';

const currDir = resolve();

export function GET() {
	const articles: string[][] = [];
	const articlesPath = join(currDir, 'src', 'routes', 'home');
	const d = readdirSync(articlesPath, { withFileTypes: true });
	for (const article of d) {
		if (article.isDirectory()) {
			let date = article.name.split('-')[0];
			date = date.split('_')[2] + '/' + date.split('_')[1] + '/' + date.split('_')[0];
			articles.push([article.name, date, article.name.split('-')[1]]);
		}
	}

	return json(articles);
}

import { json } from '@sveltejs/kit';
import { readdirSync, readFileSync } from 'fs';
import { join, resolve } from 'path';

const currDir = resolve();

export function GET() {
	const guides: string[][] = [];
	const guidesPath = join(currDir, 'src', 'routes', 'guides', 'guides');
	const d = readdirSync(guidesPath, { withFileTypes: true });
	for (const guide of d) {
		if (guide.isDirectory()) {
			const descriptionFile = readFileSync(join(guidesPath, guide.name, 'description.txt'));
			guides.push([guide.name, descriptionFile.toString().trim()]);
		}
	}

	return json(guides);
}

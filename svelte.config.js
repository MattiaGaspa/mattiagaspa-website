import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Singleton Shiki highlighter
let globalHighlighter = null;

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang) => {
			if (!globalHighlighter) {
				globalHighlighter = await createHighlighter({
					themes: ['github-dark'],
					langs: [
						'bash',
						'go',
						'java',
						'javascript',
						'python',
						'rust',
						'sql',
						'terraform',
						'typescript',
						'xml',
						'yaml'
					]
				});
				await globalHighlighter.loadLanguage('javascript', 'typescript');
			}
			const html = escapeSvelte(globalHighlighter.codeToHtml(code, { lang, theme: 'github-dark' }));
			return `{@html \`${html}\` }`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.md']
};

export default config;

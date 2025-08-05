<script lang="ts">
	import '../app.css';
	import svelte from '$lib/assets/svelte-favicon.svg';
	import tailwind from '$lib/assets/tailwind-favicon.png';
	import bun from '$lib/assets/bun-favicon.ico';
	import { House, BookOpenText, Search, MessageSquareQuote } from '@lucide/svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link
		rel="icon"
		href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 19 19'><text x='0' y='14'>☣️</text></svg>"
	/>
</svelte:head>

<nav class="bg-gray-100 p-4 dark:bg-zinc-900">
	<!-- Navigation bar -->
	<div
		class="container mx-auto flex flex-col items-center justify-between rounded-4xl border-2 border-y-gray-900 bg-linear-to-r/longer from-indigo-500 to-teal-400 dark:border-y-slate-200 dark:from-emerald-600 dark:to-slate-600"
	>
		<!-- Main container -->
		<div class="mb-2 text-left text-5xl font-bold text-black dark:text-white">
			<!-- Logo -->
			<a href="/" class="cursor-lighting">Portfolio</a>
		</div>

		<div
			class="mt-4 flex-col items-center text-2xl text-black lg:mt-0 lg:flex lg:flex-row lg:space-x-4 dark:text-white"
		>
			<!-- Navigation links -->
			<a href="/" class="cursor-house flex items-center space-x-2">
				<House /> Home
			</a>
			<a href="/guides" class="cursor-book flex items-center space-x-2">
				<BookOpenText /> Guides
			</a>
			<a href="/about" class="cursor-lens flex items-center space-x-2">
				<Search /> About
			</a>
			<a href="/contacts" class="cursor-phone flex items-center space-x-2">
				<MessageSquareQuote /> Contacts
			</a>
		</div>
	</div>
</nav>

<div
	class="container mx-auto min-h-screen min-w-screen bg-gray-100 text-black dark:bg-zinc-900 dark:text-white"
>
	<div class="items-right flex flex-col justify-between sm:px-2 md:px-2 lg:px-4 xl:px-5 2xl:px-6">
		{@render children?.()}
	</div>
	<footer
		class="mt-8 flex items-center justify-center p-4 text-sm text-gray-600 dark:text-gray-400"
	>
		<em>
			© {new Date().getFullYear()} Mattia Gasparotto - Built with
			<a href="https://bun.com/" target="_blank" rel="noopener">
				<img src={bun} alt="Svelte" class="inline h-5 w-5 align-text-bottom" /><span
					class="text-orange-100 not-dark:text-shadow-gray-600 not-dark:text-shadow-xs">Bun</span
				>
			</a>
			,
			<a href="https://svelte.dev" target="_blank" rel="noopener">
				<img src={svelte} alt="Svelte" class="inline h-5 w-5 align-text-bottom" /><span
					class="text-orange-500">SvelteKit</span
				>
			</a>
			and
			<a href="https://tailwindcss.com/" target="_blank" rel="noopener">
				<img src={tailwind} alt="Svelte" class="inline h-5 w-5 align-text-bottom" /><span
					class="text-cyan-600">TailwindCSS</span
				>
			</a>
		</em>
	</footer>
</div>

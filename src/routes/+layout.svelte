<script lang="ts">
	import '../app.css';
	import { House, BookOpenText, Search, MessageSquareQuote } from '@lucide/svelte';
	import { icons } from '$lib/utils';

	let { children } = $props();
</script>

<svelte:head>
	<link
		rel="icon"
		href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 19 19'><text x='0' y='14'>☣️</text></svg>"
	/>
</svelte:head>

<nav class="bg-gray-100 not-dark:border-b-2 not-dark:border-gray-600 dark:bg-black">
	<!-- Navigation bar -->
	<div class="container mx-auto flex flex-row items-center justify-between rounded-4xl">
		<!-- Main container -->
		<div class="px-4 pt-2 text-left text-2xl sm:text-4xl lg:text-5xl xl:text-7xl transition duration-300 ease-in-out hover:scale-110 inline">
			<!-- Logo -->
			<a href="/" class="heading-font flex items-center"
			>$ Portfolio</a>
		</div>

		<div class="flex-col items-center md:text-xl lg:text-2xl xl:text-4xl lg:mt-0 lg:flex lg:flex-row lg:space-x-4">
			<!-- Navigation links -->
			<a
				href="/"
				class="heading-font flex items-center space-x-2 pr-4 transition duration-300 ease-in-out hover:scale-110"
			>
				<House class="mr-1" /><span class="hidden sm:inline">Home</span>
			</a>
			<a
				href="/guides"
				class="heading-font flex items-center space-x-2 pr-4 transition duration-300 ease-in-out hover:scale-110"
			>
				<BookOpenText class="mr-1" /><span class="hidden sm:inline">Guides</span>
			</a>
			<a
				href="/about"
				class=" heading-font flex items-center space-x-2 pr-4 transition duration-300 ease-in-out hover:scale-110"
			>
				<Search class="mr-1" /><span class="hidden sm:inline">About</span>
			</a>
			<a
				href="/contacts"
				class="heading-font flex items-center space-x-2 pr-4 transition duration-300 ease-in-out hover:scale-110"
			>
				<MessageSquareQuote class="mr-1" /><span class="hidden sm:inline">Contacts</span>
			</a>
		</div>
	</div>
</nav>

<main>
	<div class="items-right flex flex-col justify-between p-2 sm:p-2 md:p-2 lg:p-4 xl:p-5 2xl:p-6">
		{@render children?.()}
	</div>
</main>
<footer class="mt-8 flex items-center justify-center p-4 text-sm text-gray-600 dark:text-gray-400">
	<em>
		© {new Date().getFullYear()} Mattia Gasparotto - Built with
		<a href="https://bun.com/" target="_blank" rel="noopener" class="cursor-bun">
			<img src={icons['bun']} alt="Bun" class="inline h-5 w-5 align-text-bottom" /><span
				class="pl-1 text-orange-100 not-dark:text-shadow-gray-600 not-dark:text-shadow-xs">Bun</span
			>
		</a>
		,
		<a href="https://svelte.dev" target="_blank" rel="noopener" class="cursor-svelte">
			<img src={icons['svelte']} alt="Svelte" class="inline h-5 w-5 align-text-bottom" /><span
				class="pl-1 text-orange-500">SvelteKit</span
			>
		</a>
		and
		<a href="https://tailwindcss.com/" target="_blank" rel="noopener" class="cursor-tailwind">
			<img src={icons['tailwind']} alt="Tailwind" class="inline h-5 w-5 align-text-bottom" /><span
				class="pl-1 text-cyan-600">TailwindCSS</span
			>
		</a>
	</em>
</footer>

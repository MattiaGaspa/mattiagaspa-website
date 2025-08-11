<script lang="ts">
	import '../app.css';
	import { House, BookOpenText, Search, MessageSquareQuote } from '@lucide/svelte';
	import { icons } from '$lib/config';

	let { children } = $props();
</script>

<svelte:head>
	<link
		rel="icon"
		href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 19 19'><text x='0' y='14'>☣️</text></svg>"
	/>
</svelte:head>

<nav class="bg-gray-100 not-dark:border-b-2 not-dark:border-gray-200 dark:bg-black">
	<!-- Navigation bar -->
	<div class="container mx-auto flex flex-row items-center justify-between rounded-4xl">
		<!-- Main container -->
		<div class="px-4 text-left text-7xl transition duration-300 ease-in-out hover:scale-110">
			<!-- Logo -->
			<a href="/" class="heading-font flex items-center"
				><span class="mr-2 hidden sm:inline">$</span> Portfolio</a
			>
		</div>

		<div
			class="heading-font flex-col items-center text-4xl lg:mt-0 lg:flex lg:flex-row lg:space-x-4"
		>
			<!-- Navigation links -->
			<a
				href="/"
				class="flex items-center space-x-2 pr-4 transition duration-300 ease-in-out hover:scale-110"
			>
				<House class="mr-1" /><span class="hidden sm:inline">Home</span>
			</a>
			<a
				href="/guides"
				class="flex items-center space-x-2 pr-4 transition duration-300 ease-in-out hover:scale-110"
			>
				<BookOpenText class="mr-1" /><span class="hidden sm:inline">Guides</span>
			</a>
			<a
				href="/about"
				class="flex items-center space-x-2 pr-4 transition duration-300 ease-in-out hover:scale-110"
			>
				<Search class="mr-1" /><span class="hidden sm:inline">About</span>
			</a>
			<a
				href="/contacts"
				class="flex items-center space-x-2 pr-4 transition duration-300 ease-in-out hover:scale-110"
			>
				<MessageSquareQuote class="mr-1" /><span class="hidden sm:inline">Contacts</span>
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
			<a href="https://bun.com/" target="_blank" rel="noopener" class="cursor-bun">
				<img src={icons['bun']} alt="Bun" class="inline h-5 w-5 align-text-bottom" /><span
					class="text-orange-100 not-dark:text-shadow-gray-600 not-dark:text-shadow-xs">Bun</span
				>
			</a>
			,
			<a href="https://svelte.dev" target="_blank" rel="noopener" class="cursor-svelte">
				<img src={icons['svelte']} alt="Svelte" class="inline h-5 w-5 align-text-bottom" /><span
					class="text-orange-500">SvelteKit</span
				>
			</a>
			and
			<a href="https://tailwindcss.com/" target="_blank" rel="noopener" class="cursor-tailwind">
				<img src={icons['tailwind']} alt="Tailwind" class="inline h-5 w-5 align-text-bottom" /><span
					class="text-cyan-600">TailwindCSS</span
				>
			</a>
		</em>
	</footer>
</div>

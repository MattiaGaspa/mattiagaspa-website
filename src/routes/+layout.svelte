<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import HeaderLink from '$lib/components/HeaderLink.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="bg-gray-100 p-4 dark:bg-zinc-900">
	<!-- Navigation bar -->
	<div
		class="container mx-auto flex flex-col items-center justify-between rounded-4xl border-2 border-y-gray-900 bg-linear-to-r/longer from-indigo-500 to-teal-400 dark:border-y-slate-200 dark:from-emerald-600 dark:to-slate-600"
	>
		<!-- Main container -->
		<div class="mb-2 text-left text-5xl font-bold text-black dark:text-white">
			<!-- Logo -->
			Portfolio
		</div>

		<div class="mt-4 flex-col items-center text-xl lg:mt-0 lg:flex lg:flex-row lg:space-x-4">
			<!-- Navigation links -->
			<HeaderLink href="/" text="Home" />
			<HeaderLink href="/guides" text="Guides" cursor="alias" />
			<HeaderLink href="/about" text="About" cursor="help" />
			<HeaderLink href="/contacts" text="Contacts" />
		</div>
	</div>
</nav>

<div
	class="container mx-auto min-h-screen min-w-screen bg-gray-100 text-black dark:bg-zinc-900 dark:text-white"
>
	<div class="flex flex-col items-right justify-between sm: md: lg:px-4 xl:px-5 2xl:px-6">
		{@render children?.()}
	</div>
	<footer class="mt-8 flex items-center justify-center p-4 text-sm text-gray-600 dark:text-gray-400">
		<em>© {new Date().getFullYear()} Mattia Gasparotto</em>
	</footer>
</div>

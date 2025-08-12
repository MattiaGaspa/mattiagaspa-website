<script lang="ts">
	import { icons, title } from '$lib/config';
	import { onMount } from 'svelte';

	/** @type {string[][] | undefined} */
	let guides = $state();
	onMount(() => {
		fetch('/api/getGuides')
			.then((response) => response.json())
			.then((data) => {
				guides = data ?? [];
			});
	});
</script>

<svelte:head>
	<title>{title} - Guides</title>
</svelte:head>

<h1>My guides and notes:</h1>

{#if guides}
	<div class="flex grid grid-cols-3 flex-col gap-4 gap-y-10 mb-3">
		{#each guides as [name, description]}
			<div class="text-center text-lg transition duration-300 ease-in-out hover:scale-105">
				{#if icons[name]}
					<a href="/guides/guides/{name}"
						><img
							src={icons[name]}
							alt={name}
							class="inline align-text-bottom h-full max-h-30 max-w-30 object-contain scale-125"
						/></a
					>
				{:else}
					<a href="/guides/guides/{name}"
						><span class="inline h-5 w-5 align-text-bottom">❓</span></a
					>
				{/if}
				<h2><a href="/guides/guides/{name}">{name}</a></h2>
				<p>{@html description}</p>
			</div>
		{/each}
	</div>
{:else}
	<li>Loading guides...</li>
{/if}

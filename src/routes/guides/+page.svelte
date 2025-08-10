<script lang="ts">
	import { title } from '$lib/config';
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
	<ul>
		{#each guides as [name, description]}
			<li>
				<p><a href="/guides/guides/{name}">{name}</a>: {@html description}</p>
			</li>
		{/each}
	</ul>
{:else}
	<li>Loading guides...</li>
{/if}

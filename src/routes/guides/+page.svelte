<script lang="ts">
	import { title } from '$lib/config';
	import { icons } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>{title} - Guides</title>
</svelte:head>

<h1>My guides and notes:</h1>

<div class="mb-3 flex grid grid-cols-1 flex-col gap-4 gap-y-25 sm:grid-cols-3">
	{#each data.guides as guide, i (guide.slug)}
		<div class="text-center text-lg transition duration-300 ease-in-out hover:scale-105">
			{#if icons[guide.title]}
				<a href="/guides/{guide.slug}"
					><img
						src={icons[guide.title]}
						alt={guide.title}
						class="inline-block h-full max-h-30 max-w-30 scale-125 object-contain align-bottom"
					/></a
				>
			{:else}
				<a href="/guides/{guide.slug}"
					><img
						src={icons[guide.language]}
						alt={guide.title}
						class="inline-block h-full max-h-30 max-w-30 scale-125 object-contain align-bottom"
					/></a
				>
			{/if}
			<h2><a href="/guides/{guide.slug}">{guide.title}</a></h2>
			<p>{@html guide.description}</p>
		</div>
	{/each}
</div>

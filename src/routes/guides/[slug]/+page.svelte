<script lang="ts">
	import { title } from '$lib/config';
	let { data } = $props();
</script>

<svelte:head>
	<title>{title} - {data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<p>
	<button
		class="items-left inline-block h-auto w-auto rounded-lg border-2 border-emerald-400 px-5 py-2 font-semibold shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-300 hover:dark:bg-zinc-950"
		onclick={() => window.history.back()}
	>
		&#8592; Back to Guides
	</button>
</p>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
	</hgroup>

	<data.content />
</article>

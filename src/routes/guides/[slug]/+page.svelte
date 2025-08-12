<script lang="ts">
	import { title } from '$lib/config';
	let { data } = $props();
</script>

<svelte:head>
	<title>{title} - {data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<a href="/guides" class="py-4 text-xl">🔙 Back to Guides</a>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
	</hgroup>

	<data.content />
</article>

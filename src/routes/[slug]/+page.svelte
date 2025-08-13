<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { title } from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{title} - {data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<a href="/" class="py-4 text-xl">🔙 Back to Home Page</a>
<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="prose">
		<data.content />
	</div>
</article>

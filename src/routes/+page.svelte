<script lang="js">
	import { title } from '$lib/config';
	import { onMount } from 'svelte';
	import Article from '$lib/components/Article.svelte';

	/** @type {string[][] | undefined} */
	let articles = $state();
	onMount(() => {
		fetch('/api/getArticles')
			.then((response) => response.json())
			.then((data) => {
				articles = data ?? [];
			});
	});
</script>

<svelte:head>
	<title>{title} - Home</title>
</svelte:head>

<h1>Welcome to {title}</h1>
<h2>Recent posts from me:</h2>
{#if articles}
	{#each articles as article (article[0])}
		<Article dir={article[0]} date={article[1]} title={article[2]} />
	{/each}
{:else}
	<p>Loading articles...</p>
{/if}

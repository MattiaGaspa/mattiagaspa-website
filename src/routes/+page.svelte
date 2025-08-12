<script lang="js">
	import { title } from '$lib/config';
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>{title} - Home</title>
</svelte:head>

<h1>Welcome to {title}</h1>
<h2>Recent posts from me:</h2>
{#each data.posts as post}
	<article class="my-4 rounded-xl border bg-emerald-100 px-4 pb-4 dark:bg-zinc-700">
		<h2>{post.title}</h2>
		<p>Published on {post.date}</p>
		<p>{post.description} <a href={post.slug}>Read more</a></p>
	</article>
{/each}

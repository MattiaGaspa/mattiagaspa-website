<script lang="js">
	import { title } from '$lib/config';
	import { TriangleAlert } from '@lucide/svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{title} - Home</title>
</svelte:head>

<p class="flex items-center gap-2 text-4xl font-extrabold text-red-500 dark:hidden">
	<TriangleAlert />THIS WEBSITE WORKS BETTER IN DARK MODE! SAVE YOUR EYES BY SWITCHING<TriangleAlert
	/>
</p>
<h1>Welcome to {title}</h1>
<h2>Recent posts from me:</h2>
{#each data.posts as post}
	<article class="my-4 rounded-xl border bg-emerald-100 px-4 pb-4 dark:bg-zinc-700">
		<h2>{post.title}</h2>
		<p>Published on {post.date}</p>
		<p>{post.description} <a href={post.slug}>Read more</a></p>
	</article>
{/each}

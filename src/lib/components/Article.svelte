<script lang="ts">
	let { date, title, dir } = $props();
</script>

<article class="my-4 rounded-xl border bg-emerald-100 px-4 pb-4 dark:bg-zinc-700">
	<h2>{title}</h2>
	<p>Published on {date}</p>
	<a href="/home/{dir}">Read more</a>
</article>

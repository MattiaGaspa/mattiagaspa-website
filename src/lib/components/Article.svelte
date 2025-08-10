<script lang="ts">
	let { date, title, dir } = $props();
</script>

<article class="border rounded-xl px-4 pb-4 my-4 bg-emerald-100 dark:bg-zinc-700">
	<h2>{title}</h2>
	<p>Published on {date}</p>
	<a href="/home/{dir}">Read more</a>
</article>
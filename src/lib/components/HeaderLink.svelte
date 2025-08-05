<script lang="ts">
	let { href, text, cursor = 'default' } = $props();
	let cursorClass = 'hover:cursor-' + cursor;
</script>

<main>
	<div class="text-2xl text-black dark:text-white">
		<a {href} class={cursorClass}>
			{text}
		</a>
	</div>
</main>

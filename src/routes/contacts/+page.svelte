<script lang="ts">
	import { icons, title } from '$lib/config';
</script>

<svelte:head>
	<title>{title} - Contacts</title>
</svelte:head>

<h1>Contact me on:</h1>
<ul class="text-2xl">
	<li>
		<a href="mailto:gasmat04@gmail.com" rel="noopener" target="_blank"
			><img src={icons['gmail']} alt="Email" class="align-text-center mr-2 inline h-10 w-10" /><span
				>Email</span
			></a
		>
	</li>
	<li>
		<a href="https://github.com/MattiaGaspa" rel="noopener" target="_blank"
			><img
				src={icons['github']}
				alt="Github"
				class="align-text-center mr-2 inline h-10 w-10"
			/><span>Github</span></a
		>
	</li>
	<li>
		<a href="https://t.me/MattiaGaspa" rel="noopener" target="_blank"
			><img
				src={icons['telegram']}
				alt="Telegram"
				class="align-text-center mr-2 inline h-10 w-10"
			/><span>Telegram</span></a
		>
	</li>
	<li>
		<a href="https://it.linkedin.com/in/mattia-gasparotto-aa3389360" rel="noopener" target="_blank"
			><img
				src={icons['linkedin']}
				alt="Linkedin"
				class="align-text-center mr-2 inline h-10 w-10"
			/><span>Linkedin</span></a
		>
	</li>
</ul>

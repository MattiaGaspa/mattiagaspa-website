<script lang="ts">
	import { title } from '$lib/config';
	import Mail from '$lib/assets/email.png';
	import Telegram from '$lib/assets/telegram.png';
	import Github from '$lib/assets/github.png';
	import Linkedin from '$lib/assets/linkedin.png';
</script>

<svelte:head>
	<title>{title} - Contacts</title>
</svelte:head>

<h1>Contact me on:</h1>
<ul class="text-2xl">
	<li class="px-3 py-4">
		<a href="mailto:gasmat04@gmail.com" rel="noopener" target="_blank"
			><img src={Mail} alt="Email" class="align-text-center mr-2 inline h-10 w-10" /><span
				>Email</span
			></a
		>
	</li>
	<li class="px-3 py-4">
		<a href="https://github.com/MattiaGaspa" rel="noopener" target="_blank"
			><img src={Github} alt="Github" class="align-text-center mr-2 inline h-10 w-10" /><span
				>Github</span
			></a
		>
	</li>
	<li class="px-3 py-4">
		<a href="https://t.me/MattiaGaspa" rel="noopener" target="_blank"
			><img src={Telegram} alt="Telegram" class="align-text-center mr-2 inline h-10 w-10" /><span
				>Telegram</span
			></a
		>
	</li>
	<li class="px-3 py-4">
		<a href="https://it.linkedin.com/in/mattia-gasparotto-aa3389360" rel="noopener" target="_blank"
			><img src={Linkedin} alt="Linkedin" class="align-text-center mr-2 inline h-10 w-10" /><span
				>Linkedin</span
			></a
		>
	</li>
</ul>

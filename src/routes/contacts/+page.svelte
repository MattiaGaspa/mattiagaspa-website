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

<h1 class="text-2xl font-bold">Contact me on</h1>
<ul>
	<li>
		<a href="mailto:gasmat04@gmail.com" rel="noopener" target="_blank"
			><img src={Mail} alt="Email" class="mr-2 inline h-5 w-5 align-text-bottom" /><span>Email</span
			></a
		>
	</li>
	<li>
		<a href="https://github.com/MattiaGaspa" rel="noopener" target="_blank"
			><img src={Github} alt="Github" class="mr-2 inline h-5 w-5 align-text-bottom" /><span
				>Github</span
			></a
		>
	</li>
	<li>
		<a href="https://t.me/MattiaGaspa" rel="noopener" target="_blank"
			><img src={Telegram} alt="Telegram" class="mr-2 inline h-5 w-5 align-text-bottom" /><span
				>Telegram</span
			></a
		>
	</li>
	<li>
		<a href="https://it.linkedin.com/in/mattia-gasparotto-aa3389360" rel="noopener" target="_blank"
			><img src={Linkedin} alt="Linkedin" class="mr-2 inline h-5 w-5 align-text-bottom" /><span
				>Linkedin</span
			></a
		>
	</li>
	<li></li>
</ul>
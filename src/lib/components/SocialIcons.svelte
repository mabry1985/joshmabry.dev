<script>
	import github from '$lib/assets/github.svg';
	import linkedin from '$lib/assets/linkedin.svg';
	import { fly } from 'svelte/transition';
</script>

<div class="flex flex-row justify-center" transition:fly={{ x: 25, delay: 0, duration: 300 }}>
	<a
		href="https://github.com/mabry1985"
		class="mx-2"
		target="_blank"
		rel="noreferrer"
		aria-label="Josh Mabry's Github page"
	>
		<img class="text-primary w-8 h-8" src={github} aria-hidden alt="github icon" />
	</a>
	<a
		href="https://www.linkedin.com/in/mabry1985/"
		class="mx-2"
		target="_blank"
		rel="noreferrer"
		aria-label="Josh Mabry's Linkedin page"
	>
		<img class="icon" src={linkedin} aria-hidden alt="linkedin icon" />
	</a>
</div>

<style>
	img.icon {
		@apply w-8 h-8 text-primary;
	}

	img.icon:hover {
		@apply shadow-sm;
	}
</style>

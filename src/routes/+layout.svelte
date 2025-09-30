<script lang="ts">
	import Hamburger from '$lib/components/Hamburger.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import logo from '$lib/assets/logo.svg';
	import '../app.css';
	let open: boolean;
</script>

<div class="w-full min-h-screen">
	<header class="container mx-auto flex justify-end sm:justify-between py-6 md:py-8 px-4 md:px-8">
		<a data-sveltekit-reload href="/" class="hidden sm:inline-block" aria-label="home page">
			<img class="text-primary w-8 h-8" src={logo} aria-hidden alt="home icon" />
		</a>
		<Hamburger bind:open />
	</header>
	<main class:is-active={open}>
		<Menu bind:open />
		<div class="container mx-auto px-4 md:px-8 pb-16">
			<slot />
		</div>
	</main>
</div>

<style>
	main {
		@apply relative flex flex-col;
	}

	main.is-active::before {
		@apply absolute top-0 left-0 w-full h-full;
		@apply bg-dark;
		@apply opacity-50;
		@apply transition-opacity duration-300;
		content: '';
		z-index: 10;
	}

	@screen md {
		main {
			@apply flex-row;
		}
	}
</style>

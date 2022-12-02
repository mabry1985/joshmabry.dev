<script type='ts'>
	import Hamburger from '$lib/components/Hamburger.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import logo from '$lib/assets/logo.svg';
	import '../app.css';
	let open: boolean;
</script>

<div class="w-full h-screen container">
	<header class="flex justify-end sm:justify-between py-3 md:py-5">
		<a data-sveltekit-reload href="/" class="hidden sm:inline-block" aria-label="home page">
			<img class="text-primary w-8 h-8" src={logo} aria-hidden alt="linkedin icon" />
		</a>
		<Hamburger bind:open />
	</header>
	<main class:is-active={open}>
		<Menu bind:open />
		<slot />
	</main>
</div>

<style>
	main {
		@apply border-solid border border-primary rounded-lg relative overflow-hidden p-4 pr-0;
		@apply flex flex-col;
		max-height: calc(100vh - 4rem);
	}

	main.is-active::before {
		@apply absolute top-0 left-0 w-full h-full;
		@apply bg-dark;
		@apply opacity-50;
		@apply transition-opacity duration-300;
		content: '';
	}

	@screen sm {
		main {
			@apply flex-row;
		}
	}
</style>

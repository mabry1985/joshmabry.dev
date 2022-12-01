<script>
	import Hamburger from '$lib/components/Hamburger.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import logo from '$lib/assets/logo.svg';
	import '../app.css';

	let open;

</script>

<div class="w-full h-screen container">
	<header class="flex justify-end sm:justify-between py-3 md:py-5">
		<a href="/" class="hidden sm:inline-block" aria-label="home page">
			<img class="text-primary w-8 h-8" src={logo} aria-hidden alt="linkedin icon" />
		</a>
		<Hamburger bind:open />
	</header>
	<main>
		<Menu bind:open />
		<slot />
	</main>
</div>

<style>
	main {
		@apply border-solid border border-primary rounded-lg relative overflow-hidden;
		@apply flex flex-col;
		max-height: calc(100vh - 4rem);
	}

	@screen sm {
		main {
			@apply flex-row p-4 pr-0;
		}
	}

	@screen md {
		main {
			/* @apply lg:mx-auto; */
			/* @apply relative top-1/2 -translate-y-1/2; */
			@apply flex-row p-4;
		}
	}
</style>

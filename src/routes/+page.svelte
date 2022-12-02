<script>
	import SocialIcons from '$lib/components/SocialIcons.svelte';
	import { menuData } from '$lib/data/menu-data';
	import portrait from '$lib/assets/portrait.png';
	import '../app.css';
</script>

<img class="portrait" alt="portrait of Josh Mabry" src={portrait} />
<div class="hero-menu">
	<h1 class="text-h1-responsive">Josh Mabry</h1>
	<ul class="hero-menu-links">
		{#each menuData as link, i}
			{#if i < 3}
				<li class="hero-menu-link--item">
					<a data-sveltekit-reload href={link.url} alt={link.alt}>{link.title}</a>
				</li>
			{/if}
		{/each}
	</ul>
	<span class="social-links">
		<SocialIcons />
	</span>
</div>

<style>
	.hero-menu {
		@apply flex flex-col flex-grow;
		@apply justify-center;
		@apply text-center;
		@apply self-center w-full lg:w-1/2 mx-2 lg:mt-6 my-4;
	}

	.hero-menu-link--item {
		@apply text-primary text-lg lg:text-2xl my-1 underline cursor-pointer transition-colors duration-300;
		@apply font-sans font-light uppercase;
		@apply hover:text-secondary hover:no-underline;
	}

	.social-links {
		@apply mt-4 mb-8 lg:my-0;
	}

	@screen sm {
		.hero-menu {
			@apply ml-7 mt-8;
		}

		.hero-menu-link--item {
			@apply my-0;
		}
	}

	@screen md {
		.hero-menu {
			@apply ml-2 mt-2;
		}
		.hero-menu-links {
			@apply m-1;
		}
	}

	@screen lg {
		.hero-menu {
			@apply ml-10 mt-2;
		}
		.hero-menu-links {
			@apply m-4;
		}
		.hero-menu-link--item {
			@apply my-2;
		}
	}
</style>

<script>
	import SocialIcons from '$lib/components/SocialIcons.svelte';
	import portrait from '$lib/assets/portrait.png';
	import '../app.css';
</script>

<div class="portrait-wrapper">
	<img class="portrait" alt="portrait of Josh Mabry" src={portrait} />
</div>
<div class="hero-menu">
	<h1 class="text-h1-responsive">Josh Mabry</h1>
	<ul class="hero-menu-links">
		<li class="hero-menu-link--item">Developer</li>
		<li class="hero-menu-link--item">Designer</li>
		<li class="hero-menu-link--item">Artist</li>
	</ul>
	<span class="social-links">
		<SocialIcons />
	</span>
</div>

<style>
	/* .portrait-wrapper {
    @apply object-cover;
    @apply flex justify-center;
    @apply w-full;
    @apply h-[300px];
    @apply bg-primary;
  } */
	.portrait {
		@apply object-cover m-auto my-6;
		border-radius: 0.5rem;
		@apply w-[300px] h-[300px];
		@apply bg-primary;
	}

	.hero-menu {
		@apply flex flex-col flex-grow;
		@apply justify-center;
		@apply text-center;
		@apply self-center w-full lg:w-1/2 mx-2 lg:mt-6 my-4;
	}

	.hero-menu-link--item {
		@apply text-primary text-lg lg:text-2xl my-1 underline cursor-pointer;
		@apply font-sans font-light;
		@apply hover:text-secondary;
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

		.portrait {
			@apply w-full h-full m-0 mr-32;
		}
	}

	@screen md {
		.hero-menu {
			@apply ml-2 mt-2;
		}
		.hero-menu-links {
			@apply m-1;
		}
		.hero-menu-link--item {
			/* @apply my-2;  */
		}
		.portrait {
			@apply mr-48;
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
		.portrait {
			@apply mr-0;
		}
	}
</style>

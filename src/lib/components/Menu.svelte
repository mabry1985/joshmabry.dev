<script>
	import { fly } from 'svelte/transition';
	import SocialIcons from './SocialIcons.svelte';

	export let open;
</script>

{#if open}
	<div class="menu" transition:fly={{ x: 25, duration: 300 }}>
		<nav>
			<span
				class="text-h4-responsive font-serif mb-2"
				aria-hidden="true"
				transition:fly={{ x: 25, delay: 0, duration: 300 }}>Josh Mabry</span
			>
			<ul>
				{#each ['Developer', 'Designer', 'Artist', 'Blog', 'About'] as link, i}
					<li transition:fly={{ x: 25, delay: 0, duration: 300 }}>
						<a href="#">{link}</a>
					</li>
				{/each}
			</ul>

			<SocialIcons />
		</nav>
	</div>
{/if}

<style>
	.menu {
		@apply text-primary font-sans absolute -right-1 -top-1 h-full bg-dark w-screen;
		text-align: center;
		width: calc(100%);
	}
	nav {
		@apply flex flex-col justify-center h-full rounded-lg;
		@apply m-6;
		height: calc(100% - 48px);
		border: solid 2px var(--color-primary);
	}
	nav li {
		@apply my-2;
	}

	nav ul {
		@apply mb-2;
	}
	a {
		@apply uppercase underline font-light py-2;
		cursor: pointer;
		width: max-content;
	}
	a:hover {
		text-decoration: underline;
	}

	@screen xs {
		.menu {
			width: calc(100vw - 6rem);
		}
	}

	@screen sm {
		.menu {
			width: min(400px, 50vw);
		}
	}
</style>

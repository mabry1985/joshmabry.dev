<script lang="ts">
	import { menuData } from '$lib/data/menu-data';
	import { fly } from 'svelte/transition';
	import SocialIcons from './SocialIcons.svelte';

	const handleFocus = (): undefined => {
		const icons = document.getElementById('social-icons');
		icons?.lastChild?.addEventListener('focusout', () => {
			open = false;
		});
		return;
	};

	export let open: boolean;
</script>

{#if open}
	<div
		id="menu"
		on:focus={handleFocus()}
		class="menu"
		transition:fly|local={{ x: 15, duration: 300, delay: 0 }}
	>
		<nav>
			<span
				class="text-h4-responsive font-serif mb-2"
				aria-hidden="true"
				transition:fly={{ x: 15, delay: 5, duration: 350 }}>Josh Mabry</span
			>
			<ul>
				{#each menuData as link}
					<li transition:fly={{ x: 15, delay: 5, duration: 350 }}>
						<a data-sveltekit-reload href={link.url} alt={link.alt}>{link.title}</a>
					</li>
				{/each}
			</ul>

			<SocialIcons />
		</nav>
	</div>
{/if}

<style>
	.menu {
		@apply text-primary font-sans absolute right-0 top-0 h-full bg-dark w-screen overflow-hidden;
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
		@apply uppercase underline font-light transition-colors duration-300;
		cursor: pointer;
		width: max-content;
	}
	a:hover {
		@apply text-secondary;
		text-decoration: none;
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

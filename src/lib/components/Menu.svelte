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
			<ul>
				<li transition:fly={{ x: 15, delay: 5, duration: 350 }}>
					<a id="menu-title-link" data-sveltekit-reload aria-label="goto homepage" href="/" on:click={() => open = false}>Josh Mabry</a>
				</li>
				{#each menuData as link}
					<li transition:fly={{ x: 15, delay: 5, duration: 350 }}>
						<a class="flyout-link" data-sveltekit-reload on:click={() => open = false} href={link.url} alt={link.alt}
							>{link.title}</a
						>
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
		@apply backdrop-blur-sm;
		text-align: center;
		max-height: calc(100vh - 48px);
		width: calc(100%);
		background: rgba(18, 18, 18, 0.95);
		z-index: 20;
	}

	#menu-title-link {
		@apply font-light mb-8 no-underline text-2xl md:text-3xl;
	}

	nav {
		@apply flex flex-col justify-center items-center h-full;
		@apply px-6 py-12;
		height: calc(100% - 48px);
	}
	
	nav li {
		@apply mb-6;
	}

	nav ul {
		@apply mb-12 space-y-4;
	}

	.flyout-link {
		@apply text-xl font-light transition-colors duration-300;
		@apply hover:text-secondary no-underline;
		cursor: pointer;
		width: max-content;
	}

	@screen sm {
		.menu {
			width: min(400px, 50vw);
		}
	}
</style>

<script type="ts">
	export let open = false;
	import { onMount } from 'svelte';

	onMount(() => {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				open = false;
			}
		});

		const hamburger = document.querySelector('.hamburger');
		const hamburgerBox = document.querySelector('.hamburger-box');

		document.addEventListener('click', (evt) => {
			const flyoutEl = document.getElementById('menu');
			const hamburgerIsActive = document.getElementById('hamburger-menu-active');
			let targetEl = evt.target as ParentNode | null;

			do {
				if (targetEl == flyoutEl) {
					return;
				} else if (hamburgerIsActive && (targetEl == hamburger || targetEl == hamburgerBox)) {
					open = false;
					return;
				} else if (targetEl == hamburger || targetEl == hamburgerBox) {
					open = true;
					return;
				}
				targetEl = targetEl!.parentNode;
			} while (targetEl && open);
			open = false;
		});
	});
</script>

<button
	class="hamburger hamburger--collapse"
	id={open ? 'hamburger-menu-active' : ''}
	aria-label="Hamburger menu"
	class:is-active={open}
>
	<span class="hamburger-box">
		<span class="hamburger-inner" />
	</span>
</button>

<style>
	.hamburger {
		@apply bg-primary text-primary;
		display: inline-block;
		cursor: pointer;
		transition-property: opacity, filter;
		transition-duration: 0.15s;
		transition-timing-function: linear;
		text-transform: none;
		background-color: transparent;
		border: 0;
		margin: 0;
		overflow: visible;
		line-height: 0;
	}
	.hamburger:active {
		background-color: transparent !important;
	}
	.hamburger.is-active .hamburger-inner,
	.hamburger.is-active .hamburger-inner::before,
	.hamburger.is-active .hamburger-inner::after {
		@apply bg-primary;
	}

	.hamburger-box {
		width: var(--layer-width, 30px);
		height: calc(var(--layer-height, 4px) * 3 + var(--layer-spacing, 6px) * 2);
		display: inline-block;
		position: relative;
	}

	.hamburger-inner {
		@apply pointer-events-none;
		display: block;
		top: 50%;
		margin-top: var(--layer-height, 4px) / -2;
	}
	.hamburger-inner,
	.hamburger-inner::before,
	.hamburger-inner::after {
		@apply bg-primary text-primary;
		width: var(--layer-width, 30px);
		height: var(--layer-height, 2px);
		border-radius: var(--border-radius, 4px);
		position: absolute;
		transition-property: transform;
		transition-duration: 0.15s;
		transition-timing-function: ease;
	}
	.hamburger-inner::before,
	.hamburger-inner::after {
		content: '';
		display: block;
	}
	.hamburger-inner::before {
		top: calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1);
	}
	.hamburger-inner::after {
		bottom: calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1);
	}

	.hamburger:hover {
		@apply text-secondary;
	}

	/*
    * Collapse
    */
	.hamburger--collapse .hamburger-inner {
		top: auto;
		bottom: 0;
		transition-duration: 0.13s;
		transition-delay: 0.13s;
		transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
	.hamburger--collapse .hamburger-inner::after {
		top: calc((var(--layer-spacing, 6px) * 2 + var(--layer-height, 4px) * 2) * -1);
		transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
	}
	.hamburger--collapse .hamburger-inner::before {
		transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
			transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
	.hamburger--collapse.is-active .hamburger-inner {
		transform: translate3d(0, calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1), 0)
			rotate(-45deg);
		transition-delay: 0.22s;
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.hamburger--collapse.is-active .hamburger-inner::after {
		top: 0;
		opacity: 0;
		transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
	}
	.hamburger--collapse.is-active .hamburger-inner::before {
		top: 0;
		transform: rotate(-90deg);
		transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
			transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
	}
</style>

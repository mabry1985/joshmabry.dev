<script>
	import SocialIcons from '$lib/components/SocialIcons.svelte';
	import { menuData } from '$lib/data/menu-data';
	import portrait from '$lib/assets/portrait.png';
	import '../app.css';
</script>

<div class="hero-layout">
	<div class="hero-image">
		<img class="portrait-clean" alt="portrait of Josh Mabry" src={portrait} />
	</div>
	
	<div class="hero-content">
		<div class="hero-header">
			<h1 class="hero-name">Josh Mabry</h1>
			<h2 class="hero-subtitle">Fullstack AI/UX Engineer</h2>
			<p class="hero-location">Portland, OR</p>
		</div>

		<div class="hero-summary">
			<p class="summary-text">
I build developer tools and AI-powered systems that are as reliable as they are usable — combining fullstack engineering, UX design, and AI research into products that make complex technology safe, accessible, and empowering.
			</p>
		</div>

		<!-- <div class="key-skills">
			<div class="skill-item">
				<span class="skill-label">AI/ML:</span>
				<span class="skill-tech">LangChain, LangGraph, Pinecone, RAG pipelines, prompt/context engineering, tool-use orchestration</span>
			</div>
			<div class="skill-item">
				<span class="skill-label">Stack:</span>
				<span class="skill-tech">TypeScript, React, Node.js, Python, Postgres</span>
			</div>
			<div class="skill-item">
				<span class="skill-label">Tools:</span>
				<span class="skill-tech">Cypress, Docker, GitHub Actions, accessibility audits</span>
			</div>
		</div> -->

		<div class="hero-actions">
			<div class="cta-buttons">
				<a href="/projects" class="cta-primary" data-sveltekit-reload>View Work</a>
				<a href="/content" class="cta-secondary" data-sveltekit-reload>Writing & Talks</a>
			</div>

		</div>
	</div>
</div>

<style>
	.hero-layout {
		@apply flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20;
		@apply min-h-[80vh] py-12 md:py-20;
		@apply max-w-6xl mx-auto;
	}

	.hero-image {
		@apply flex-shrink-0;
	}

	.portrait-clean {
		@apply w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-96 object-cover rounded-2xl;
		@apply shadow-lg;
	}

	.hero-content {
		@apply flex flex-col text-center md:text-left space-y-8;
		@apply max-w-2xl;
	}

	.hero-header {
		@apply space-y-3;
	}

	.hero-name {
		@apply text-4xl md:text-5xl lg:text-6xl font-light text-primary text-center md:text-left;
		@apply tracking-tight leading-tight;
	}

	.hero-subtitle {
		@apply text-xl md:text-2xl font-light text-gray-300;
		@apply mb-2;
	}

	.hero-location {
		@apply text-lg text-gray-400 font-light;
	}

	.summary-text {
		@apply text-lg md:text-xl leading-relaxed text-gray-300;
		@apply font-light;
	}

	.key-skills {
		@apply space-y-3;
	}

	.skill-item {
		@apply flex flex-col md:flex-row md:items-center gap-2;
	}

	.skill-label {
		@apply text-sm font-semibold text-primary uppercase tracking-wide;
		@apply md:w-20 flex-shrink-0;
	}

	.skill-tech {
		@apply text-gray-300 font-light;
	}

	.hero-actions {
		@apply space-y-8;
	}

	.cta-buttons {
		@apply flex flex-col sm:flex-row gap-4;
	}

	.cta-primary {
		@apply bg-primary text-gray-900 px-8 py-4 rounded-full font-medium;
		@apply hover:bg-opacity-90 transition-all duration-300;
		@apply no-underline text-center;
		@apply shadow-lg hover:shadow-xl;
	}

	.cta-secondary {
		@apply border-2 border-primary text-primary px-8 py-4 rounded-full font-medium;
		@apply hover:bg-primary hover:text-gray-900 transition-all duration-300;
		@apply no-underline text-center;
	}

	.contact-section {
		@apply space-y-4;
	}

	.contact-primary {
		@apply text-xl font-medium text-primary;
		@apply hover:text-secondary transition-colors duration-300;
		@apply no-underline;
	}

	.contact-secondary {
		@apply flex flex-col sm:flex-row items-center gap-4 text-gray-400;
	}

	@screen md {
		.portrait-clean {
			@apply w-80 h-96;
		}

		.skill-item {
			@apply flex-row items-center;
		}

		.cta-buttons {
			@apply flex-row;
		}

		.contact-secondary {
			@apply flex-row;
		}
	}
</style>

<script>
	import developerPortrait from '$lib/assets/developer.png';
</script>

<div class="developer-layout">
	<div class="developer-header">
		<div class="header-image">
			<img
				class="developer-portrait"
				alt="illustrated portrait of Josh Mabry sitting in front of computers"
				src={developerPortrait}
			/>
		</div>
		
		<div class="header-content">
			<h1 class="developer-title">My Projects</h1>
			<p class="developer-intro">
				Building tools that enhance developer creativity while keeping safety, transparency, and maintainability at the core. 
				My focus is on AI systems that augment productivity without losing the human element.
			</p>
		</div>
	</div>

	<div class="projects-section">
		<h2 class="section-title">Featured Projects</h2>
		
		<div class="project-card">
			<div class="project-info">
				<h3 class="project-name">acai.so</h3>
				<p class="project-description">
					AI-powered markdown editor with agentic workflows and local model support. 
					Built to enhance writing and documentation with intelligent assistance while 
					maintaining privacy and control over your content.
				</p>
				<div class="project-tech">
					<span class="tech-tag">TypeScript</span>
					<span class="tech-tag">React</span>
					<span class="tech-tag">LangChain</span>
					<span class="tech-tag">Local Models</span>
				</div>
			</div>
			<a href="https://github.com/artificialcitizens/acai.so" target="_blank" rel="noreferrer" class="project-action">
				View Code →
			</a>
		</div>

		<div class="project-card">
			<div class="project-info">
				<h3 class="project-name">AC-Scripts</h3>
				<p class="project-description">
					Open-source AI scripts for developer productivity within the ScriptKit ecosystem. 
					Collection of tools and utilities that integrate AI into daily development workflows, 
					from code generation to documentation assistance.
				</p>
				<div class="project-tech">
					<span class="tech-tag">JavaScript</span>
					<span class="tech-tag">Python</span>
					<span class="tech-tag">ScriptKit</span>
					<span class="tech-tag">OpenAI API</span>
				</div>
			</div>
			<a href="https://github.com/artificialcitizens/ac-scripts" target="_blank" rel="noreferrer" class="project-action">
				View Code →
			</a>
		</div>

		<div class="project-card">
			<div class="project-info">
				<h3 class="project-name">Chat Your Knowledgebase</h3>
				<p class="project-description">
					Comprehensive guide on building production-ready RAG pipelines with LLMs and embeddings. 
					Covers practical implementation patterns, performance considerations, and best practices 
					for enterprise knowledge bases.
				</p>
				<div class="project-tech">
					<span class="tech-tag">RAG Systems</span>
					<span class="tech-tag">LangChain</span>
					<span class="tech-tag">Vector DBs</span>
					<span class="tech-tag">Technical Writing</span>
				</div>
			</div>
			<a href="https://www.knapsack.cloud/blog/how-to-chat-with-your-knowledge-base" target="_blank" rel="noreferrer" class="project-action">
				Read Article →
			</a>
		</div>
	</div>

	<div class="approach-section">
		<h2 class="section-title">My Approach</h2>
		<div class="approach-grid">
			<div class="approach-item">
				<h4>AI as Enhancement</h4>
				<p>I believe AI should augment human creativity, not replace it. Building systems that developers can trust and understand.</p>
			</div>
			<div class="approach-item">
				<h4>Accessibility First</h4>
				<p>Every application should be inclusive. I focus on WCAG compliance and creating experiences that work for everyone.</p>
			</div>
			<div class="approach-item">
				<h4>Developer Experience</h4>
				<p>Great tools feel natural to use. I prioritize intuitive interfaces and smooth workflows over flashy features.</p>
			</div>
		</div>
	</div>

	<div class="contact-footer">
		<p class="footer-text">
			Love discussing AI integration, developer tools, and building accessible software. 
			Always excited to collaborate on projects that make developers' lives better.
		</p>
		<div class="footer-links">
			<a href="/content" class="footer-link" data-sveltekit-reload>Read my writing →</a>
			<a href="mailto:mabry1985@gmail.com" class="footer-link">Get in touch →</a>
		</div>
	</div>
</div>

<style>
	.developer-layout {
		@apply max-w-4xl mx-auto space-y-16 py-8;
	}

	.developer-header {
		@apply flex flex-col md:flex-row items-center gap-8 mb-16;
	}

	.header-image {
		@apply flex-shrink-0;
	}

	.developer-portrait {
		@apply w-48 h-60 md:w-56 md:h-72 object-cover rounded-xl shadow-lg;
	}

	.header-content {
		@apply text-center md:text-left space-y-4;
	}

	.developer-title {
		@apply text-3xl md:text-4xl lg:text-5xl font-light text-primary text-center md:text-left;
		@apply tracking-tight leading-tight;
	}

	.developer-intro {
		@apply text-lg md:text-xl leading-relaxed text-gray-300 font-light;
		@apply max-w-2xl;
	}

	.story-section, .projects-section, .approach-section {
		@apply space-y-6;
	}

	.story-title, .section-title {
		@apply text-2xl md:text-3xl font-light text-primary mb-6;
	}

	.story-text {
		@apply text-lg leading-relaxed text-gray-300 font-light;
	}

	.project-card {
		@apply bg-gray-800 rounded-xl p-8 border border-gray-700;
		@apply hover:border-gray-600 transition-colors duration-300;
		@apply space-y-6;
	}

	.project-info {
		@apply space-y-4;
	}

	.project-name {
		@apply text-xl font-medium text-primary;
	}

	.project-description {
		@apply text-gray-300 leading-relaxed;
	}

	.project-tech {
		@apply flex flex-wrap gap-2;
	}

	.tech-tag {
		@apply bg-gray-700 text-primary px-3 py-1 rounded-full text-sm font-medium;
	}

	.project-action {
		@apply inline-flex items-center text-primary hover:text-secondary;
		@apply transition-colors duration-300 no-underline font-medium;
	}

	.approach-grid {
		@apply grid grid-cols-1 md:grid-cols-3 gap-8;
	}

	.approach-item {
		@apply space-y-3;
	}

	.approach-item h4 {
		@apply text-lg font-medium text-primary;
	}

	.approach-item p {
		@apply text-gray-300 leading-relaxed;
	}

	.contact-footer {
		@apply text-center space-y-6 py-8 mt-16;
		@apply border-t border-gray-700;
	}

	.footer-text {
		@apply text-lg text-gray-300 leading-relaxed font-light;
	}

	.footer-links {
		@apply flex flex-col sm:flex-row justify-center gap-6;
	}

	.footer-link {
		@apply text-primary hover:text-secondary transition-colors duration-300;
		@apply no-underline font-medium;
	}
</style>
<div class="content-layout">
	<div class="content-header">
		<h1 class="content-title">Writing & Talks</h1>
		<p class="content-intro">
			Technical insights on AI integration, developer productivity, and building accessible applications.
		</p>
	</div>

	<div class="content-grid">
		<div class="content-section">
			<h2 class="section-heading">Articles</h2>
			
			<div class="content-item">
				<div class="item-info">
					<h3 class="item-title">How to chat with your knowledge base</h3>
					<p class="item-meta">Knapsack • RAG Systems, LangChain</p>
				</div>
				<a href="https://www.knapsack.cloud/blog/how-to-chat-with-your-knowledge-base" 
					 target="_blank" rel="noreferrer" class="item-link">
					Read →
				</a>
			</div>

			<div class="content-item">
				<div class="item-info">
					<h3 class="item-title">Using AI to Improve Web Accessibility</h3>
					<p class="item-meta">Product Hunt • WCAG, AI Testing</p>
				</div>
				<a href="https://www.producthunt.com/stories/using-ai-to-improve-web-accessibility" 
					 target="_blank" rel="noreferrer" class="item-link">
					Read →
				</a>
			</div>
		</div>

		<div class="content-section">
			<h2 class="section-heading">Speaking & Consulting</h2>
			
			<div class="content-item">
				<div class="item-info">
					<h3 class="item-title">AI-Powered Development Tools</h3>
					<p class="item-meta">Webinar • LangChain, RAG Systems</p>
				</div>
				<a href="mailto:mabry1985@gmail.com?subject=Webinar%20Request" class="item-link">
					Request →
				</a>
			</div>

			<div class="content-item">
				<div class="item-info">
					<h3 class="item-title">Building Accessible AI Applications</h3>
					<p class="item-meta">Workshop • WCAG, Inclusive Design</p>
				</div>
				<a href="mailto:mabry1985@gmail.com?subject=Workshop%20Request" class="item-link">
					Request →
				</a>
			</div>
		</div>
	</div>

	<div class="contact-footer">
		<p class="contact-text">
			Available for technical writing, speaking engagements, and consulting on AI integration.
		</p>
		<a href="mailto:mabry1985@gmail.com" class="contact-link">
			Get in touch
		</a>
	</div>
</div>

<style>
	.content-layout {
		@apply max-w-4xl mx-auto space-y-12 py-8;
	}

	.content-header {
		@apply text-center space-y-4 mb-16;
	}

	.content-title {
		@apply text-3xl md:text-4xl lg:text-5xl font-light text-primary;
		@apply tracking-tight leading-tight;
	}

	.content-intro {
		@apply text-lg md:text-xl leading-relaxed text-gray-300 font-light;
		@apply max-w-2xl mx-auto;
	}

	.content-grid {
		@apply space-y-16;
	}

	.content-section {
		@apply space-y-8;
	}

	.section-heading {
		@apply text-2xl font-medium text-primary mb-8;
		@apply pb-4 border-b border-gray-700;
	}

	.content-item {
		@apply flex flex-col md:flex-row md:items-center md:justify-between;
		@apply gap-4 py-6 border-b border-gray-700 last:border-b-0;
	}

	.item-info {
		@apply space-y-2;
	}

	.item-title {
		@apply text-xl font-medium text-primary;
	}

	.item-meta {
		@apply text-gray-400 font-light;
	}

	.item-link {
		@apply text-primary hover:text-secondary transition-colors duration-300;
		@apply no-underline font-medium;
		@apply flex-shrink-0;
	}

	.contact-footer {
		@apply text-center space-y-6 py-8 mt-16;
	}

	.contact-text {
		@apply text-gray-300 leading-relaxed font-light;
	}

	.contact-link {
		@apply text-2xl font-medium text-primary;
		@apply hover:text-secondary transition-colors duration-300;
		@apply no-underline;
	}

	@screen md {
		.content-item {
			@apply items-center;
		}
	}
</style>

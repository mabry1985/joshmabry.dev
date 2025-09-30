<script>
	import aboutPortrait from '$lib/assets/about-portrait.png';
</script>

<div class="about-layout">
	<div class="about-header">
		<img
			class="about-portrait"
			alt="illustrated portrait of Josh Mabry"
			src={aboutPortrait}
		/>
		<div class="header-content">
			<h1 class="about-title">Hey, I'm Josh</h1>
			<p class="about-location">Portland, Oregon</p>
		</div>
	</div>

	<div class="story-content">
		<div class="story-section">
			<p class="story-text">
				I first stumbled into programming at a maker space, but believed breaking into software required a CS degree — so I let it go. Ten years later, I met students from Epicodus, a local bootcamp. One night I looked it up, found a cohort starting in two weeks, put in my notice the next day, and became a student again.
			</p>

			<p class="story-text">
				At Epicodus, I didn't just learn to code — I learned how to learn. My curiosity took over, and suddenly every topic was open to me. My first role was at an agency building design systems, where I became an advocate for accessibility and learned how much UX shapes product success.
			</p>

			<p class="story-text">
				Then Stable Diffusion dropped, and I dove into AI. When I read <em>Age of Invisible Machines</em> and ChatGPT launched, everything clicked. I explored LangChain and realized natural language wasn't just a feature — it was the new interface for data pipelines and developer workflows.
			</p>

			<p class="story-text">
				For me, AI is UX. I'd always hated watching teammates burn time on redundant tasks, and AI felt like the perfect way to remove friction and make work seamless. The orchestration challenges have tested me more than anything, but also made me a stronger architect.
			</p>
		</div>

		<div class="values-section">
			<h2 class="values-title">What I Believe</h2>
			<p class="philosophy-text">
				I believe in responsible AI: systems that empower rather than replace people. Tools should never deceive users into thinking they're human, and they should be transparent about errors and limitations. AI should challenge us, not dull us.
			</p>
			<p class="philosophy-text">
				My hope is that when someone uses what I've built, they don't even notice the tooling. The UI and AI should fade away, leaving only a sense that the task is done seamlessly, like an extension of their own mind. That's the kind of developer I am, and that's the future I want to help build: responsible, empowering, human-centered AI.
			</p>
		</div>

		<div class="current-focus">
			<h2 class="focus-title">Life in Portland</h2>
			<p class="focus-text">
				I'm originally from Portland, where I still live and love the access to incredible nature, 
				amazing food, and some of the best coffee in the world. When I'm not coding, you'll find me 
				exploring new restaurants with my wife, working on digital art projects, or getting lost in 
				a good game.
			</p>

		</div>

		<div class="connect-section">
			<h2 class="connect-title">Let's Connect</h2>
			<p class="connect-text">
				I love discussing AI integration, developer tools, accessibility, and the future of software development. 
				Always excited to collaborate on projects that make developers' lives better.
			</p>
			<div class="connect-links">

				<a href="https://github.com/mabry1985" target="_blank" rel="noreferrer" class="connect-link">
					GitHub
				</a>
				<a href="https://www.linkedin.com/in/mabry1985/" target="_blank" rel="noreferrer" class="connect-link">
					LinkedIn
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.about-layout {
		@apply max-w-4xl mx-auto py-8 space-y-12;
	}

	.about-header {
		@apply flex flex-col md:flex-row items-center gap-8 text-center md:text-left;
	}

	.about-portrait {
		@apply w-48 h-60 md:w-56 md:h-72 object-cover rounded-xl shadow-lg;
		@apply flex-shrink-0;
	}

	.header-content {
		@apply space-y-2;
	}

	.about-title {
		@apply text-4xl md:text-5xl lg:text-6xl font-light text-primary;
		@apply tracking-tight leading-tight;
	}

	.about-location {
		@apply text-xl text-gray-400 font-light;
	}

	.story-content {
		@apply space-y-16;
	}

	.story-section {
		@apply space-y-6;
	}

	.story-text {
		@apply text-lg leading-relaxed text-gray-300 font-light;
	}

	.values-section, .current-focus, .connect-section {
		@apply space-y-8;
	}

	.values-title, .focus-title, .connect-title {
		@apply text-2xl md:text-3xl font-light text-primary;
	}

	.philosophy-text {
		@apply text-lg leading-relaxed text-gray-300 font-light mb-6;
	}

	.focus-text {
		@apply text-lg leading-relaxed text-gray-300 font-light;
	}

	.connect-text {
		@apply text-lg leading-relaxed text-gray-300 font-light mb-8;
	}

	.connect-links {
		@apply flex flex-col sm:flex-row items-center gap-6;
	}

	.connect-link {
		@apply text-primary hover:text-secondary transition-colors duration-300;
		@apply no-underline font-medium;
	}

	.connect-link.primary {
		@apply text-xl;
	}

	.inline-link {
		@apply text-primary underline hover:no-underline hover:text-secondary;
		@apply transition-colors duration-300;
	}
</style>

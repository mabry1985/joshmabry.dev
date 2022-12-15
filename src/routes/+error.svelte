<script lang="ts">
	import { page } from '$app/stores';
	import error from '$lib/assets/error.png';
</script>

<div class="error-wrapper">
	<h1 class="text-h1-responsive mb-8 w-full">{$page.status}: {$page.error.message}</h1>
	<p class="text-center mb-8">Sorry, we couldn't find the page you were looking for.</p>
	<img class="error-image" src={error} alt="josh mabry as a muppet character" />
</div>

<style>
	.error-wrapper {
		@apply flex flex-col flex-grow;
		@apply justify-center;
		height: calc(100vh - 8rem);
	}

	.error-image {
		@apply self-center rounded-full border-primary border-solid border-2;
	}
</style>

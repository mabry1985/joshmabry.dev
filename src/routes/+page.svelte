<script>
  import portrait from '$lib/assets/portrait.jpg';
	import SocialIcons from '$lib/components/SocialIcons.svelte';
  import "../app.css";
</script>

<div class="w-full h-screen p-4">
  <div class="container flex flex-col lg:flex-row rounded-lg max-w-[1100px] lg:max-h-[650px] relative top-1/2 -translate-y-1/2 lg:mx-auto border-solid border border-primary">
    <img class="portrait p-4 rounded-3xl lg:w-auto max-h-[33rem] self-center m-0 lg:m-12 lg:mr-0" alt="portrait of Josh Mabry" src={portrait} />
    <div class="hero-menu flex flex-col self-center w-full lg:w-1/2 mx-2 lg:mx-12">
      <h1 class="text-primary text-center text-4xl lg:text-7xl font-serif font-light w-full my-4">Josh Mabry</h1>
      <ul class="flex flex-col items-center w-full lg:mt-6 lg:mb-8 font-sans font-light">
        <li class="text-center text-primary text-lg lg:text-2xl my-1">Developer</li>
        <li class="text-center text-primary text-lg lg:text-2xl my-1">Designer</li>
        <li class="text-center text-primary text-lg lg:text-2xl my-1">Artist</li>
      </ul>
      <SocialIcons />
    </div>
  </div>
</div>


<style>
  .portrait {
    border-radius: 1.75rem;
  }
</style>
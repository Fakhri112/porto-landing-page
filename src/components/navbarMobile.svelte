<script lang="ts">
	export let darkMode: boolean;
</script>

<div
	class="w-[calc(100%-2rem)] sm:hidden absolute top-2 flex items-center justify-between"
>
	<div class="dropdown w-full">
		<div tabindex="0" role="button" class="">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h7"
				/></svg
			>
		</div>
		<ul
			tabindex="0"
			class="menu menu-sm dropdown-content z-[1] grid grid-cols-2 gap-2 grid-rows-3
				 shadow bg-base-100 border border-neutral w-[calc(100%+1.2rem)]"
		>
			<a href="#home">Home</a>
			<a href="#about">About</a>
			<a href="#experience">Experience</a>
			<a href="#skills">Skills</a>
			<a href="#project">Project</a>
			<a href="#certificate">Certificate</a>
		</ul>
	</div>
	<button on:click={() => (darkMode = !darkMode)}>
		{#if darkMode}
			<i class="bi bi-brightness-high text-xl mx-[1px]"></i>
		{:else}
			<i class="bi bi-moon-stars-fill text-xl"></i>
		{/if}
	</button>
</div>

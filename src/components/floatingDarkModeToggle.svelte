<script lang="ts">
	export let darkMode: boolean;
</script>

<button
	on:click={() => (darkMode = !darkMode)}
	class="fixed px-2 py-1 rounded-full border border-2 border-neutral bottom-10 right-16 sm:block hidden bg-base-100 z-50"
>
	{#if darkMode}
		<i class="bi bi-brightness-high text-lg mx-[1px]"></i>
	{:else}
		<i class="bi bi-moon-stars-fill"></i>
	{/if}
</button>

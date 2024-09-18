<script lang="ts">
	export let index: number
	export let transparent: boolean
	export let name: string;
	export let description: string | undefined;
	export let link: string | undefined;
	export let github: string | undefined;
	export let image: string | undefined;
	export let tech: string[];
</script>

<swiper-slide class="max-w-96 mb-8" style={`${index != 100 ? ` opacity: 0; animation: fade-in-top 300ms ${index * 70}ms ease-out forwards` : ''} ${transparent ? 'opacity: 0;' : '' }`}>
	<div class={`card sm:h-auto  border border-base-content shadow-xl`}>
		<figure class="relative">
			<img src={image} alt="" />

			<div class="absolute right-2 bottom-2 flex items-start gap-x-2">
				{#if github}
					<a
						target="_blank"
						href={github}
						class="pt-1 px-1 bg-base-100 hover:bg-base-300 border border-neutral rounded"
					>
						<i class="bi bi-github"></i>
					</a>
				{/if}
				{#if link}
					<a
						target="_blank"
						href={link}
						class="bg-base-100 hover:bg-base-300 px-1 pt-1 border border-neutral rounded"
					>
						<i class="bi bi-link-45deg"></i></a
					>
				{/if}
			</div>
		</figure>
		<div class="card-body py-3 px-4 md:h-48 h-[185px]">
			<h2 class="md:card-title font-semibold">{name}</h2>
			<p class="max-sm:text-md">{description}</p>
			<div class="card-actions">
				{#each tech as item}
					<div class="rounded-lg px-2 text-sm border border-neutral ">
						{item}
					</div>
				{/each}
			</div>
		</div>
	</div>
</swiper-slide>

<script lang="ts">
	import { certificateList } from "$lib/certificates";
	$: swiperIndex = 0;
	const onSlideChange = (e: any) => {
		swiperIndex = e.detail[0].activeIndex;
	};
</script>

<div id="certificate-list" class="md:hidden block w-full">
	<swiper-container
		on:swiperslidechange={onSlideChange}
		class="max-w-72 min-w-2 w-[87%]"
		effect="cards"
		grab-cursor="true"
	>
		{#each certificateList as { image }}
			<swiper-slide class="relative">
				<img src={image} alt="" class="border border-black" />
			</swiper-slide>

			<div class="w-full justify-center flex absolute -bottom-10">
				<a
					style={certificateList[swiperIndex].credentialLink != ""
						? ` animation: fade-in-top 300ms ease-out forwards`
						: ` animation: fade-out-bottom 150ms ease-out forwards; pointer-events: none;`}
					on:click={(e) => e.stopImmediatePropagation()}
					target="_blank"
					href={certificateList[swiperIndex].credentialLink}
					class={`btn btn-outline rounded bg-base-100 !h-6 !min-h-6 `}
					>View Credential</a
				>
			</div>
		{/each}
	</swiper-container>
</div>

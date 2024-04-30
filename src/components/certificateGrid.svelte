<script lang="ts">
	import { certificateList } from "$lib/certificates";
	let certifTarget = "";
	const handleChangeCertifTarget = (e: MouseEvent) => {
		e.preventDefault();
		e.stopImmediatePropagation();
		let target = e.currentTarget as HTMLElement;

		if (target.id == "") return;
		if (certifTarget == target.id) {
			return (certifTarget = "");
		}
		return (certifTarget = target.id);
	};

	const handleSurprise = () => {
		let surprise = document.getElementById("surprise") as any;
		surprise?.swiper?.slideNext();
	};
</script>

{#each certificateList as { image, id, credentialLink }, index}
	{#if index == 8}
		<button
			style={certifTarget == ""
				? ` animation: fade-in-top 300ms ease-out ${(index + 1) * 70}ms forwards`
				: ""}
			class="opacity-0 rounded h-full w-full"
			on:click={handleSurprise}
		>
			<swiper-container
				id="surprise"
				class={`w-full h-full rounded ${certifTarget != "" ? "hidden" : ""}`}
				loop="true"
				effect="flip"
			>
				<swiper-slide
					class="border rounded bg-base-content text-base-100 border-black grid place-items-center text-4xl"
					>?</swiper-slide
				>
				<swiper-slide class="border border-black rounded">
					<img src={image} alt="" />
				</swiper-slide>
			</swiper-container>
		</button>
	{:else}
		<button
			style={certifTarget == ""
				? ` animation: fade-in-top 300ms ease-out ${(index + 1) * 70}ms forwards`
				: ""}
			class={`${
				certifTarget == ""
					? `hover:brightness-75 col-span-1 row-span-1 opacity-0`
					: certifTarget != id && certifTarget != ""
						? "hidden"
						: "col-span-3 row-span-3 swing-in-top-fwd "
			} ${index > 3 ? "border border-neutral rounded" : ""} relative`}
			{id}
			on:click={handleChangeCertifTarget}
		>
			<img src={image} alt="certificate" id={index + "a"} class="rounded" />
			{#if credentialLink}
				<div
					class="w-full flex md:justify-center py-2 md:justify-center lg:justify-end absolute lg:right-0 lg:-top-10"
				>
					<a
						on:click={(e) => e.stopImmediatePropagation()}
						target="_blank"
						href={credentialLink}
						class={`btn btn-outline rounded bg-base-100 opacity-0 !h-6 !min-h-6 ${certifTarget == id ? "fade-in-top duration-100" : "hidden"}`}
						>View Credential</a
					>
				</div>
			{/if}
		</button>
	{/if}
{/each}

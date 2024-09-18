<script lang="ts">
	import { onMount } from "svelte";
	import CertificateCard from "../certificateCard.svelte";
	import CertificateGrid from "../certificateGrid.svelte";
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	let certifTarget = "";
	onMount(() => {
		const certificateTitleCaption = gsap.utils.toArray(
			"#certificate-title-caption",
		);
		certificateTitleCaption.forEach((el: any, i: number) => {
			gsap.set(el, {
				x: -50,
				opacity: 0,
				stagger: 0.2,
			});
			ScrollTrigger.create({
				scroller: "#scroll-container",
				trigger: el,
				start: "bottom 80%",
				onEnter: () =>
					gsap.to(el, {
						x: 0,
						opacity: 1,
						stagger: 0.2,
					}),

				onLeaveBack: () =>
					gsap.to(el, {
						x: -50,
						opacity: 0,
						stagger: -0.2,
					}),
			});
		});

		gsap.from("#certificate-list", {
			x: 230,
			opacity: 0,
			scrollTrigger: {
				scroller: "#scroll-container",
				trigger: "#certificate-list",
				start: "top bottom",
				end: "center 60%",
				scrub: true,
			},
		});
		setTimeout(() => {
			ScrollTrigger.refresh()
		}, 1000);
	});
</script>

<div
	class="w-full lg:h-auto lg:mt-[23vh] lg:mb-[10vh] sm:mt-0 sm:mb-[20vh] my-[20vh] bg-base-100"
	id="certificate"
>
	<div class="hero-content rounded-md lg:max-w-[95%] lg:px-10 flex lg:flex-row flex-col w-full py-6">
		<div class="lg:w-[75%] p-2 rounded-md  w-full flex lg:justify-between justify-center">
			<div class="flex flex-col items-center">
				<h1
					class="text-4xl sm:text-5xl font-bold"
					id="certificate-title-caption"
				>
					Certificate
				</h1>
				<p class="py-2" id="certificate-title-caption">
					Where passion meets expertise
				</p>
			</div>
		</div>
		<div id="certificate-list" class="md:hidden block w-full">
			<CertificateCard />
		</div>

		<div class="lg:w-full sm:shadow-xl h-full sm:border md:bg-base-200 border-base-content p-5 rounded-md w-[85%]">

			<div
			id="certificate-list"
			class={`md:grid hidden grid-cols-3 h-full grid-row grid-rows-3 ${certifTarget ? '' : 'gap-4'}`}
		>
			<CertificateGrid bind:certifTarget />
		</div>
		</div>
	</div>
</div>

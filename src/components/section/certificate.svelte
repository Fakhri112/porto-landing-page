<script lang="ts">
	import { onMount } from "svelte";
	import CertificateCard from "../certificateCard.svelte";
	import CertificateGrid from "../certificateGrid.svelte";
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
	});
</script>

<div
	class="hero sm:min-h-[calc(100vh)] sm:h-auto h-[80%] mb-40 sm:mb-0 bg-base-100"
	id="certificate"
>
	<div class="hero-content flex lg:flex-row flex-col w-full h-full py-6">
		<div class="lg:w-[75%] w-full flex lg:justify-between justify-center">
			<div class="flex flex-col items-center">
				<h1 class="text-5xl font-bold" id="certificate-title-caption">
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

		<div
			id="certificate-list"
			class="lg:w-full md:grid hidden w-[85%] gap-4 grid-cols-3 grid-row grid-rows-3"
		>
			<CertificateGrid />
		</div>
	</div>
</div>

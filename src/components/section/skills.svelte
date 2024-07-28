<script lang="ts">
	import { onMount } from "svelte";
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	import { techIcon } from "$lib/techicons";
	import TechIcon from "../techIcon.svelte";

	onMount(() => {
		const skillsHeaderCaption = gsap.utils.toArray("#skills-header-caption");
		skillsHeaderCaption.forEach((el: any, i: number) => {
			gsap.set(el, {
				opacity: 0,
				y: 100,
			});
			ScrollTrigger.create({
				scroller: "#scroll-container",
				trigger: el,
				start: "-100 80%",
				end: "-100 center",
				onLeaveBack: () =>
					gsap.to(el, {
						y: 100,

						opacity: 0,
					}),
				onEnter: () =>
					gsap.to(el, {
						y: 0,
						opacity: 1,
					}),
			});
		});
		const techIcon = gsap.utils.toArray("#tech-icon");
		techIcon.forEach((el: any, i: number) => {
			gsap.set(el, {
				opacity: 0,
				y: 200,
			});
			ScrollTrigger.create({
				scroller: "#scroll-container",
				trigger: el,

				start: "-200 80%",
				end: "-200 center",
				onLeaveBack: () =>
					gsap.to(el, {
						y: 200,
						opacity: 0,
					}),
				onEnter: () =>
					gsap.to(el, {
						y: 0,
						opacity: 1,
					}),
			});
		});
	});
</script>

<div
	class="hero bg-base-200 lg:px-48 h-full sm:h-auto md:pb-16 lg:pb-8 lg:pt-10"
	id="skills"
>
	<div class="hero-content w-full rounded-md  mb-20 flex flex-col w-full">
		<div class="flex flex-col items-center ">
			<h1 class="text-4xl sm:text-5xl font-bold" id="skills-header-caption">
				Skills
			</h1>
			<p class="py-2 text-center" id="skills-header-caption">
				While I'm skilled in these areas, I'm constantly on the lookout for
				exciting new tech to explore.
			</p>
		</div>
		<div
			class="shadow-xl items-center justify-center grid lg:h-[60vh] md:grid-cols-5 grid-cols-4 justify-items-center  border border-base-content bg-base-100  rounded-md lg:w-[100vh] md:w-[100%] w-[95%] gap-y-3 py-3"
		>
			{#each techIcon as { classIcon, name }}
				<TechIcon {name} {classIcon} />
			{/each}
		</div>
	</div>
</div>

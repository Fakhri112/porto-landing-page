<script lang="ts">
	import { onMount } from "svelte";
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

	onMount(() => {
		const experienceTitleHeader = gsap.utils.toArray(
			"#experience-title-header",
		);
		experienceTitleHeader.forEach((el: any, i: number) => {
			gsap.set(el, {
				opacity: 0,
				y: 100,
			});
			ScrollTrigger.create({
				scroller: "#scroll-container",
				trigger: el,
				start: "-100 80%",
				end: "-50 center",
				onLeaveBack: () =>
					gsap.to(el, {
						opacity: 0,
						y: 100,
					}),
				onEnter: () =>
					gsap.to(el, {
						opacity: 1,
						y: 0,
					}),
			});
		});

		gsap.from("#experience-content", {
			opacity: 0,
			y: 300,
			scrollTrigger: {
				scroller: "#scroll-container",
				trigger: "#experience-content",
				toggleActions: "play none none reset",
				start: "-300 bottom",
				end: "-200 center",
				scrub: true,
			},
		});
	});
</script>

<div class="hero bg-base-200" id="experience">
	<div class="hero-content mt-20 mb-10 sm:my-20 flex flex-col">
		<div class="flex items-center flex-col">
			<h1 class="text-5xl font-bold" id="experience-title-header">
				Experience
			</h1>
			<p class="py-5" id="experience-title-header">
				Not much, but i think it's worth it
			</p>
		</div>
		<div class="flex flex-col w-full lg:flex-row gap-2" id="experience-content">
			<div class="bg-base-100 border-slate-100 border shadow-xl rounded p-2">
				<p class="font-semibold text-lg">
					Studi Independen: Web Development (Wordpress)
				</p>
				<div>
					<p>Zenius</p>
					<enhanced:img src="$lib/image/zenius.webp" class="w-16" />
				</div>
				<p
					class="text-sm px-2 py-1 mb-2 rounded w-60 mt-2 border bg-base-100 border-neutral-content border-2"
				>
					February 2022 - July 2022
				</p>
				<p></p>
				<ol class="list-decimal px-7 text-justify">
					<li>Learn about critical thinking, logic, and language</li>
					<li>Learn about philosophy, the universe, and human evolution</li>
					<li>
						Learn about WordPress and how to build e-commerce websites with
						WordPress
					</li>
					<li>Learn about cPanel and web hosting</li>
				</ol>
			</div>
			<div class="bg-base-100 border-slate-100 border shadow-xl rounded p-2">
				<p class="font-semibold text-lg">Fullstack Developer Internship</p>
				<div>
					<p>PT Baracipta Esa Engineering</p>
					<enhanced:img src="$lib/image/beecons.jpg" class="w-16" />
				</div>
				<p
					class="text-sm px-2 py-1 mb-2 rounded w-60 mt-2 border bg-base-100 border-neutral-content border-2"
				>
					Aug 2022 - Dec 2022
				</p>
				<ol class="list-decimal px-7 text-justify">
					<li>Build learning management system platform (stufast.id)</li>
					<li>
						Implement UI/UX mockups for static pages (e.g., cart & checkout,
						course detail, etc.)
					</li>
					<li>
						Integrate APIs to the admin page for course and profile management
					</li>
					<li>
						Create HTML emails (e.g., email verification, password reset,
						invoice)
					</li>
				</ol>
			</div>
		</div>
	</div>
</div>

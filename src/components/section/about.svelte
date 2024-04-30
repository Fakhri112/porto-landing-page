<script lang="ts">
	import { onMount } from "svelte";
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

	onMount(() => {
		const profilePic = gsap.utils.toArray("#profile-pic");
		profilePic.forEach((el: any) => {
			gsap.from(el, {
				x: 230,
				opacity: 0,
				scrollTrigger: {
					scroller: "#scroll-container",
					trigger: el,
					start: "top bottom",
					end: "center center",
					scrub: true,
				},
			});
		});

		const aboutme = gsap.utils.toArray("#about-me-content");
		aboutme.forEach((el: any, i: number) => {
			gsap.set(el, {
				opacity: 0,
				x: -200,
			});
			ScrollTrigger.create({
				scroller: "#scroll-container",
				trigger: el,
				start: "top 80%",
				end: "center center",
				onLeaveBack: () =>
					gsap.to(el, {
						opacity: 0,
						x: -200,
					}),
				onEnter: () =>
					gsap.to(el, {
						opacity: 1,
						x: 0,
					}),
			});
		});
	});
</script>

<div class="hero md:h-full h-auto my-9 pb-2" id="about">
	<div class="hero-content">
		<div class="text-justify md:pe-9">
			<h1
				class="text-5xl font-bold text-center md:text-start"
				id="about-me-content"
			>
				About Me
			</h1>
			<div class="block md:hidden flex justify-center mt-4">
				<enhanced:img
					id="profile-pic"
					src="$lib/image/me.jpg"
					class="max-w-[10em] w-full min-w-[10em] rounded-lg border border-neutral border-2"
					alt="An alt text"
				/>
			</div>
			<p class="py-4 text-center md:text-start" id="about-me-content">
				Open to front-end and web development positions (skills detailed below).
			</p>
			<p class="py-4" id="about-me-content">
				I'm a web development enthusiast, excited to learn more about the
				various tech stacks available. While front-end development, particularly
				React, piques my interest the most, I'm always open to exploring other
				technologies. The question of front-end or back-end development? I love
				both!
			</p>
			<p class="" id="about-me-content">
				As web development technology has rapidly evolved over time, I, as a
				fast learner and self-learner, am passionate about embracing new
				advancements. I am always eager to expand my skillset by creating
				diverse projects using cutting-edge technologies. Experience and
				adaptation with latest technology is really important for me.
			</p>
		</div>
		<div class="md:block hidden">
			<enhanced:img
				id="profile-pic"
				src="$lib/image/me.jpg"
				class="min-w-[15em] w-full max-w-[60em] border rounded lg border-neutral border-2"
				alt="An alt text"
			/>
		</div>
	</div>
</div>

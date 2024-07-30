<script lang="ts">
	import { onMount } from "svelte";
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	import unesa from "$lib/image/unesa.jfif";

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

<div class="hero h-auto md:min-h-full my-9" id="about">
	<div class="hero-content sm:max-w-[95%] sm:shadow-xl rounded-md sm:border border-base-content  ">
		<div class="text-justify md:pe-9  rounded-md border-base-content sm:p-5">
			<h1
				class="text-4xl sm:text-5xl font-bold text-center md:text-start"
				id="about-me-content"
			>
				About Me
			</h1>
			<div class="block md:hidden flex justify-center mt-4">
				<enhanced:img
					id="profile-pic"
					src="$lib/image/me.jpg"
					class="max-w-[10em] w-full min-w-[10em] lg:max-w-[10vh] rounded-lg "
					alt="An alt text"
				/>
			</div>
			<p class="py-4 text-center md:text-start" id="about-me-content">
				Open to front-end and web development positions (skills detailed below).
			</p>
			<p class="py-4" id="about-me-content">
				I'm a web development enthusiast, excited to learn more about the
				various tech stacks available. While front-end development piques my interest the most, I'm always open to exploring other
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
			<div class="mt-6" id="about-me-content">
				<p
					class="text-xl mb-2 font-semibold border border-transparent border-b-neutral"
				>
					Education
				</p>
				<div class="flex gap-x-2 items-center">
					<img src={unesa} alt="" class="rounded-sm h-20 sm:h-16 self-start" />
					<div class="w-full">
						<div class="w-full flex justify-between">
							<p class="font-semibold max-sm:text-sm">
								Universitas Negeri Surabaya
							</p>
							<span class="sm:block hidden max-sm:text-sm">(2019 - 2023)</span>
						</div>
						<span class="block sm:hidden max-sm:text-sm">(2019 - 2023)</span>
						<p class="max-sm:text-sm">S1 Teknik Informatika</p>
						<p class="max-sm:text-sm">GPA: 3.75</p>
					</div>
				</div>
			</div>
		</div>
		<div class="md:block hidden">
			<enhanced:img
				id="profile-pic"
				src="$lib/image/me.jpg"
				class="min-w-[15em] w-full max-w-[60em] border rounded lg border-base-content shadow-xl"
				alt="An alt text"
			/>
		</div>
	</div>
</div>

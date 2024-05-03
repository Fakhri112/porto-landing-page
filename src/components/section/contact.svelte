<script lang="ts">
	import { onMount } from "svelte";
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

	onMount(() => {
		gsap.set("#contact-list-content", {
			opacity: 0,
			y: 100,
		});
		ScrollTrigger.create({
			scroller: "#scroll-container",
			trigger: "#contact-list-content",
			start: "-100 80%",
			end: "-100 center",
			onLeaveBack: () =>
				gsap.to("#contact-list-content", {
					y: 100,

					opacity: 0,
				}),
			onEnter: () =>
				gsap.to("#contact-list-content", {
					y: 0,
					opacity: 1,
				}),
		});
	});
</script>

<div class="hero h-full bg-accent-content text-slate-200 relative">
	<div class="hero-content w-full" id="contact-list-content">
		<div class="w-full">
			<div class="flex flex-col items-center text-center">
				<h1 class="sm:text-5xl text-3xl font-bold">Reach Me, Hit Me</h1>
				<p class="py-2">
					Think i'd be a great fit for your next project? I think so too! Let's
					make it happen.
				</p>

				<div class="mt-3 gap-2 sm:gap-3 flex justify-center w-full">
					<a
						target="_blank"
						href="https://www.instagram.com/fakhriee_ali/"
						class="btn rounded-md border-slate-100 sm:border-transparent hover:border hover:border-slate-100 px-3 sm:px-4"
					>
						<i class="bi bi-instagram text-xl"></i>
					</a>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/muhammad-fakhri-ali-as-shuffi-83952a246/"
						class="btn rounded-md border-slate-100 sm:border-transparent hover:border hover:border-slate-100 px-3 sm:px-4"
					>
						<i class="bi bi-linkedin text-xl"></i>
					</a>
					<a
						target="_blank"
						href="https://github.com/Fakhri112/"
						class="btn rounded-md border-slate-100 sm:border-transparent hover:border hover:border-slate-100 px-3 sm:px-4"
					>
						<i class="bi bi-github text-xl"></i>
					</a>
					<a
						target="_blank"
						href="https://wa.me/628970871291"
						class="btn rounded-md border-slate-100 sm:border-transparent hover:border hover:border-slate-100 px-3 sm:px-4"
					>
						<i class="bi bi-whatsapp text-xl"></i>
					</a>
					<a
						target="_blank"
						href="mailto:fakhriali781@gmail.com"
						class="btn rounded-md border-slate-100 sm:border-transparent hover:border hover:border-slate-100 px-3 sm:px-4"
					>
						<i class="bi bi-envelope text-xl"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
	<p class="absolute bottom-4 text-center text-[13.5px] sm:text-lg">
		Design and code with ❤️ by <b class=""> Fakhri Ali</b>
	</p>
</div>

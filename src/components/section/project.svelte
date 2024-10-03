<script lang="ts">
	import { onMount } from "svelte";
	import SwiperProject from "../swiperProject.svelte";
	import GridProject from "../gridProject.svelte";
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	import { clickedToggleWebProject } from "../state/state";
	$: innerWidth = 0
	let webProject = true;

	onMount(() => {
		gsap.set("#project-title-caption", {
			opacity: 0,
			x: 200,
		});
		ScrollTrigger.create({
			scroller: "#scroll-container",
			trigger: "#project-title-caption",
			start: "bottom 80%",
			onLeaveBack: () =>{
				gsap.to("#project-title-caption", {
					x: 200,
					opacity: 0,
				})
			},
				
			onEnter: () =>
				gsap.to("#project-title-caption", {
					x: 0,
					opacity: 1,
				}),
		});

		gsap.set("#toggle-web-api", {
			x: -200,
			opacity: 0,
		});
		ScrollTrigger.create({
			scroller: "#scroll-container",
			trigger: "#toggle-web-api",
			start: "botton 80%",
			onLeaveBack: () =>
				gsap.to("#toggle-web-api", {
					x: -200,
					opacity: 0,
				}),
			onEnter: () =>
				gsap.to("#toggle-web-api", {
					x: 0,
					opacity: 1,
				}),
		});
	});

	

	const handleToggle = (bool: boolean) => {
		if (!$clickedToggleWebProject) clickedToggleWebProject.set(true)
		webProject = bool
	}

</script>
<svelte:window bind:innerWidth />
<div id="project" class="flex lg:mx-7 flex-col rounded-md lg:pt-11 mt-5  md:mb-20 justify-center items-center">
	<div class="hero rounded-t-md  border-b-0 bg-base-100 sm:mb-0 mb-5 pt-4" >
		<div class="px-10 flex flex-col w-full">
			<div
				class="w-full flex md:justify-between md:flex-row flex-col items-center"
			>
				<div
					class="flex flex-col text-center md:text-start"
					id="project-title-caption"
				>
					<h1 class="text-4xl sm:text-5xl font-bold">Project</h1>
					<p class="py-2">
						Project speak louder than just including your skills to CV
					</p>
				</div>
				<div id="toggle-web-api">
					<button
						class={`btn btn-outline rounded ${webProject ? "btn-active" : ""}`}
						on:click={() => handleToggle(true)}>Web</button
					>
					<button
						class={`btn btn-outline rounded ${!webProject ? "btn-active" : ""}`}
						on:click={() =>  handleToggle(false)}>API</button
					>
				</div>
			</div>
		</div>
	</div>
	{#if innerWidth > 1719}
	<GridProject {webProject}/>
	{:else}
	<SwiperProject {webProject} {innerWidth} />
	{/if}
	

</div>

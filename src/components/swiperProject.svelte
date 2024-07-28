<script lang="ts">
	import { apiProjectList, webProjectList } from "$lib/projects";
	import { onMount } from "svelte";
	import ProjectCard from "./projectCard.svelte";
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

	export let webProject = true;
	if (typeof window !== "undefined") {
		gsap.registerPlugin(ScrollTrigger);
	}

	onMount(() => {
		gsap.set("#swiper-container", {
			y: -50,
			opacity: 0,
			stagger: 0.2,
		});
		ScrollTrigger.create({
			scroller: "#scroll-container",
			trigger: "#swiper-container",
			start: "100 80%",

			onEnter: () =>
				gsap.to("#swiper-container", {
					y: 0,
					opacity: 1,
					stagger: 0.2,
				}),

			onLeaveBack: () =>
				gsap.to("#swiper-container", {
					y: 50,
					opacity: 0,
					stagger: -0.2,
				}),
		});
	});
	$: innerWidth = 0;
	$: innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<div id="swiper-container" class="mt-2 px-2 w-[97%]">
	{#if webProject}
		<swiper-container
			id="swiper"
			class="fade-in-top px-2"
			slides-per-view={`${innerWidth < 1720 && innerWidth > 1070 ? "4" : innerWidth < 1070 && innerWidth > 855 ? "3" : innerWidth <= 855 && innerWidth > 570 ? "2" : innerWidth <= 570 ? "1" : "5"}`}
			space-between="10"
			grab-cursor="true"
			speed="2000"
			pagination="true"
			autoplay-delay="300"
			autoplay-disable-on-interaction="false"
			autoplay-pause-on-mouse-enter="true"
			loop="true"
		>
			{#each webProjectList as { name, description, github, image, link, tech }}
				<ProjectCard {name} {description} {github} {image} {link} {tech} />
			{/each}
		</swiper-container>
	{:else}
		<swiper-container
			id="swiper"
			class=" w-full fade-in-top"
			slides-per-view={`${innerWidth < 1720 && innerWidth > 1070 ? "4" : innerWidth < 1070 && innerWidth > 855 ? "3" : innerWidth <= 855 && innerWidth > 570 ? "2" : innerWidth <= 570 ? "1" : "5"}`}
			space-between="10"
			grab-cursor="true"
			speed="2000"
			pagination="true"
			autoplay-delay="500"
			autoplay-disable-on-interaction="false"
			autoplay-pause-on-mouse-enter="true"
			loop="true"
		>
			{#each apiProjectList as { name, description, github, image, tech }}
				<ProjectCard
					{name}
					{description}
					{github}
					{image}
					link={undefined}
					{tech}
				/>
			{/each}
		</swiper-container>
	{/if}
</div>

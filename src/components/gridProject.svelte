<script lang="ts">
	import { apiProjectList, webProjectList } from "$lib/projects";
	import { onMount } from "svelte";
	import ProjectCard from "./projectCard.svelte";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import gsap from "gsap";
    export let webProject: boolean 
    let focus = false
    onMount(() => {
		gsap.set("#grid-project", {
			opacity: 0,
			y: -30,
		});
		ScrollTrigger.create({
			scroller: "#scroll-container",
			trigger: "#grid-project",
			start: "100 80%",
			onEnter: () => {
				gsap.to("#grid-project", {
					y: 30,
					opacity: 1,
					stagger: 0.2,
				})
				focus = true
				setTimeout(() => {
					ScrollTrigger.refresh()
				}, 2000);
			},
			onLeaveBack: () =>{
				gsap.to("#grid-project", {
					y: -30,
					opacity: 0,
					stagger: -0.2,
				})
				setTimeout(() => {
					focus = false
				}, 250);
			}
				
				
		});
	});

    $: webProject, setTimeout(() => {
        ScrollTrigger.refresh()
    }, 500);


</script>

<div id="grid-project" class="grid gap-x-8" style="grid-template-columns: repeat(4, minmax(0, 1fr));">
		{#if focus}
		{#if webProject}
		{#each webProjectList as { name, link, description, github, image, tech }, i}
				<ProjectCard
					{name}
					{description}
					{github}
					{image}
					link={link}
					{tech}
					index={i}
					transparent={false}
				/>
			{/each}
		{:else }
				{#each apiProjectList as { name, description, github, image, tech }, i}
				<ProjectCard
					{name}
					{description}
					{github}
					{image}
					link={undefined}
					{tech}
					index={i}
					transparent={false}
				/>
			{/each}
		{/if}
		{:else}
		{#if webProject}
		{#each webProjectList as { name, link, description, github, image, tech }, i}
				<ProjectCard
					{name}
					{description}
					{github}
					{image}
					link={link}
					{tech}
					index={i}
					transparent={true}
				/>
			{/each}
		{:else }
				{#each apiProjectList as { name, description, github, image, tech }, i}
				<ProjectCard
					{name}
					{description}
					{github}
					{image}
					link={undefined}
					{tech}
					index={i}
					transparent={true}
				/>
			{/each}
		{/if}
		{/if}	
</div>
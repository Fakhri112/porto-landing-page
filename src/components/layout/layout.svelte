<script lang="ts">
	import { onMount } from "svelte";
	import { register } from "swiper/element/bundle";
	import "swiper/css";
	import loading from "$lib/image/loading.gif"
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	import FloatingDarkModeToggle from "../floatingDarkModeToggle.svelte";
	import NavbarDesktop from "../navbarDesktop.svelte";
	import NavbarMobile from "../navbarMobile.svelte";

	let darkMode = false;
	let bodyElement: HTMLElement;
	let mounted = false

	if (typeof window !== "undefined") {
		gsap.registerPlugin(ScrollTrigger);
	}

	onMount(() => {
		bodyElement = document.querySelector("html") as HTMLElement;
		register();
		ScrollTrigger.refresh();
		setTimeout(() => {
			mounted = true
		}, 1000);
	});

	$: if (bodyElement) {
		bodyElement.setAttribute("data-theme", darkMode ? "forest" : "cupcake");
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
	/>
</svelte:head>

{#if mounted}
	<div class="h-screen p-4 md:pt-8 pt-10 overflow-auto flex flex-col relative fade-in-left">
		<NavbarDesktop />
		<NavbarMobile bind:darkMode />
		<div
			id="scroll-container"
			class="overflow-y-auto overflow-x-hidden h-full relative border border-2 border-neutral scroll-smooth"
		>
			<FloatingDarkModeToggle bind:darkMode />
			<slot></slot>
		</div>
	</div>
	{:else}
	<div class="h-screen grid place-items-center">
		<img src={loading} alt="">
	</div>
{/if}

<script>
	import Layout from "../components/layout/layout.svelte";
	import Home from "../components/section/home.svelte";
	import AboutMe from "../components/section/about.svelte";
	import Experience from "../components/section/experience.svelte";
	import Skills from "../components/section/skills.svelte";
	import Project from "../components/section/project.svelte";
	import Certificate from "../components/section/certificate.svelte";
	import Contact from "../components/section/contact.svelte";
	import "../app.css";
</script>

<Layout>
	<Home />
	<AboutMe />
	<Experience />
	<Skills />
	<Project />
	<Certificate />
	<Contact />
</Layout>

<script>
	import cv from "$lib/cv_fakhri.pdf";
	import cv_id from "$lib/cv_fakhri_id.pdf";
</script>

<div class="hero h-full w-full bg-base-200" id="home">
	<div class="px-4">
		<p class="text-xl md:text-2xl md:text-start">Hello 👋 my name is</p>
		<h1 class=" text-3xl md:text-5xl md:text-start font-bold">
			Muhammad Fakhri Ali As Shuffi
		</h1>
		<p class="py-6 md:text-start p-1">
			Curious explorer of web development, having exceptional experiences with
			Frontend Development
		</p>
		<div class="flex justify-between items-center mb-4">
		  <p class="font-semibold ">Download CV</p>	
		  <div class="sm:flex hidden gap-x-3">
			<a href={cv} class="btn btn-outline rounded-md">EN</a>
			<a href={cv_id} class="btn btn-outline rounded-md">ID</a>
		  </div>
		</div>
		<hr class="border-neutral hidden sm:block hidden">
		<div class="flex sm:hidden gap-x-3 mt-3">
			<a href={cv} class="btn btn-outline rounded-md">EN</a>
			<a href={cv_id} class="btn btn-outline rounded-md">ID</a>
		</div>
	</div>
</div>

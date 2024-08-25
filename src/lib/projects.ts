// Import project images (assuming they are in the `public` directory)
import yahoot from "$lib/image/project-img/yahoot.png";
import bluenote from "$lib/image/project-img/bluenote.png";
import stufast from "$lib/image/project-img/stufast.png";
import lezhealty from "$lib/image/project-img/lezhealty.png";
import landingPage from "$lib/image/project-img/landing-page.png";
import spaceTourism from "$lib/image/project-img/space-tourism.png";
import markdownPreviewer from "$lib/image/project-img/markdown-previewer.png";
import drumMachine from "$lib/image/project-img/drum-machine.png";
import calculator from "$lib/image/project-img/calculator.png";
import pomodoroClock from "$lib/image/project-img/pomodoro-clock.png";
import exerciseTracker from "$lib/image/project-img/api/exercise-tracker.png";
import fileMetadata from "$lib/image/project-img/api/file-metadata.png";
import shortlink from "$lib/image/project-img/api/shortlink.png";
import sudokuSolver from "$lib/image/project-img/api/sudoku-solver.png";
import personalLibrary from "$lib/image/project-img/api/personal-library.png";
import issueTracker from "$lib/image/project-img/api/issue-tracker.png";
import cafeteria from "$lib/image/project-img/api/cafeteria.png";

let webProjectList = [
	{
		name: "Pomodoro Clock",
		description: "A FreeCodeCamp Front-End Development Project",
		link: "https://fakhri112.github.io/fc-pomodoro-clock/",
		github: "https://github.com/Fakhri112/fc-pomodoro-clock",
		image: pomodoroClock,
		tech: ["React", "Typescript", "Vite", "Tailwind"],
	},
	{
		name: "Yahoot!",
		description: "A live quiz interactive game like kahoot! and quizzes",
		link: "https://yahootgame.whf.bz/",
		github: "https://github.com/Fakhri112/yahoot",
		image: yahoot,
		tech: ["Laravel", "React", "Tailwind", "Peerjs", "PostgreSQL"],
	},
	{
		name: "BlueNote",
		description: "A ColorNote Desktop Clone",
		link: "https://bluenote.vercel.app",
		github: "https://github.com/Fakhri112/bluenote",
		image: bluenote,
		tech: ["Next.js", "Firebase", "Bootstrap"],
	},
	{
		name: "Stufast.id",
		description:
			"Learning Management System from Fullstack Developer Internship",
		link: "https://stufast.id",
		image: stufast,
		tech: ["Codeigniter 4", "Bootstrap", "jQuery", "MySQL"],
	},
	{
		name: "Lezhealty",
		description: "Web blog project for Web Programming Subject",
		link: "https://lezhealty.42web.io",
		github: "https://github.com/Fakhri112/lezhealty",
		image: lezhealty,
		tech: ["Pure PHP", "Bootstrap", "jQuery", "MySQL"],
	},
	{
		name: "Portfolio Landing Page",
		description: "You're watching my portfolio page right now",
		link: "https://fakhriali.vercel.app",
		github: "https://github.com/Fakhri112/porto-landing-page",
		image: landingPage,
		tech: ["Svelte", "TypeScript", "Tailwind", "Daisy UI"],
	},
	{
		name: "Space Tourism Website",
		description: "A landing page challenge provided by frontendmentor.io",
		link: "https://fakhri112.github.io/space-tourism-website",
		github: "https://github.com/Fakhri112/space-tourism-website",
		image: spaceTourism,
		tech: ["Vue 3", "Vue Router", "TailwindCSS"],
	},
	{
		name: "Markdown Previewer",
		description: "A FreeCodeCamp Front-End Development Project",
		link: "https://fakhri112.github.io/fc-markdown-previewer/",
		github: "https://github.com/Fakhri112/fc-markdown-previewer",
		image: markdownPreviewer,
		tech: ["React", "Typescript", "Vite", "Tailwind"],
	},
	{
		name: "Drum Machine",
		description: "A FreeCodeCamp Front-End Development Project",
		link: "https://fakhri112.github.io/fc-drum-machine/",
		github: "https://github.com/Fakhri112/fc-drum-machine",
		image: drumMachine,
		tech: ["React", "Typescript", "Vite", "Tailwind"],
	},
	{
		name: "Calculator",
		description: "A FreeCodeCamp Front-End Development Project",
		link: "https://fakhri112.github.io/fc-calculator/",
		github: "https://github.com/Fakhri112/fc-calculator",
		image: calculator,
		tech: ["React", "Typescript", "Vite", "Tailwind"],
	},
];

let apiProjectList = [
	{
		name: "Exercise Tracker",
		description: "A FreeCodeCamp Back-End Development Project",
		github: "https://github.com/Fakhri112/freecodecamp-backend-project",
		image: exerciseTracker,
		tech: ["Node.js", "Express.js", "MongoDB"],
	},
	{
		name: "Cafeteria Management",
		description: "Backend API to Manage Cafeteria with Different User Role",
		github: "https://github.com/Fakhri112/cafeteria-api",
		image: cafeteria,
		tech: ["Node.js", "Nest.js", "TypeORM", "PostgreSQL"],
	},
	{
		name: "URL Shortener",
		description: "A FreeCodeCamp Back-End Development Project",
		github: "https://github.com/Fakhri112/freecodecamp-backend-project",
		image: shortlink,
		tech: ["Node.js", "Express.js", "MongoDB"],
	},
	{
		name: "Sudoku Solver",
		description: "A FreeCodeCamp Quality Assurance Development Project",
		github: "https://github.com/Fakhri112/freecodecamp-qa-sudoku-solver",
		image: sudokuSolver,
		tech: ["Node.js", "Express.js", "Chai", "Mocca"],
	},
	{
		name: "Personal Library",
		description: "A FreeCodeCamp Quality Assurance Development Project",
		github: "https://github.com/Fakhri112/freecodecamp-qa-personal-library",
		image: personalLibrary,
		tech: ["Node.js", "Express.js", "MongoDB", "Chai", "Mocca"],
	},
	{
		name: "Issue tracker",
		description: "A FreeCodeCamp Quality Assurance Development Project",
		github: "https://github.com/Fakhri112/freecodecamp-qa-issue-tracker",
		image: issueTracker,
		tech: ["Node.js", "Express.js", "MongoDB", "Chai", "Mocca"],
	},
];

export { webProjectList, apiProjectList };

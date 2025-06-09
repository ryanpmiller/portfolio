export interface Project {
	id: number;
	title: string;
	description: string;
	fullDescription: string;
	image: string;
	technologies: string[];
	githubUrl: string;
	liveUrl: string;
	category: 'web' | 'mobile' | 'fullstack';
}

export const projects: Project[] = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		description:
			'A modern e-commerce platform with shopping cart, payment integration, and admin dashboard.',
		fullDescription:
			'A comprehensive e-commerce solution built with React and TypeScript. Features include user authentication, product catalog, shopping cart functionality, Stripe payment integration, order management, and an admin dashboard for inventory management. The application is fully responsive and optimized for performance.',
		image: '/api/placeholder/400/250',
		technologies: [
			'React',
			'TypeScript',
			'Material-UI',
			'Node.js',
			'MongoDB',
		],
		githubUrl: 'https://github.com/example/ecommerce',
		liveUrl: 'https://example-ecommerce.vercel.app',
		category: 'fullstack',
	},
	{
		id: 2,
		title: 'Task Management App',
		description:
			'A collaborative task management application with real-time updates and team features.',
		fullDescription:
			'A real-time task management application that helps teams organize and track their work. Built with React and Socket.io for real-time collaboration. Features include drag-and-drop task boards, team collaboration, file attachments, due date notifications, and project analytics.',
		image: '/api/placeholder/400/250',
		technologies: ['React', 'Socket.io', 'Express.js', 'PostgreSQL'],
		githubUrl: 'https://github.com/example/taskmanager',
		liveUrl: 'https://example-tasks.netlify.app',
		category: 'web',
	},
	{
		id: 3,
		title: 'Weather Dashboard',
		description:
			'A beautiful weather application with location-based forecasts and interactive maps.',
		fullDescription:
			'An elegant weather dashboard that provides current weather conditions and forecasts for any location. Features include geolocation support, interactive weather maps, hourly and weekly forecasts, weather alerts, and beautiful data visualizations using Chart.js.',
		image: '/api/placeholder/400/250',
		technologies: ['React', 'Chart.js', 'OpenWeather API', 'Mapbox'],
		githubUrl: 'https://github.com/example/weather',
		liveUrl: 'https://example-weather.herokuapp.com',
		category: 'web',
	},
	{
		id: 4,
		title: 'Social Media Dashboard',
		description:
			'A comprehensive social media analytics dashboard with data visualization.',
		fullDescription:
			'A powerful analytics dashboard for social media management. Track engagement metrics, analyze audience demographics, schedule posts, and monitor brand mentions across multiple platforms. Built with modern React patterns and beautiful data visualizations.',
		image: '/api/placeholder/400/250',
		technologies: ['React', 'D3.js', 'Firebase', 'Material-UI'],
		githubUrl: 'https://github.com/example/social-dashboard',
		liveUrl: 'https://example-social.firebase.app',
		category: 'web',
	},
	{
		id: 5,
		title: 'Recipe Finder',
		description:
			'A recipe discovery app with search, filters, and meal planning features.',
		fullDescription:
			'A comprehensive recipe application that helps users discover, save, and organize recipes. Features include advanced search and filtering, nutritional information, meal planning, shopping list generation, and recipe sharing with the community.',
		image: '/api/placeholder/400/250',
		technologies: ['React Native', 'Redux', 'Firebase', 'Spoonacular API'],
		githubUrl: 'https://github.com/example/recipe-finder',
		liveUrl: 'https://play.google.com/store/apps/example',
		category: 'mobile',
	},
	{
		id: 6,
		title: 'Portfolio Website',
		description:
			'A responsive portfolio website showcasing projects and skills.',
		fullDescription:
			'A modern, responsive portfolio website built with React and TypeScript. Features include smooth animations, dark/light mode toggle, project showcase, contact forms, and optimized performance. The site is fully accessible and SEO-optimized.',
		image: '/api/placeholder/400/250',
		technologies: ['React', 'TypeScript', 'Material-UI', 'Framer Motion'],
		githubUrl: 'https://github.com/example/portfolio',
		liveUrl: 'https://example-portfolio.com',
		category: 'web',
	},
];

export const categories = [
	{ label: 'All', value: 'all' },
	{ label: 'Web Apps', value: 'web' },
	{ label: 'Mobile Apps', value: 'mobile' },
	{ label: 'Full Stack', value: 'fullstack' },
];

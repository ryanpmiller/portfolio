import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from './test-utils';
import App from './App';

// Mock Material-UI useMediaQuery hook
jest.mock('@mui/material/useMediaQuery', () => ({
	__esModule: true,
	default: jest.fn(() => false), // Always return false for consistent testing (light mode)
}));

// Mock Intersection Observer API for framer-motion whileInView animations
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
	observe: () => null,
	unobserve: () => null,
	disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;
window.IntersectionObserver.prototype.observe = jest.fn();
window.IntersectionObserver.prototype.unobserve = jest.fn();
window.IntersectionObserver.prototype.disconnect = jest.fn();

// Mock framer-motion with proper prop filtering
jest.mock('framer-motion', () => {
	// List of motion-specific props that should be filtered out
	const motionProps = [
		'initial',
		'animate',
		'exit',
		'whileHover',
		'whileTap',
		'whileInView',
		'whileFocus',
		'whileDrag',
		'drag',
		'dragConstraints',
		'dragElastic',
		'transition',
		'variants',
		'viewport',
		'onAnimationStart',
		'onAnimationComplete',
	];

	// Helper to filter out motion props only
	const filterProps = (props: any) => {
		return Object.keys(props)
			.filter(key => !motionProps.includes(key))
			.reduce((obj, key) => {
				obj[key] = props[key];
				return obj;
			}, {} as any);
	};

	const createMotionComponent =
		(elementType: string) =>
		({ children, ...props }: any) => {
			const filteredProps = filterProps(props);
			return React.createElement(elementType, filteredProps, children);
		};

	return {
		motion: {
			div: createMotionComponent('div'),
			section: createMotionComponent('section'),
			footer: createMotionComponent('footer'),
			button: createMotionComponent('button'),
			h1: createMotionComponent('h1'),
			p: createMotionComponent('p'),
			span: createMotionComponent('span'),
		},
		AnimatePresence: ({ children }: any) => children,
	};
});

// Mock the components to avoid complex rendering in unit tests
jest.mock('./pages/Home/Home', () => {
	return function MockHome() {
		return <div data-testid="home-page">Home Page</div>;
	};
});

jest.mock('./pages/About/About', () => {
	return function MockAbout() {
		return <div data-testid="about-page">About Page</div>;
	};
});

jest.mock('./pages/Projects/Projects', () => {
	return function MockProjects() {
		return <div data-testid="projects-page">Projects Page</div>;
	};
});

jest.mock('./pages/Contact/Contact', () => {
	return function MockContact() {
		return <div data-testid="contact-page">Contact Page</div>;
	};
});

describe('App Component', () => {
	test('renders without crashing', () => {
		renderWithRouter(<App />);
	});

	test('renders header and footer', () => {
		renderWithRouter(<App />);

		// Check if header is present (Ryan Miller text should be in header)
		expect(screen.getAllByText('Ryan Miller')[0]).toBeInTheDocument();

		// Check if footer is present (copyright text should be in footer)
		expect(
			screen.getByText(/© \d{4} Ryan Miller\. All rights reserved\./)
		).toBeInTheDocument();
	});

	test('renders home page by default', () => {
		renderWithRouter(<App />);
		expect(screen.getByTestId('home-page')).toBeInTheDocument();
	});
});

export {};

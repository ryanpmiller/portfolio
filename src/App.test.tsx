import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from './test-utils';
import App from './App';

// Mock Material-UI useMediaQuery hook
jest.mock('@mui/material/useMediaQuery', () => ({
	__esModule: true,
	default: jest.fn(() => false), // Always return false for consistent testing (light mode)
}));

// Mock framer-motion to avoid media query issues
jest.mock('framer-motion', () => ({
	motion: {
		div: ({
			children,
			whileHover: _whileHover,
			whileTap: _whileTap,
			initial: _initial,
			animate: _animate,
			transition: _transition,
			variants: _variants,
			...props
		}: any) => <div {...props}>{children}</div>,
		section: ({
			children,
			whileHover: _whileHover,
			whileTap: _whileTap,
			initial: _initial,
			animate: _animate,
			transition: _transition,
			variants: _variants,
			...props
		}: any) => <section {...props}>{children}</section>,
		h1: ({
			children,
			whileHover: _whileHover,
			whileTap: _whileTap,
			initial: _initial,
			animate: _animate,
			transition: _transition,
			variants: _variants,
			...props
		}: any) => <h1 {...props}>{children}</h1>,
		p: ({
			children,
			whileHover: _whileHover,
			whileTap: _whileTap,
			initial: _initial,
			animate: _animate,
			transition: _transition,
			variants: _variants,
			...props
		}: any) => <p {...props}>{children}</p>,
		span: ({
			children,
			whileHover: _whileHover,
			whileTap: _whileTap,
			initial: _initial,
			animate: _animate,
			transition: _transition,
			variants: _variants,
			...props
		}: any) => <span {...props}>{children}</span>,
		button: ({
			children,
			whileHover: _whileHover,
			whileTap: _whileTap,
			initial: _initial,
			animate: _animate,
			transition: _transition,
			variants: _variants,
			...props
		}: any) => <button {...props}>{children}</button>,
	},
	AnimatePresence: ({ children }: any) => children,
}));

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

		// Check if header is present (Portfolio text should be in header)
		expect(screen.getAllByText('Portfolio')[0]).toBeInTheDocument();

		// Check if footer is present (copyright text should be in footer)
		expect(
			screen.getByText(/© \d{4} Portfolio\. All rights reserved\./)
		).toBeInTheDocument();
	});

	test('renders home page by default', () => {
		renderWithRouter(<App />);
		expect(screen.getByTestId('home-page')).toBeInTheDocument();
	});
});

export {};

import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders, TestEnvironment } from '../../test-utils';
import About from './About';

describe('About Component', () => {
	let testEnv: TestEnvironment;

	beforeEach(() => {
		testEnv = new TestEnvironment();
		testEnv.setupMatchMedia();
	});

	afterEach(() => {
		testEnv.cleanup();
	});
	test('renders main heading', () => {
		renderWithProviders(<About />);
		expect(screen.getByText('About Me')).toBeInTheDocument();
	});

	test('renders avatar with initials', () => {
		renderWithProviders(<About />);
		expect(screen.getByText('RM')).toBeInTheDocument();
	});

	test('renders introduction text', () => {
		renderWithProviders(<About />);
		expect(
			screen.getByText(/I'm a passionate front-end developer/)
		).toBeInTheDocument();
	});

	test('renders story section', () => {
		renderWithProviders(<About />);
		expect(screen.getByText('My Story')).toBeInTheDocument();
	});

	test('renders skills section', () => {
		renderWithProviders(<About />);

		expect(screen.getByText('Skills & Expertise')).toBeInTheDocument();
		// Check for some key skills
		expect(screen.getByText('React')).toBeInTheDocument();
		expect(screen.getByText('TypeScript')).toBeInTheDocument();
		expect(screen.getByText('AWS')).toBeInTheDocument();
	});

	test('renders experience section', () => {
		renderWithProviders(<About />);

		expect(screen.getByText('Experience')).toBeInTheDocument();
		expect(
			screen.getByText('Senior Front-End Developer')
		).toBeInTheDocument();
		expect(screen.getByText(/Tech Solutions Inc\./)).toBeInTheDocument();
	});

	test('renders education section', () => {
		renderWithProviders(<About />);

		expect(screen.getByText('Education')).toBeInTheDocument();
		expect(
			screen.getByText('Bachelor of Computer Science')
		).toBeInTheDocument();
		expect(
			screen.getByText(/University of Technology/)
		).toBeInTheDocument();
	});
});

export {};

import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders, TestEnvironment } from '../../test-utils';
import Home from './Home';

// Mock navigation
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}));

describe('Home Component', () => {
	let testEnv: TestEnvironment;

	beforeEach(() => {
		mockNavigate.mockClear();
		testEnv = new TestEnvironment();
		testEnv.setupMatchMedia();
	});

	afterEach(() => {
		testEnv.cleanup();
	});

	test('renders main heading', async () => {
		renderWithProviders(<Home />);

		// Wait for the typewriter animation to start and show the text
		const typewriterElement = await screen.findByText(
			'Front-end Developer',
			{},
			{ timeout: 3000 }
		);
		expect(typewriterElement).toBeInTheDocument();
	});

	test('renders description text', () => {
		renderWithProviders(<Home />);
		expect(
			screen.getByText(
				/Passionate about creating exceptional digital experiences/
			)
		).toBeInTheDocument();
	});

	test('renders action buttons', () => {
		renderWithProviders(<Home />);

		expect(screen.getByText('View Projects')).toBeInTheDocument();
		// There are multiple "Get In Touch" buttons (hero section + call-to-action section)
		expect(screen.getAllByText('Get In Touch')).toHaveLength(2);
	});

	test('renders skills section', () => {
		renderWithProviders(<Home />);

		expect(screen.getByText('Skills & Technologies')).toBeInTheDocument();
		expect(screen.getByText('React')).toBeInTheDocument();
		expect(screen.getByText('TypeScript')).toBeInTheDocument();
		expect(screen.getByText('Material-UI')).toBeInTheDocument();
	});

	test('renders features section', () => {
		renderWithProviders(<Home />);

		expect(screen.getByText('What I Do')).toBeInTheDocument();
		expect(screen.getByText('Clean Code')).toBeInTheDocument();
		expect(screen.getByText('Modern Design')).toBeInTheDocument();
		expect(screen.getByText('Performance')).toBeInTheDocument();
	});

	test('renders call-to-action section', () => {
		renderWithProviders(<Home />);

		expect(screen.getByText('Ready to Work Together?')).toBeInTheDocument();
		expect(screen.getByText('View My Work')).toBeInTheDocument();
	});
});

export {};

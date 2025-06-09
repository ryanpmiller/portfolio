import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders, TestEnvironment } from '../../test-utils';
import Projects from './Projects';

describe('Projects Component', () => {
	let testEnv: TestEnvironment;

	beforeEach(() => {
		jest.clearAllMocks();
		testEnv = new TestEnvironment();
		testEnv.setupMatchMedia();
	});

	afterEach(() => {
		testEnv.cleanup();
	});

	test('renders main heading', () => {
		renderWithProviders(<Projects />);
		expect(screen.getByText('My Projects')).toBeInTheDocument();
	});

	test('renders project filter tabs', () => {
		renderWithProviders(<Projects />);

		expect(screen.getByText('All')).toBeInTheDocument();
		expect(screen.getByText('Web Apps')).toBeInTheDocument();
		expect(screen.getByText('Mobile Apps')).toBeInTheDocument();
		expect(screen.getByText('Full Stack')).toBeInTheDocument();
	});

	test('renders project cards', () => {
		renderWithProviders(<Projects />);

		expect(screen.getAllByText('E-Commerce Platform')).toHaveLength(2); // Card media + card content
		expect(screen.getAllByText('Task Management App')).toHaveLength(2);
		expect(screen.getAllByText('Weather Dashboard')).toHaveLength(2);
	});

	test('project cards have action buttons', () => {
		renderWithProviders(<Projects />);

		// Check for Code and Live Demo buttons
		const codeButtons = screen.getAllByText('Code');
		const demoButtons = screen.getAllByText('Live Demo');

		expect(codeButtons.length).toBeGreaterThan(0);
		expect(demoButtons.length).toBeGreaterThan(0);
	});

	test('filter tabs work correctly', async () => {
		const user = userEvent.setup();
		renderWithProviders(<Projects />);

		// Initially should show all projects
		expect(screen.getAllByText('E-Commerce Platform')).toHaveLength(2);
		expect(screen.getAllByText('Recipe Finder')).toHaveLength(2);

		// Click on Mobile Apps tab
		await user.click(screen.getByText('Mobile Apps'));

		// Wait for the filtering to complete and DOM to update
		await waitFor(() => {
			expect(screen.getAllByText('Recipe Finder')).toHaveLength(2);
		});

		// Should not show web projects after filtering
		await waitFor(() => {
			expect(screen.queryAllByText('Weather Dashboard')).toHaveLength(0);
		});
	});

	test('external links open in new tab', async () => {
		const user = userEvent.setup();
		renderWithProviders(<Projects />);

		// Click on a Code button
		const codeButton = screen.getAllByText('Code')[0];
		await user.click(codeButton);

		expect(window.open).toHaveBeenCalled();
	});
});

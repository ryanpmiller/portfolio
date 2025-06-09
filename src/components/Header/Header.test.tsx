import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders, TestEnvironment } from '../../test-utils';
import Header from './Header';

describe('Header Component', () => {
	let testEnv: TestEnvironment;

	beforeEach(() => {
		testEnv = new TestEnvironment();
		testEnv.setupMatchMedia();
	});

	afterEach(() => {
		testEnv.cleanup();
	});

	test('renders portfolio title', () => {
		renderWithProviders(<Header />);
		expect(screen.getAllByText('Portfolio')).toHaveLength(2); // Desktop and mobile versions
	});

	test('renders navigation menu items', () => {
		renderWithProviders(<Header />);

		expect(screen.getAllByText('Home')).toHaveLength(2); // Desktop and mobile versions
		expect(screen.getAllByText('About')).toHaveLength(2);
		expect(screen.getAllByText('Projects')).toHaveLength(2);
		expect(screen.getAllByText('Contact')).toHaveLength(2);
	});

	test('renders code icon', () => {
		renderWithProviders(<Header />);

		// Check if the code icon is present by its test id
		const codeIcon = screen.getByTestId('CodeIcon');
		expect(codeIcon).toBeInTheDocument();
	});
});

export {};

import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders, TestEnvironment } from '../../test-utils';
import Footer from './Footer';

describe('Footer Component', () => {
	let testEnv: TestEnvironment;

	beforeEach(() => {
		testEnv = new TestEnvironment();
		testEnv.setupMatchMedia();
	});

	afterEach(() => {
		testEnv.cleanup();
	});
	test('renders copyright text with current year', () => {
		renderWithProviders(<Footer />);

		const currentYear = new Date().getFullYear();
		expect(
			screen.getByText(
				`© ${currentYear} Ryan Miller. All rights reserved.`
			)
		).toBeInTheDocument();
	});

	test('renders social media links', () => {
		renderWithProviders(<Footer />);

		// Check for GitHub link
		const githubLink = screen.getByLabelText('GitHub');
		expect(githubLink).toBeInTheDocument();
		expect(githubLink).toHaveAttribute('href', 'https://github.com/test');

		// Check for LinkedIn link
		const linkedinLink = screen.getByLabelText('LinkedIn');
		expect(linkedinLink).toBeInTheDocument();
		expect(linkedinLink).toHaveAttribute(
			'href',
			'https://linkedin.com/in/test'
		);

		// Check for Email link
		const emailLink = screen.getByLabelText('Email');
		expect(emailLink).toBeInTheDocument();
		expect(emailLink).toHaveAttribute(
			'href',
			'mailto:ryan.miller.p@gmail.com'
		);
	});

	test('social media links open in new tab', () => {
		renderWithProviders(<Footer />);

		const githubLink = screen.getByLabelText('GitHub');
		expect(githubLink).toHaveAttribute('target', '_blank');
		expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

		const linkedinLink = screen.getByLabelText('LinkedIn');
		expect(linkedinLink).toHaveAttribute('target', '_blank');
		expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
	});
});

export {};

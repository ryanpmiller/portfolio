import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders, TestEnvironment } from '../../test-utils';
import Contact from './Contact';

describe('Contact Component', () => {
	let testEnv: TestEnvironment;

	beforeEach(() => {
		testEnv = new TestEnvironment();
		testEnv.setupMatchMedia();
	});

	afterEach(() => {
		testEnv.cleanup();
	});
	test('renders main heading', () => {
		renderWithProviders(<Contact />);
		expect(screen.getByText('Get In Touch')).toBeInTheDocument();
	});

	test('renders contact form', () => {
		renderWithProviders(<Contact />);

		expect(
			screen.getByRole('heading', { name: 'Send Message' })
		).toBeInTheDocument();
		expect(screen.getByLabelText(/Name/)).toBeInTheDocument();
		expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
		expect(screen.getByLabelText(/Subject/)).toBeInTheDocument();
		expect(screen.getByLabelText(/Message/)).toBeInTheDocument();
	});

	test('renders contact information', () => {
		renderWithProviders(<Contact />);

		expect(screen.getByText('Contact Info')).toBeInTheDocument();
		expect(screen.getByText('ryan.miller.p@gmail.com')).toBeInTheDocument();
		expect(screen.getByText('+1 (802) 578-6033')).toBeInTheDocument();
		expect(screen.getByText('Monrovia, MD')).toBeInTheDocument();
	});

	test('renders social links', () => {
		renderWithProviders(<Contact />);

		expect(screen.getByText('Follow Me')).toBeInTheDocument();
		// Social links are rendered as IconButtons, check by role
		const socialButtons = screen.getAllByRole('link');
		expect(socialButtons.length).toBeGreaterThan(0);
	});

	test('form validation works correctly', async () => {
		const user = userEvent.setup();
		renderWithProviders(<Contact />);

		const submitButton = screen.getByRole('button', {
			name: /Send Message/,
		});

		// Initially, submit button should be disabled (form is empty)
		// Material-UI with motion component uses aria-disabled instead of disabled attribute
		expect(submitButton).toHaveAttribute('aria-disabled', 'true');

		// Fill out the form
		await user.type(screen.getByLabelText(/Name/), 'John Doe');
		await user.type(screen.getByLabelText(/Email/), 'john@example.com');
		await user.type(screen.getByLabelText(/Subject/), 'Test Subject');
		await user.type(
			screen.getByLabelText(/Message/),
			'Test message content'
		);

		// Now submit button should be enabled
		expect(submitButton).not.toHaveAttribute('aria-disabled', 'true');
	});

	test('form submission shows success message', async () => {
		const user = userEvent.setup();
		renderWithProviders(<Contact />);

		// Fill out the form
		await user.type(screen.getByLabelText(/Name/), 'John Doe');
		await user.type(screen.getByLabelText(/Email/), 'john@example.com');
		await user.type(screen.getByLabelText(/Subject/), 'Test Subject');
		await user.type(
			screen.getByLabelText(/Message/),
			'Test message content'
		);

		// Submit the form
		const submitButton = screen.getByRole('button', {
			name: /Send Message/,
		});
		await user.click(submitButton);

		// Wait for success message
		await waitFor(
			() => {
				expect(
					screen.getByText(
						"Thank you for your message! I'll get back to you soon."
					)
				).toBeInTheDocument();
			},
			{ timeout: 3000 }
		);
	});

	test('renders call-to-action section', () => {
		renderWithProviders(<Contact />);

		expect(
			screen.getByText('Ready to Start Your Project?')
		).toBeInTheDocument();
		expect(screen.getByText("Let's Talk")).toBeInTheDocument();
	});
});

export {};

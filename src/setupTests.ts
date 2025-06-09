// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextFocus()
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Polyfill for TextEncoder/TextDecoder (required for React Router v7)
if (typeof globalThis.TextEncoder === 'undefined') {
	// Use dynamic import for Node.js util module in test environment
	globalThis.TextEncoder = require('util').TextEncoder;
	globalThis.TextDecoder = require('util').TextDecoder;
}

// Mock IntersectionObserver for Jest tests (required for framer-motion)
class MockIntersectionObserver {
	observe = jest.fn();
	disconnect = jest.fn();
	unobserve = jest.fn();

	constructor(callback: IntersectionObserverCallback) {
		// Immediately trigger the callback with default intersection
		setTimeout(() => {
			callback(
				[
					{
						isIntersecting: true,
						target: document.createElement('div'),
						boundingClientRect: {} as DOMRectReadOnly,
						intersectionRect: {} as DOMRectReadOnly,
						intersectionRatio: 1,
						rootBounds: {} as DOMRectReadOnly,
						time: Date.now(),
					},
				] as IntersectionObserverEntry[],
				this as unknown as IntersectionObserver
			);
		}, 0);
	}
}

Object.defineProperty(window, 'IntersectionObserver', {
	writable: true,
	configurable: true,
	value: MockIntersectionObserver,
});

Object.defineProperty(globalThis, 'IntersectionObserver', {
	writable: true,
	configurable: true,
	value: MockIntersectionObserver,
});

// Mock import.meta.env for Jest tests (Vite environment variables)
Object.defineProperty(globalThis, 'import', {
	value: {
		meta: {
			env: {
				VITE_ENVIRONMENT: 'test',
				VITE_API_URL: 'http://localhost:3001',
				VITE_CONTACT_EMAIL: 'test@example.com',
				VITE_ANALYTICS_ID: '',
				VITE_GITHUB_URL: 'https://github.com/test',
				VITE_LINKEDIN_URL: 'https://linkedin.com/in/test',
				VITE_TWITTER_URL: 'https://twitter.com/test',
				VITE_ENABLE_ANALYTICS: 'false',
				VITE_ENABLE_CONTACT_FORM: 'true',
			},
		},
	},
});

// Note: matchMedia and localStorage mocks are now handled per-test
// in src/test-utils.tsx using TestEnvironment class for better control

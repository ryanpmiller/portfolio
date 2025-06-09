import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as mediaQuery from 'css-mediaquery';
import { ThemeProvider as CustomThemeProvider } from './ThemeContext';
import { getThemeConfig } from './theme';

// Mock implementation based on Material UI's official testing pattern
export function createMatchMedia(width: number) {
	return (query: string) => {
		const listeners: Array<(event: any) => void> = [];

		const queryResult = {
			matches: mediaQuery.match(query, { width }),
			media: query,
			onchange: null as ((event: any) => void) | null,
			// Legacy methods (required by Material UI's useMediaQuery)
			addListener: (listener: (event: any) => void) => {
				listeners.push(listener);
			},
			removeListener: (listener: (event: any) => void) => {
				const index = listeners.indexOf(listener);
				if (index > -1) {
					listeners.splice(index, 1);
				}
			},
			// Modern methods
			addEventListener: (
				type: string,
				listener: (event: any) => void
			) => {
				if (type === 'change') {
					listeners.push(listener);
				}
			},
			removeEventListener: (
				type: string,
				listener: (event: any) => void
			) => {
				if (type === 'change') {
					const index = listeners.indexOf(listener);
					if (index > -1) {
						listeners.splice(index, 1);
					}
				}
			},
			dispatchEvent: jest.fn(),
		};

		// Add helper method to trigger listeners for testing
		(queryResult as any).triggerChange = () => {
			listeners.forEach(listener => {
				listener({ matches: queryResult.matches, media: query });
			});
		};

		return queryResult as MediaQueryList;
	};
}

// Mock localStorage helper
export function createMockLocalStorage() {
	const mockStorage: { [key: string]: string } = {};

	return {
		getItem: jest.fn((key: string) => mockStorage[key] || null),
		setItem: jest.fn((key: string, value: string) => {
			mockStorage[key] = value;
		}),
		removeItem: jest.fn((key: string) => {
			delete mockStorage[key];
		}),
		clear: jest.fn(() => {
			for (const key in mockStorage) {
				delete mockStorage[key];
			}
		}),
		length: 0,
		key: jest.fn(),
	};
}

// Standard render with providers for most tests
export const renderWithProviders = (component: React.ReactElement) => {
	const testTheme = createTheme(getThemeConfig('light'));
	return render(
		<BrowserRouter>
			<CustomThemeProvider>
				<ThemeProvider theme={testTheme}>{component}</ThemeProvider>
			</CustomThemeProvider>
		</BrowserRouter>
	);
};

// Simple render with router only (for App component tests)
export const renderWithRouter = (component: React.ReactElement) => {
	return render(<BrowserRouter>{component}</BrowserRouter>);
};

// Test environment setup helpers
export class TestEnvironment {
	private originalMatchMedia: typeof window.matchMedia;
	private originalLocalStorage: Storage;

	constructor() {
		this.originalMatchMedia = window.matchMedia;
		this.originalLocalStorage = window.localStorage;

		// Mock window.open for link testing
		Object.defineProperty(window, 'open', {
			writable: true,
			value: jest.fn(),
		});
	}

	setupMatchMedia(width: number = 1200) {
		window.matchMedia = createMatchMedia(width);
	}

	setupLocalStorage() {
		const mockStorage = createMockLocalStorage();
		Object.defineProperty(window, 'localStorage', {
			value: mockStorage,
			writable: true,
		});
		return mockStorage;
	}

	setupDarkModeMediaQuery(prefersDark: boolean = false) {
		jest.spyOn(window, 'matchMedia').mockImplementation(query => {
			if (query === '(prefers-color-scheme: dark)') {
				const listeners: Array<(event: any) => void> = [];
				return {
					matches: prefersDark,
					media: query,
					onchange: null,
					addListener: (listener: (event: any) => void) =>
						listeners.push(listener),
					removeListener: (listener: (event: any) => void) => {
						const index = listeners.indexOf(listener);
						if (index > -1) listeners.splice(index, 1);
					},
					addEventListener: (
						type: string,
						listener: (event: any) => void
					) => listeners.push(listener),
					removeEventListener: (
						type: string,
						listener: (event: any) => void
					) => {
						const index = listeners.indexOf(listener);
						if (index > -1) listeners.splice(index, 1);
					},
					dispatchEvent: jest.fn(),
				} as MediaQueryList;
			}
			return createMatchMedia(1200)(query);
		});
	}

	cleanup() {
		window.matchMedia = this.originalMatchMedia;
		Object.defineProperty(window, 'localStorage', {
			value: this.originalLocalStorage,
			writable: true,
		});
		jest.restoreAllMocks();
	}
}

// Re-export testing library utilities
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

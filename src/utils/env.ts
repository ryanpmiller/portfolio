// Environment variable helper for test-friendly access
export const getEnvVar = (key: string, defaultValue: string = ''): string => {
	// In test environment, provide fallbacks
	if (typeof process !== 'undefined' && process.env.NODE_ENV === 'test') {
		const testEnvVars: Record<string, string> = {
			VITE_ENVIRONMENT: 'test',
			VITE_API_URL: 'http://localhost:3001',
			VITE_CONTACT_EMAIL: 'test@example.com',
			VITE_ANALYTICS_ID: '',
			VITE_GITHUB_URL: 'https://github.com/test',
			VITE_LINKEDIN_URL: 'https://linkedin.com/in/test',
			VITE_TWITTER_URL: 'https://twitter.com/test',
			VITE_ENABLE_ANALYTICS: 'false',
			VITE_ENABLE_CONTACT_FORM: 'true',
		};
		return testEnvVars[key] || defaultValue;
	}

	// In development/production, hardcode values for now
	// TODO: Implement proper environment variable access once Jest is configured for import.meta
	const envVars: Record<string, string> = {
		VITE_ENVIRONMENT: 'development',
		VITE_API_URL: 'http://localhost:3001',
		VITE_CONTACT_EMAIL: 'contact@example.com',
		VITE_ANALYTICS_ID: '',
		VITE_GITHUB_URL: 'https://github.com',
		VITE_LINKEDIN_URL: 'https://linkedin.com',
		VITE_TWITTER_URL: 'https://twitter.com',
		VITE_ENABLE_ANALYTICS: 'false',
		VITE_ENABLE_CONTACT_FORM: 'true',
	};

	return envVars[key] || defaultValue;
};

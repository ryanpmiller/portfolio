/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_ENVIRONMENT: string;
	readonly VITE_API_URL: string;
	readonly VITE_CONTACT_EMAIL: string;
	readonly VITE_ANALYTICS_ID: string;
	readonly VITE_GITHUB_URL: string;
	readonly VITE_LINKEDIN_URL: string;
	readonly VITE_TWITTER_URL: string;
	readonly VITE_ENABLE_ANALYTICS: string;
	readonly VITE_ENABLE_CONTACT_FORM: string;
	readonly VITE_ENABLE_DARK_MODE: string;
	readonly VITE_SITE_TITLE: string;
	readonly VITE_SITE_DESCRIPTION: string;
	readonly VITE_PRIMARY_COLOR: string;
	readonly VITE_SECONDARY_COLOR: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

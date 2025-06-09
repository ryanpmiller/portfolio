import { ThemeOptions } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

// Function to get theme configuration based on mode
export const getThemeConfig = (mode: PaletteMode): ThemeOptions => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					// Light mode colors
					primary: {
						main: '#6366f1',
						light: '#818cf8',
						dark: '#4f46e5',
						contrastText: '#ffffff',
					},
					secondary: {
						main: '#ec4899',
						light: '#f472b6',
						dark: '#db2777',
						contrastText: '#ffffff',
					},
					background: {
						default: '#fafafa',
						paper: '#ffffff',
					},
					text: {
						primary: '#1f2937',
						secondary: '#6b7280',
					},
					divider: '#e5e7eb',
				}
			: {
					// Dark mode colors
					primary: {
						main: '#818cf8',
						light: '#a5b4fc',
						dark: '#6366f1',
						contrastText: '#000000',
					},
					secondary: {
						main: '#f472b6',
						light: '#f9a8d4',
						dark: '#ec4899',
						contrastText: '#000000',
					},
					background: {
						default: '#0f172a',
						paper: '#1e293b',
					},
					text: {
						primary: '#f8fafc',
						secondary: '#cbd5e1',
					},
					divider: '#334155',
				}),
	},
	typography: {
		fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
		h1: {
			fontFamily: '"Montserrat", sans-serif',
			fontWeight: 700,
			fontSize: '3.5rem',
			lineHeight: 1.2,
			letterSpacing: '-0.02em',
		},
		h2: {
			fontFamily: '"Montserrat", sans-serif',
			fontWeight: 600,
			fontSize: '2.75rem',
			lineHeight: 1.3,
			letterSpacing: '-0.01em',
		},
		h3: {
			fontFamily: '"Montserrat", sans-serif',
			fontWeight: 600,
			fontSize: '2.25rem',
			lineHeight: 1.3,
		},
		h4: {
			fontFamily: '"Poppins", sans-serif',
			fontWeight: 600,
			fontSize: '1.75rem',
			lineHeight: 1.4,
		},
		h5: {
			fontFamily: '"Poppins", sans-serif',
			fontWeight: 600,
			fontSize: '1.5rem',
			lineHeight: 1.4,
		},
		h6: {
			fontFamily: '"Poppins", sans-serif',
			fontWeight: 600,
			fontSize: '1.25rem',
			lineHeight: 1.4,
		},
		body1: {
			fontSize: '1rem',
			lineHeight: 1.6,
			fontWeight: 400,
		},
		body2: {
			fontSize: '0.875rem',
			lineHeight: 1.6,
			fontWeight: 400,
		},
		button: {
			fontFamily: '"Poppins", sans-serif',
			fontWeight: 600,
			textTransform: 'none',
			fontSize: '1rem',
		},
	},
	shape: {
		borderRadius: 12,
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 12,
					padding: '12px 24px',
					fontWeight: 600,
					transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
					boxShadow: 'none',
					'&:hover': {
						transform: 'translateY(-2px)',
						boxShadow:
							mode === 'dark'
								? '0 8px 25px rgba(129, 140, 248, 0.3)'
								: '0 8px 25px rgba(0, 0, 0, 0.15)',
					},
				},
				contained: {
					'&:hover': {
						boxShadow:
							mode === 'dark'
								? '0 8px 25px rgba(129, 140, 248, 0.3)'
								: '0 8px 25px rgba(0, 0, 0, 0.15)',
					},
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 16,
					transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
					border:
						mode === 'dark'
							? '1px solid #334155'
							: '1px solid transparent',
					backgroundColor: mode === 'dark' ? '#1e293b' : undefined,
					'&:hover': {
						transform: 'translateY(-4px)',
						boxShadow:
							mode === 'dark'
								? '0 20px 40px rgba(0, 0, 0, 0.4)'
								: '0 20px 40px rgba(0, 0, 0, 0.1)',
						...(mode === 'dark' && { borderColor: '#475569' }),
					},
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: 20,
					fontWeight: 500,
					transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
					cursor: 'pointer',
					'&:hover': {
						transform: 'scale(1.05)',
					},
				},
			},
		},
	},
});

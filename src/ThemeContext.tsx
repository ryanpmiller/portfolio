import React, {
	createContext,
	useContext,
	useState,
	useMemo,
	ReactNode,
} from 'react';
import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PaletteMode } from '@mui/material';
import { getThemeConfig } from './theme';

interface ThemeContextType {
	mode: PaletteMode;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
	mode: 'light',
	toggleTheme: () => {},
});

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const [mode, setMode] = useState<PaletteMode>(() => {
		// Check localStorage for saved theme preference
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'light' || savedTheme === 'dark') {
			return savedTheme;
		}
		// Use system preference if no saved preference
		return prefersDarkMode ? 'dark' : 'light';
	});

	const toggleTheme = () => {
		setMode(prevMode => {
			const newMode = prevMode === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', newMode);
			return newMode;
		});
	};

	const theme = useMemo(() => createTheme(getThemeConfig(mode)), [mode]);

	const contextValue = useMemo(
		() => ({
			mode,
			toggleTheme,
		}),
		[mode]
	);

	return (
		<ThemeContext.Provider value={contextValue}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	return context;
};

export default ThemeProvider;

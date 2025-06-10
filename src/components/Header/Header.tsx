import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Box,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	useMediaQuery,
	Tooltip,
} from '@mui/material';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import {
	Menu as MenuIcon,
	Code as CodeIcon,
	DarkMode as DarkModeIcon,
	LightMode as LightModeIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';

const Header: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { mode, toggleTheme } = useTheme();
	const theme = useMuiTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const [mobileOpen, setMobileOpen] = useState(false);
	const isDarkMode = mode === 'dark';

	const menuItems = [
		{ label: 'Home', path: '/' },
		{ label: 'About', path: '/about' },
		{ label: 'Projects', path: '/projects' },
		{ label: 'Contact', path: '/contact' },
	];

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleNavigation = (path: string) => {
		navigate(path);
		if (isMobile) {
			setMobileOpen(false);
		}
	};

	const isActiveRoute = (path: string) => {
		return location.pathname === path;
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				Ryan Miller
			</Typography>
			<List>
				{menuItems.map(item => (
					<ListItem key={item.label} disablePadding>
						<ListItemButton
							sx={{
								textAlign: 'center',
								backgroundColor: isActiveRoute(item.path)
									? 'rgba(25, 118, 210, 0.12)'
									: 'transparent',
								'&:hover': {
									backgroundColor: isActiveRoute(item.path)
										? 'rgba(25, 118, 210, 0.2)'
										: 'rgba(0, 0, 0, 0.04)',
								},
								borderLeft: isActiveRoute(item.path) ? 3 : 0,
								borderLeftColor: 'primary.main',
							}}
							onClick={() => handleNavigation(item.path)}
						>
							<ListItemText
								primary={item.label}
								sx={{
									'& .MuiListItemText-primary': {
										fontWeight: isActiveRoute(item.path)
											? 600
											: 400,
										color: isActiveRoute(item.path)
											? 'primary.main'
											: 'inherit',
									},
								}}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<>
			<motion.div
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
			>
				<AppBar position="sticky" elevation={1}>
					<Toolbar>
						<CodeIcon sx={{ mr: 2 }} />
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1, cursor: 'pointer' }}
							onClick={() => handleNavigation('/')}
						>
							Ryan Miller
						</Typography>

						{/* Theme Toggle Button */}
						<Tooltip
							title={
								isDarkMode
									? 'Switch to Light Mode'
									: 'Switch to Dark Mode'
							}
						>
							<IconButton
								component={motion.button}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								onClick={toggleTheme}
								color="inherit"
								sx={{ mr: 2 }}
							>
								{isDarkMode ? (
									<LightModeIcon />
								) : (
									<DarkModeIcon />
								)}
							</IconButton>
						</Tooltip>

						{isMobile ? (
							<IconButton
								component={motion.button}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								color="inherit"
								aria-label="open drawer"
								edge="start"
								onClick={handleDrawerToggle}
							>
								<MenuIcon />
							</IconButton>
						) : (
							<Box sx={{ display: 'flex', gap: 2 }}>
								{menuItems.map(item => (
									<Button
										key={item.label}
										color="inherit"
										onClick={() =>
											handleNavigation(item.path)
										}
										sx={{
											position: 'relative',
											borderBottom: isActiveRoute(
												item.path
											)
												? 2
												: 0,
											borderBottomColor: 'primary.main',
											backgroundColor: isActiveRoute(
												item.path
											)
												? 'rgba(255, 255, 255, 0.1)'
												: 'transparent',
											'&:hover': {
												backgroundColor: isActiveRoute(
													item.path
												)
													? 'rgba(255, 255, 255, 0.15)'
													: 'rgba(255, 255, 255, 0.08)',
											},
											fontWeight: isActiveRoute(item.path)
												? 600
												: 400,
											transition: 'all 0.2s ease-in-out',
										}}
									>
										{item.label}
									</Button>
								))}
							</Box>
						)}
					</Toolbar>
				</AppBar>
			</motion.div>
			<Drawer
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: 'block', md: 'none' },
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: 240,
					},
				}}
			>
				{drawer}
			</Drawer>
		</>
	);
};

export default Header;

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	Typography,
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
								backgroundColor: 'transparent',
								py: 2,
								'&:hover': {
									backgroundColor: 'rgba(25, 118, 210, 0.08)',
								},
								borderLeft: isActiveRoute(item.path) ? 3 : 0,
								borderLeftColor: 'primary.main',
								transition: 'all 0.3s ease-in-out',
							}}
							onClick={() => handleNavigation(item.path)}
						>
							<ListItemText
								primary={item.label}
								sx={{
									'& .MuiListItemText-primary': {
										fontWeight: isActiveRoute(item.path)
											? 600
											: 500,
										color: isActiveRoute(item.path)
											? 'primary.main'
											: 'inherit',
										fontSize: '1rem',
										transition: 'all 0.3s ease-in-out',
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
							<Box
								sx={{
									display: 'flex',
									gap: 4,
									alignItems: 'center',
								}}
							>
								{menuItems.map(item => (
									<motion.div
										key={item.label}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Typography
											variant="body1"
											component="span"
											onClick={() =>
												handleNavigation(item.path)
											}
											sx={{
												position: 'relative',
												cursor: 'pointer',
												color: 'inherit',
												fontWeight: isActiveRoute(
													item.path
												)
													? 600
													: 500,
												fontSize: '1rem',
												textDecoration: 'none',
												transition:
													'all 0.3s ease-in-out',
												px: 2,
												py: 1.5,
												borderRadius: 1,
												'&:hover': {
													color: isDarkMode
														? 'rgba(255, 255, 255, 0.9)'
														: 'rgba(255, 255, 255, 0.95)',
													transform:
														'translateY(-1px)',
												},
												'&::after': {
													content: '""',
													position: 'absolute',
													bottom: '3px',
													left: '50%',
													transform:
														'translateX(-50%)',
													width: isActiveRoute(
														item.path
													)
														? '80%'
														: '0%',
													height: '2px',
													backgroundColor: isDarkMode
														? 'primary.main'
														: 'secondary.light',
													transition:
														'width 0.3s ease-in-out',
												},
												'&:hover::after': {
													width: '80%',
												},
											}}
										>
											{item.label}
										</Typography>
									</motion.div>
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

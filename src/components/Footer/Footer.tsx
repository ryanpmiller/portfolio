import React from 'react';
import {
	Box,
	Container,
	Typography,
	IconButton,
	Link,
	Grid,
	Chip,
} from '@mui/material';
import {
	GitHub as GitHubIcon,
	LinkedIn as LinkedInIcon,
	Email as EmailIcon,
	Code as CodeIcon,
	Favorite as FavoriteIcon,
	LocalCafe as CoffeeIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { getEnvVar } from '../../utils/env';
import { useTheme as useCustomTheme } from '../../ThemeContext';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();
	const { mode } = useCustomTheme();
	const isDarkMode = mode === 'dark';

	// Environment variables
	const githubUrl = getEnvVar('VITE_GITHUB_URL', 'https://github.com');
	const linkedinUrl = getEnvVar('VITE_LINKEDIN_URL', 'https://linkedin.com');
	const contactEmail = getEnvVar(
		'VITE_CONTACT_EMAIL',
		'ryan.miller.p@gmail.com'
	);

	const techStack = [
		'React',
		'TypeScript',
		'Material-UI',
		'Framer Motion',
		'Vite',
	];

	const socialLinks = [
		{
			icon: <GitHubIcon />,
			label: 'GitHub',
			href: githubUrl,
			color: '#181717',
		},
		{
			icon: <LinkedInIcon />,
			label: 'LinkedIn',
			href: linkedinUrl,
			color: '#0A66C2',
		},
		{
			icon: <EmailIcon />,
			label: 'Email',
			href: `mailto:${contactEmail}`,
			color: '#EA4335',
		},
	];

	return (
		<motion.footer
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
		>
			<Box
				component="div"
				sx={{
					background: isDarkMode
						? 'linear-gradient(135deg, rgba(25, 25, 25, 0.95) 0%, rgba(35, 35, 35, 0.95) 100%)'
						: 'linear-gradient(135deg, rgba(245, 245, 245, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%)',
					backdropFilter: 'blur(20px)',
					borderTop: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
					py: 6,
					mt: 'auto',
					position: 'relative',
					overflow: 'hidden',
					'&::before': {
						content: '""',
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background:
							'linear-gradient(45deg, rgba(102, 126, 234, 0.03), rgba(118, 75, 162, 0.03))',
						zIndex: 0,
					},
				}}
			>
				<Container
					maxWidth="lg"
					sx={{ position: 'relative', zIndex: 1 }}
				>
					<Grid container spacing={4}>
						{/* Left Column - Branding & Description */}
						<Grid size={{ xs: 12, md: 4 }}>
							<motion.div
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.1 }}
								viewport={{ once: true }}
							>
								<Box sx={{ mb: 3 }}>
									<Typography
										variant="h5"
										sx={{
											fontWeight: 700,
											mb: 2,
											background:
												'linear-gradient(45deg, #667eea, #764ba2)',
											backgroundClip: 'text',
											WebkitBackgroundClip: 'text',
											WebkitTextFillColor: 'transparent',
											display: 'flex',
											alignItems: 'center',
											gap: 1,
										}}
									>
										<CodeIcon /> Ryan Miller
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{ lineHeight: 1.6, maxWidth: 280 }}
									>
										Front-end developer passionate about
										creating exceptional digital experiences
										with modern web technologies.
									</Typography>
								</Box>
							</motion.div>
						</Grid>

						{/* Center Column - Tech Stack */}
						<Grid size={{ xs: 12, md: 4 }}>
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								viewport={{ once: true }}
							>
								<Typography
									variant="h6"
									sx={{
										fontWeight: 600,
										mb: 2,
										color: 'text.primary',
									}}
								>
									Built With
								</Typography>
								<Box
									sx={{
										display: 'flex',
										flexWrap: 'wrap',
										gap: 1,
									}}
								>
									{techStack.map((tech, index) => (
										<motion.div
											key={tech}
											initial={{ opacity: 0, scale: 0.8 }}
											whileInView={{
												opacity: 1,
												scale: 1,
											}}
											transition={{
												duration: 0.4,
												delay: 0.3 + index * 0.1,
											}}
											viewport={{ once: true }}
											whileHover={{
												scale: 1.05,
												transition: { duration: 0.2 },
											}}
										>
											<Chip
												label={tech}
												size="small"
												variant="outlined"
												sx={{
													fontSize: '0.75rem',
													transition: 'all 0.3s ease',
													'&:hover': {
														backgroundColor:
															'primary.main',
														color: 'primary.contrastText',
														borderColor:
															'primary.main',
													},
												}}
											/>
										</motion.div>
									))}
								</Box>
							</motion.div>
						</Grid>

						{/* Right Column - Social Links */}
						<Grid size={{ xs: 12, md: 4 }}>
							<motion.div
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								viewport={{ once: true }}
							>
								<Typography
									variant="h6"
									sx={{
										fontWeight: 600,
										mb: 2,
										color: 'text.primary',
									}}
								>
									Connect
								</Typography>
								<Box sx={{ display: 'flex', gap: 1 }}>
									{socialLinks.map((social, index) => (
										<motion.div
											key={social.label}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												duration: 0.4,
												delay: 0.4 + index * 0.1,
											}}
											viewport={{ once: true }}
											whileHover={{
												scale: 1.1,
												transition: { duration: 0.2 },
											}}
											whileTap={{ scale: 0.95 }}
										>
											<IconButton
												color="inherit"
												aria-label={social.label}
												component={Link}
												href={social.href}
												target={
													social.label !== 'Email'
														? '_blank'
														: undefined
												}
												rel={
													social.label !== 'Email'
														? 'noopener noreferrer'
														: undefined
												}
												sx={{
													border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
													borderRadius: 2,
													transition: 'all 0.3s ease',
													'&:hover': {
														borderColor:
															social.color,
														backgroundColor: `${social.color}15`,
														color: social.color,
														transform:
															'translateY(-2px)',
														boxShadow: `0 8px 25px ${social.color}25`,
													},
												}}
											>
												{social.icon}
											</IconButton>
										</motion.div>
									))}
								</Box>
							</motion.div>
						</Grid>
					</Grid>

					{/* Bottom Section - Copyright & Fun Elements */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						viewport={{ once: true }}
					>
						<Box
							sx={{
								borderTop: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
								pt: 4,
								mt: 4,
								display: 'flex',
								flexDirection: { xs: 'column', sm: 'row' },
								justifyContent: 'space-between',
								alignItems: 'center',
								textAlign: { xs: 'center', sm: 'left' },
							}}
						>
							<Typography
								variant="body2"
								color="text.secondary"
								sx={{ mb: { xs: 2, sm: 0 } }}
							>
								© {currentYear} Ryan Miller. All rights
								reserved.
							</Typography>

							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: 1,
									color: 'text.secondary',
								}}
							>
								<Typography variant="body2">
									Made with
								</Typography>
								<motion.div
									animate={{
										scale: [1, 1.2, 1],
									}}
									transition={{
										duration: 1.5,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
								>
									<FavoriteIcon
										sx={{
											color: '#e91e63',
											fontSize: '1rem',
										}}
									/>
								</motion.div>
								<Typography variant="body2">and</Typography>
								<motion.div
									animate={{
										rotate: [0, 10, -10, 0],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
								>
									<CoffeeIcon
										sx={{
											color: '#8d6e63',
											fontSize: '1rem',
										}}
									/>
								</motion.div>
							</Box>
						</Box>
					</motion.div>
				</Container>
			</Box>
		</motion.footer>
	);
};

export default Footer;

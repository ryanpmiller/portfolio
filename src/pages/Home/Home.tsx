import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Container,
	Box,
	Typography,
	Button,
	Grid,
	Card,
	CardContent,
	Chip,
} from '@mui/material';
import {
	Code as CodeIcon,
	Palette as PaletteIcon,
	Speed as SpeedIcon,
	ArrowForward as ArrowForwardIcon,
	Work as WorkIcon,
	Email as EmailIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useTheme as useCustomTheme } from '../../ThemeContext';

const Home: React.FC = () => {
	const navigate = useNavigate();
	const { mode } = useCustomTheme();
	const isDarkMode = mode === 'dark';

	const skills = [
		'React',
		'TypeScript',
		'JavaScript',
		'HTML5',
		'CSS3',
		'Material-UI',
		'Node.js',
		'Git',
		'AWS',
		'Responsive Design',
	];

	const features = [
		{
			icon: <CodeIcon fontSize="large" color="primary" />,
			title: 'Clean Code',
			description:
				'Writing maintainable, readable, and efficient code following best practices.',
		},
		{
			icon: <PaletteIcon fontSize="large" color="primary" />,
			title: 'Modern Design',
			description:
				'Creating beautiful, user-friendly interfaces with attention to detail.',
		},
		{
			icon: <SpeedIcon fontSize="large" color="primary" />,
			title: 'Performance',
			description:
				'Optimizing applications for speed and excellent user experience.',
		},
	];

	return (
		<>
			{/* Hero Section */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				{/* Hero content */}
				<Container maxWidth="lg">
					<Box
						sx={{
							py: { xs: 8, md: 12 },
							textAlign: 'center',
							position: 'relative',
							overflow: 'hidden',
						}}
					>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							{/* Hero text content */}
							<Typography
								variant="h6"
								component="div"
								sx={{
									mb: 2,
									color: 'primary.main',
									fontWeight: 500,
									fontSize: { xs: '1rem', md: '1.25rem' },
								}}
							>
								Hi, I'm Ryan Miller
							</Typography>

							<Typography
								variant="h1"
								component="h1"
								sx={{
									mb: 3,
									fontSize: { xs: '2.5rem', md: '4rem' },
									fontWeight: 800,
									background:
										'linear-gradient(45deg, #1976d2, #dc004e)',
									backgroundClip: 'text',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
									minHeight: { xs: '100px', md: '120px' },
								}}
							>
								<Typewriter
									options={{
										strings: [
											'Front-end Developer',
											'React Specialist',
											'UI/UX Enthusiast',
											'Creative Coder',
										],
										autoStart: true,
										loop: true,
										delay: 75,
										deleteSpeed: 50,
									}}
								/>
							</Typography>

							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5, duration: 0.8 }}
							>
								<Typography
									variant="h5"
									component="h2"
									sx={{
										mb: 4,
										color: 'text.secondary',
										maxWidth: '600px',
										mx: 'auto',
										fontSize: {
											xs: '1.25rem',
											md: '1.5rem',
										},
										lineHeight: 1.6,
									}}
								>
									Passionate about creating exceptional
									digital experiences with modern web
									technologies and elegant design solutions
								</Typography>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.8, duration: 0.6 }}
							>
								<Box
									sx={{
										display: 'flex',
										gap: 2,
										justifyContent: 'center',
										flexWrap: 'wrap',
									}}
								>
									<Button
										variant="contained"
										size="large"
										onClick={() => navigate('/projects')}
										endIcon={<ArrowForwardIcon />}
										sx={{
											px: 4,
											py: 1.5,
											'&:hover': {
												transform: 'translateY(-2px)',
												boxShadow:
													'0 8px 25px rgba(25, 118, 210, 0.25)',
											},
											transition: 'all 0.3s ease-in-out',
										}}
									>
										View Projects
									</Button>
									<Button
										variant="outlined"
										size="large"
										onClick={() => navigate('/contact')}
										sx={{
											px: 4,
											py: 1.5,
											'&:hover': {
												transform: 'translateY(-2px)',
												boxShadow:
													'0 8px 25px rgba(25, 118, 210, 0.15)',
											},
											transition: 'all 0.3s ease-in-out',
										}}
									>
										Get In Touch
									</Button>
								</Box>
							</motion.div>
						</motion.div>
					</Box>
				</Container>
			</motion.div>

			{/* Features Section */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.8 }}
			>
				<Container maxWidth="lg">
					<Box sx={{ py: 8 }}>
						{/* Features content */}
						<Typography
							variant="h3"
							component="h2"
							sx={{ mb: 6, textAlign: 'center', fontWeight: 600 }}
						>
							What I Do
						</Typography>
						<Grid container spacing={4}>
							{features.map((feature, index) => (
								<Grid
									size={{ xs: 12, md: 4 }}
									key={feature.title}
								>
									<motion.div
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.2 + 1 }}
										whileHover={{ y: -8 }}
										style={{ display: 'block' }}
									>
										<Card
											sx={{
												height: '100%',
												textAlign: 'center',
												p: 3,
												transition:
													'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
												border: '1px solid transparent',
												'&:hover': {
													transform:
														'translateY(-8px)',
													boxShadow: isDarkMode
														? '0 20px 40px rgba(129, 140, 248, 0.2)'
														: '0 20px 40px rgba(0, 0, 0, 0.1)',
												},
											}}
										>
											<CardContent>
												<motion.div
													whileHover={{ rotate: 360 }}
													transition={{
														duration: 0.6,
													}}
												>
													{feature.icon}
												</motion.div>
												<Typography
													variant="h5"
													component="h3"
													sx={{ mb: 2 }}
												>
													{feature.title}
												</Typography>
												<Typography
													variant="body1"
													color="text.secondary"
												>
													{feature.description}
												</Typography>
											</CardContent>
										</Card>
									</motion.div>
								</Grid>
							))}
						</Grid>
					</Box>
				</Container>
			</motion.div>

			{/* Skills Showcase */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 1.2 }}
			>
				<Container maxWidth="lg">
					<Box sx={{ py: 8 }}>
						{/* Skills showcase content */}
						<Typography
							variant="h3"
							component="h2"
							sx={{ mb: 6, textAlign: 'center', fontWeight: 600 }}
						>
							Skills & Technologies
						</Typography>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								gap: 2,
								flexWrap: 'wrap',
							}}
						>
							{skills.map((skill, index) => (
								<motion.div
									key={skill}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
										delay: 1.4 + index * 0.1,
									}}
								>
									<Chip
										label={skill}
										variant="outlined"
										sx={{
											fontSize: '1rem',
											py: 1,
											px: 2,
											transition: 'all 0.3s ease',
											'&:hover': {
												transform: 'scale(1.1)',
												backgroundColor: 'primary.main',
												color: 'primary.contrastText',
											},
										}}
									/>
								</motion.div>
							))}
						</Box>
					</Box>
				</Container>
			</motion.div>

			{/* Ready to Work Together Section */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 1.6 }}
			>
				<Container maxWidth="lg">
					<Box sx={{ py: { xs: 8, md: 12 } }}>
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 1.8 }}
						>
							<Card
								sx={{
									background:
										'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
									color: 'white',
									textAlign: 'center',
									p: { xs: 4, md: 6 },
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
											'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
										zIndex: 0,
									},
								}}
							>
								<CardContent
									sx={{ position: 'relative', zIndex: 1 }}
								>
									<motion.div
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 2 }}
									>
										<WorkIcon
											sx={{
												fontSize: {
													xs: '3rem',
													md: '4rem',
												},
												mb: 3,
												opacity: 0.9,
											}}
										/>
										<Typography
											variant="h2"
											component="h2"
											sx={{
												mb: 3,
												fontWeight: 700,
												fontSize: {
													xs: '2rem',
													md: '3rem',
												},
												textShadow:
													'0 2px 4px rgba(0,0,0,0.1)',
											}}
										>
											Ready to Work Together?
										</Typography>
										<Typography
											variant="h5"
											component="p"
											sx={{
												mb: 4,
												opacity: 0.95,
												maxWidth: '600px',
												mx: 'auto',
												fontSize: {
													xs: '1.1rem',
													md: '1.25rem',
												},
												lineHeight: 1.6,
											}}
										>
											I'm always interested in new
											opportunities and exciting projects.
											Let's discuss how we can bring your
											ideas to life with modern web
											technologies.
										</Typography>
									</motion.div>

									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.6,
											delay: 2.2,
										}}
									>
										<Box
											sx={{
												display: 'flex',
												gap: 3,
												justifyContent: 'center',
												flexWrap: 'wrap',
											}}
										>
											<Button
												variant="contained"
												size="large"
												onClick={() =>
													navigate('/contact')
												}
												endIcon={<EmailIcon />}
												sx={{
													px: 4,
													py: 1.5,
													backgroundColor: 'white',
													color: 'primary.main',
													fontSize: '1.1rem',
													fontWeight: 600,
													'&:hover': {
														backgroundColor:
															'rgba(255, 255, 255, 0.9)',
														transform:
															'translateY(-3px)',
														boxShadow:
															'0 12px 30px rgba(0, 0, 0, 0.2)',
													},
													transition:
														'all 0.3s ease-in-out',
												}}
											>
												Get In Touch
											</Button>
											<Button
												variant="outlined"
												size="large"
												onClick={() =>
													navigate('/projects')
												}
												endIcon={<ArrowForwardIcon />}
												sx={{
													px: 4,
													py: 1.5,
													borderColor:
														'rgba(255, 255, 255, 0.7)',
													color: 'white',
													fontSize: '1.1rem',
													fontWeight: 600,
													'&:hover': {
														borderColor: 'white',
														backgroundColor:
															'rgba(255, 255, 255, 0.1)',
														transform:
															'translateY(-3px)',
														boxShadow:
															'0 12px 30px rgba(0, 0, 0, 0.15)',
													},
													transition:
														'all 0.3s ease-in-out',
												}}
											>
												View My Work
											</Button>
										</Box>
									</motion.div>

									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{
											duration: 0.6,
											delay: 2.4,
										}}
									>
										<Typography
											variant="body2"
											sx={{
												mt: 4,
												opacity: 0.8,
												fontSize: '0.95rem',
											}}
										>
											Available for freelance projects •
											Remote collaboration welcome
										</Typography>
									</motion.div>
								</CardContent>
							</Card>
						</motion.div>
					</Box>
				</Container>
			</motion.div>
		</>
	);
};

export default Home;

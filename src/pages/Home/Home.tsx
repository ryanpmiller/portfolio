import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Container,
	Box,
	Typography,
	Button,
	Grid,
	Card,
	CardContent,
	LinearProgress,
} from '@mui/material';
import {
	Code as CodeIcon,
	Palette as PaletteIcon,
	Speed as SpeedIcon,
	ArrowForward as ArrowForwardIcon,
	Work as WorkIcon,
	Email as EmailIcon,
	TrendingUp as TrendingUpIcon,
	Lightbulb as LightbulbIcon,
	Rocket as RocketIcon,
	Star as StarIcon,
	Timeline as TimelineIcon,
	Psychology as PsychologyIcon,
} from '@mui/icons-material';
import { motion, useScroll, useTransform } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useTheme as useCustomTheme } from '../../ThemeContext';

const Home: React.FC = () => {
	const navigate = useNavigate();
	const { mode } = useCustomTheme();
	const isDarkMode = mode === 'dark';
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

	const skills = [
		{ name: 'React', level: 95 },
		{ name: 'TypeScript', level: 90 },
		{ name: 'JavaScript', level: 95 },
		{ name: 'HTML5', level: 98 },
		{ name: 'CSS3', level: 92 },
		{ name: 'Material-UI', level: 88 },
		{ name: 'Node.js', level: 85 },
		{ name: 'Git', level: 90 },
		{ name: 'AWS', level: 80 },
		{ name: 'Responsive Design', level: 95 },
	];

	const stats = [
		{
			number: 50,
			label: 'Projects Completed',
			icon: <RocketIcon fontSize="inherit" />,
		},
		{
			number: 3,
			label: 'Years Experience',
			icon: <TimelineIcon fontSize="inherit" />,
		},
		{
			number: 25,
			label: 'Technologies Mastered',
			icon: <PsychologyIcon fontSize="inherit" />,
		},
		{
			number: 100,
			label: 'Client Satisfaction',
			suffix: '%',
			icon: <StarIcon fontSize="inherit" />,
		},
	];

	const journey = [
		{
			year: '2021',
			title: 'Started Web Development Journey',
			description:
				'Began learning HTML, CSS, and JavaScript fundamentals',
			icon: <LightbulbIcon />,
		},
		{
			year: '2022',
			title: 'Mastered React & Modern Frameworks',
			description:
				'Dove deep into React, TypeScript, and modern development tools',
			icon: <CodeIcon />,
		},
		{
			year: '2023',
			title: 'Full-Stack Development',
			description:
				'Expanded skills to include Node.js, databases, and cloud services',
			icon: <TrendingUpIcon />,
		},
		{
			year: '2024',
			title: 'Professional Freelance Work',
			description:
				'Started taking on client projects and building production applications',
			icon: <WorkIcon />,
		},
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
		<div ref={containerRef}>
			{/* Floating Background Elements */}
			<Box
				sx={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					pointerEvents: 'none',
					zIndex: -1,
					overflow: 'hidden',
				}}
			>
				{[...Array(15)].map((_, i) => (
					<motion.div
						key={i}
						style={{
							position: 'absolute',
							width: Math.random() * 100 + 50,
							height: Math.random() * 100 + 50,
							background: `linear-gradient(45deg, ${
								isDarkMode
									? 'rgba(102, 126, 234, 0.05)'
									: 'rgba(102, 126, 234, 0.03)'
							}, ${
								isDarkMode
									? 'rgba(118, 75, 162, 0.05)'
									: 'rgba(118, 75, 162, 0.03)'
							})`,
							borderRadius: '50%',
							left: Math.random() * 100 + '%',
							top: Math.random() * 100 + '%',
						}}
						animate={{
							y: [0, -100, 0],
							x: [0, 50, 0],
							scale: [1, 1.2, 1],
						}}
						transition={{
							duration: Math.random() * 10 + 15,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>
				))}
			</Box>

			{/* Hero Section */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				style={{ transform: `translateY(${y})` }}
			>
				{/* Hero content */}
				<Container maxWidth="lg">
					<Box
						sx={{
							py: { xs: 12, md: 20 },
							textAlign: 'center',
							position: 'relative',
							overflow: 'hidden',
							minHeight: '100vh',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
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
										component={motion.button}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
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
										component={motion.button}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
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
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
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
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<Container maxWidth="lg">
					<Box sx={{ py: 12 }}>
						<Typography
							variant="h3"
							component="h2"
							sx={{ mb: 8, textAlign: 'center', fontWeight: 600 }}
						>
							Skills & Expertise
						</Typography>
						<Grid container spacing={4}>
							{skills.map((skill, index) => (
								<Grid
									size={{ xs: 12, sm: 6, md: 4 }}
									key={skill.name}
								>
									<motion.div
										initial={{ opacity: 0, x: -50 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{
											delay: index * 0.1,
											duration: 0.6,
										}}
										viewport={{ once: true }}
									>
										<Box sx={{ mb: 3 }}>
											<Box
												sx={{
													display: 'flex',
													justifyContent:
														'space-between',
													mb: 1,
												}}
											>
												<Typography
													variant="h6"
													sx={{ fontWeight: 600 }}
												>
													{skill.name}
												</Typography>
												<Typography
													variant="body2"
													color="text.secondary"
												>
													{skill.level}%
												</Typography>
											</Box>
											<LinearProgress
												variant="determinate"
												value={skill.level}
												sx={{
													height: 8,
													borderRadius: 4,
													backgroundColor: isDarkMode
														? 'rgba(255,255,255,0.1)'
														: 'rgba(0,0,0,0.1)',
													'& .MuiLinearProgress-bar':
														{
															borderRadius: 4,
															background:
																'linear-gradient(45deg, #667eea, #764ba2)',
														},
												}}
											/>
										</Box>
									</motion.div>
								</Grid>
							))}
						</Grid>
					</Box>
				</Container>
			</motion.div>

			{/* Stats Section */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<Box
					sx={{
						background: isDarkMode
							? 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'
							: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
						py: 12,
						position: 'relative',
						overflow: 'hidden',
					}}
				>
					<Container maxWidth="lg">
						<Typography
							variant="h3"
							component="h2"
							sx={{ mb: 8, textAlign: 'center', fontWeight: 600 }}
						>
							By the Numbers
						</Typography>
						<Grid container spacing={4}>
							{stats.map((stat, index) => (
								<Grid size={{ xs: 6, md: 3 }} key={stat.label}>
									<motion.div
										initial={{ opacity: 0, y: 50 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{
											delay: index * 0.2,
											duration: 0.6,
										}}
										viewport={{ once: true }}
										whileHover={{
											scale: 1.05,
											transition: { duration: 0.2 },
										}}
									>
										<Card
											sx={{
												textAlign: 'center',
												p: 4,
												height: '100%',
												background: 'transparent',
												border: `2px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
												backdropFilter: 'blur(10px)',
												transition: 'all 0.3s ease',
												'&:hover': {
													borderColor: 'primary.main',
													boxShadow: `0 20px 40px ${isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)'}`,
												},
											}}
										>
											<Box
												sx={{
													color: 'primary.main',
													mb: 2,
													fontSize: '3rem',
												}}
											>
												{stat.icon}
											</Box>
											<Typography
												variant="h2"
												component="div"
												sx={{
													fontWeight: 800,
													background:
														'linear-gradient(45deg, #667eea, #764ba2)',
													backgroundClip: 'text',
													WebkitBackgroundClip:
														'text',
													WebkitTextFillColor:
														'transparent',
													mb: 1,
												}}
											>
												{stat.number}
												{stat.suffix || ''}
											</Typography>
											<Typography
												variant="h6"
												color="text.secondary"
											>
												{stat.label}
											</Typography>
										</Card>
									</motion.div>
								</Grid>
							))}
						</Grid>
					</Container>
				</Box>
			</motion.div>

			{/* Journey/Timeline Section */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<Container maxWidth="lg">
					<Box sx={{ py: 12 }}>
						<Typography
							variant="h3"
							component="h2"
							sx={{ mb: 8, textAlign: 'center', fontWeight: 600 }}
						>
							My Journey
						</Typography>
						<Box sx={{ position: 'relative' }}>
							{/* Timeline Line */}
							<Box
								sx={{
									position: 'absolute',
									left: { xs: '20px', md: '50%' },
									top: 0,
									bottom: 0,
									width: '2px',
									background:
										'linear-gradient(to bottom, #667eea, #764ba2)',
									transform: { md: 'translateX(-50%)' },
								}}
							/>
							{journey.map((item, index) => (
								<motion.div
									key={item.year}
									initial={{
										opacity: 0,
										x: index % 2 === 0 ? -100 : 100,
									}}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{
										delay: index * 0.2,
										duration: 0.6,
									}}
									viewport={{ once: true }}
								>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											mb: 6,
											flexDirection: {
												xs: 'row',
												md:
													index % 2 === 0
														? 'row'
														: 'row-reverse',
											},
										}}
									>
										<Box
											sx={{
												flex: { xs: 'none', md: 1 },
												textAlign: {
													xs: 'left',
													md:
														index % 2 === 0
															? 'right'
															: 'left',
												},
												pr: {
													xs: 0,
													md: index % 2 === 0 ? 4 : 0,
												},
												pl: {
													xs: 0,
													md: index % 2 === 0 ? 0 : 4,
												},
												ml: { xs: 3, md: 0 },
											}}
										>
											<Card
												sx={{
													p: 3,
													maxWidth: {
														xs: '100%',
														md: 400,
													},
													ml: {
														xs: 0,
														md:
															index % 2 === 0
																? 'auto'
																: 0,
													},
													mr: {
														xs: 0,
														md:
															index % 2 === 0
																? 0
																: 'auto',
													},
													cursor: 'pointer',
													transition: 'all 0.3s ease',
													'&:hover': {
														transform:
															'translateY(-5px)',
														boxShadow: `0 20px 40px ${isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
													},
												}}
											>
												<Typography
													variant="h6"
													sx={{
														color: 'primary.main',
														fontWeight: 700,
														mb: 1,
													}}
												>
													{item.year}
												</Typography>
												<Typography
													variant="h5"
													sx={{
														mb: 2,
														fontWeight: 600,
													}}
												>
													{item.title}
												</Typography>
												<Typography
													variant="body1"
													color="text.secondary"
												>
													{item.description}
												</Typography>
											</Card>
										</Box>
										{/* Timeline Node */}
										<Box
											sx={{
												position: {
													xs: 'absolute',
													md: 'relative',
												},
												left: {
													xs: '11px',
													md: 'auto',
												},
												width: 60,
												height: 60,
												borderRadius: '50%',
												background:
													'linear-gradient(45deg, #667eea, #764ba2)',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: 'white',
												fontSize: '1.5rem',
												boxShadow:
													'0 4px 20px rgba(102, 126, 234, 0.3)',
												zIndex: 2,
											}}
										>
											{item.icon}
										</Box>
									</Box>
								</motion.div>
							))}
						</Box>
					</Box>
				</Container>
			</motion.div>

			{/* Interactive Quote Section */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<Box
					sx={{
						py: 12,
						background: isDarkMode
							? 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(220, 0, 78, 0.05) 100%)'
							: 'linear-gradient(135deg, rgba(25, 118, 210, 0.03) 0%, rgba(220, 0, 78, 0.03) 100%)',
						position: 'relative',
						overflow: 'hidden',
					}}
				>
					<Container maxWidth="md">
						<motion.div
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<Typography
								variant="h3"
								component="blockquote"
								sx={{
									textAlign: 'center',
									fontStyle: 'italic',
									fontWeight: 300,
									lineHeight: 1.4,
									position: 'relative',
									'&::before': {
										content: '""',
										fontSize: '4rem',
										position: 'absolute',
										top: -20,
										left: -20,
										color: 'primary.main',
										opacity: 0.3,
									},
									'&::after': {
										content: '""',
										fontSize: '4rem',
										position: 'absolute',
										bottom: -40,
										right: -20,
										color: 'primary.main',
										opacity: 0.3,
									},
								}}
							>
								Code is like humor. When you have to explain it,
								it's bad.
							</Typography>
							<Typography
								variant="h6"
								sx={{
									textAlign: 'center',
									mt: 4,
									color: 'text.secondary',
									fontWeight: 500,
								}}
							>
								— Cory House
							</Typography>
						</motion.div>
					</Container>
				</Box>
			</motion.div>

			{/* Ready to Work Together Section */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<Container maxWidth="lg">
					<Box sx={{ py: { xs: 8, md: 12 } }}>
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<Card
								sx={{
									background:
										'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
											'linear-gradient(45deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.12) 100%)',
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
												component={motion.button}
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
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
												component={motion.button}
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
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
		</div>
	);
};

export default Home;

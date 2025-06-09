import React, { useRef, useEffect } from 'react';
import {
	Container,
	Box,
	Typography,
	Grid,
	Card,
	CardContent,
	Avatar,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	LinearProgress,
} from '@mui/material';
import {
	School as SchoolIcon,
	Work as WorkIcon,
	CheckCircle as CheckCircleIcon,
	Code as CodeIcon,
	Palette as PaletteIcon,
	Speed as SpeedIcon,
} from '@mui/icons-material';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useTheme as useCustomTheme } from '../../ThemeContext';

const About: React.FC = () => {
	const { mode } = useCustomTheme();
	const isDarkMode = mode === 'dark';
	const controlsSkill = useAnimation();
	const skillsRef = useRef(null);
	const isSkillsInView = useInView(skillsRef, {
		once: true,
		margin: '-100px',
	});

	useEffect(() => {
		if (isSkillsInView) {
			controlsSkill.start('visible');
		}
	}, [controlsSkill, isSkillsInView]);

	const skillCategories = [
		{
			name: 'Frontend',
			icon: <CodeIcon />,
			skills: [
				{ name: 'React', level: 95 },
				{ name: 'TypeScript', level: 90 },
				{ name: 'JavaScript', level: 95 },
				{ name: 'HTML5/CSS3', level: 95 },
				{ name: 'Material-UI', level: 85 },
				{ name: 'Framer Motion', level: 80 },
			],
		},
		{
			name: 'Backend',
			icon: <SpeedIcon />,
			skills: [
				{ name: 'Node.js', level: 85 },
				{ name: 'Express.js', level: 80 },
				{ name: 'MongoDB', level: 75 },
				{ name: 'PostgreSQL', level: 70 },
				{ name: 'REST APIs', level: 85 },
				{ name: 'GraphQL', level: 65 },
			],
		},
		{
			name: 'Design & Tools',
			icon: <PaletteIcon />,
			skills: [
				{ name: 'Figma', level: 85 },
				{ name: 'Adobe Creative Suite', level: 75 },
				{ name: 'Git/GitHub', level: 90 },
				{ name: 'AWS', level: 70 },
				{ name: 'Docker', level: 65 },
				{ name: 'Jest/Testing', level: 80 },
			],
		},
	];

	const experiences = [
		{
			title: 'Senior Front-End Developer',
			company: 'Tech Solutions Inc.',
			period: '2022 - Present',
			description:
				'Lead front-end development for enterprise applications using React and TypeScript.',
		},
		{
			title: 'Front-End Developer',
			company: 'Digital Studio',
			period: '2020 - 2022',
			description:
				'Developed responsive web applications and collaborated with design teams.',
		},
		{
			title: 'Junior Developer',
			company: 'StartUp Co.',
			period: '2019 - 2020',
			description:
				'Built user interfaces and gained experience with modern web technologies.',
		},
	];

	const education = [
		{
			degree: 'Bachelor of Computer Science',
			school: 'University of Technology',
			period: '2015 - 2019',
		},
		{
			degree: 'Full Stack Web Development Bootcamp',
			school: 'Code Academy',
			period: '2019',
		},
	];

	const achievements = [
		'Built 20+ responsive web applications',
		'Reduced page load times by 40% through optimization',
		'Led a team of 5 developers on a major project',
		'Contributed to open-source projects',
		'Certified AWS Solutions Architect',
	];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			<Container maxWidth="lg">
				<Box sx={{ py: 8 }}>
					{/* Header Section */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<Box sx={{ textAlign: 'center', mb: 8 }}>
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{
									duration: 0.6,
									delay: 0.4,
									type: 'spring',
									stiffness: 200,
								}}
								whileHover={{
									scale: 1.1,
									rotate: 5,
									transition: { duration: 0.3 },
								}}
							>
								<Avatar
									sx={{
										width: 150,
										height: 150,
										mx: 'auto',
										mb: 3,
										fontSize: '3rem',
										background: isDarkMode
											? 'linear-gradient(45deg, #818cf8, #f472b6)'
											: 'linear-gradient(45deg, #6366f1, #ec4899)',
										cursor: 'pointer',
										boxShadow: isDarkMode
											? '0 8px 32px rgba(129, 140, 248, 0.3)'
											: '0 8px 32px rgba(99, 102, 241, 0.3)',
									}}
								>
									<motion.span
										animate={{
											textShadow: isDarkMode
												? '0 0 20px rgba(244, 114, 182, 0.5)'
												: '0 0 20px rgba(236, 72, 153, 0.5)',
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											repeatType: 'reverse',
										}}
									>
										JD
									</motion.span>
								</Avatar>
							</motion.div>

							<Typography
								variant="h2"
								component="h1"
								sx={{
									mb: 2,
									background: isDarkMode
										? 'linear-gradient(45deg, #f8fafc, #cbd5e1)'
										: 'linear-gradient(45deg, #1f2937, #6b7280)',
									backgroundClip: 'text',
									textFillColor: 'transparent',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
								}}
							>
								About Me
							</Typography>
							<Typography
								variant="h5"
								component="p"
								sx={{
									color: 'text.secondary',
									maxWidth: '600px',
									mx: 'auto',
								}}
							>
								I'm a passionate front-end developer with 5+
								years of experience creating beautiful,
								functional, and user-friendly web applications.
							</Typography>
						</Box>
					</motion.div>

					{/* Story Section */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8 }}
					>
						<Box sx={{ mb: 8 }}>
							<Typography
								variant="h4"
								component="h2"
								sx={{ mb: 4 }}
							>
								My Story
							</Typography>
							<Grid container spacing={4}>
								<Grid size={{ xs: 12, md: 6 }}>
									<motion.div
										initial={{ opacity: 0, x: -50 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.6,
											delay: 0.2,
										}}
									>
										<Typography
											variant="body1"
											sx={{ mb: 3, lineHeight: 1.8 }}
										>
											My journey into web development
											started during my computer science
											studies, where I discovered my
											passion for creating intuitive user
											experiences. What began as curiosity
											quickly evolved into a career
											dedicated to crafting exceptional
											digital solutions.
										</Typography>
										<Typography
											variant="body1"
											sx={{ lineHeight: 1.8 }}
										>
											I believe in the power of clean
											code, thoughtful design, and
											continuous learning. Every project
											is an opportunity to push boundaries
											and create something meaningful that
											makes a difference in users' lives.
										</Typography>
									</motion.div>
								</Grid>
								<Grid size={{ xs: 12, md: 6 }}>
									<motion.div
										initial={{ opacity: 0, x: 50 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.6,
											delay: 0.4,
										}}
									>
										<Typography
											variant="body1"
											sx={{ mb: 3, lineHeight: 1.8 }}
										>
											When I'm not coding, you can find me
											exploring new technologies,
											contributing to open-source
											projects, or sharing knowledge with
											the developer community. I'm always
											excited to take on new challenges
											and collaborate with talented teams.
										</Typography>
										<Typography
											variant="body1"
											sx={{ lineHeight: 1.8 }}
										>
											I'm currently focused on modern
											React development, performance
											optimization, and building scalable
											applications that can grow with
											business needs.
										</Typography>
									</motion.div>
								</Grid>
							</Grid>
						</Box>
					</motion.div>

					{/* Enhanced Skills Section */}
					<motion.div
						ref={skillsRef}
						initial={{ opacity: 0, y: 50 }}
						animate={controlsSkill}
						variants={{
							visible: {
								opacity: 1,
								y: 0,
								transition: { duration: 0.8 },
							},
						}}
					>
						<Box sx={{ mb: 8 }}>
							<Typography
								variant="h4"
								component="h2"
								sx={{ mb: 4 }}
							>
								Skills & Expertise
							</Typography>
							<Grid container spacing={4}>
								{skillCategories.map(
									(category, categoryIndex) => (
										<Grid
											size={{ xs: 12, md: 4 }}
											key={category.name}
										>
											<motion.div
												initial={{ opacity: 0, y: 30 }}
												animate={
													isSkillsInView
														? { opacity: 1, y: 0 }
														: {}
												}
												transition={{
													duration: 0.6,
													delay:
														categoryIndex * 0.2 +
														0.3,
												}}
											>
												<Card
													sx={{
														height: '100%',
														transition:
															'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
														'&:hover': {
															transform:
																'translateY(-8px)',
															boxShadow:
																isDarkMode
																	? '0 20px 40px rgba(129, 140, 248, 0.2)'
																	: '0 20px 40px rgba(0, 0, 0, 0.1)',
														},
													}}
												>
													<CardContent>
														<Box
															sx={{
																display: 'flex',
																alignItems:
																	'center',
																mb: 3,
															}}
														>
															<motion.div
																whileHover={{
																	rotate: 360,
																}}
																transition={{
																	duration: 0.6,
																}}
															>
																<Avatar
																	sx={{
																		bgcolor:
																			'primary.main',
																		mr: 2,
																		width: 48,
																		height: 48,
																	}}
																>
																	{
																		category.icon
																	}
																</Avatar>
															</motion.div>
															<Typography
																variant="h5"
																component="h3"
															>
																{category.name}
															</Typography>
														</Box>

														<Box>
															{category.skills.map(
																(
																	skill,
																	skillIndex
																) => (
																	<motion.div
																		key={
																			skill.name
																		}
																		initial={{
																			opacity: 0,
																			x: -20,
																		}}
																		animate={
																			controlsSkill
																		}
																		variants={{
																			visible:
																				{
																					opacity: 1,
																					x: 0,
																				},
																		}}
																		transition={{
																			delay:
																				categoryIndex *
																					0.2 +
																				skillIndex *
																					0.1 +
																				1.5,
																		}}
																	>
																		<Box
																			sx={{
																				mb: 2,
																			}}
																		>
																			<Box
																				sx={{
																					display:
																						'flex',
																					justifyContent:
																						'space-between',
																					mb: 1,
																				}}
																			>
																				<Typography
																					variant="body2"
																					sx={{
																						fontWeight: 500,
																					}}
																				>
																					{
																						skill.name
																					}
																				</Typography>
																				<Typography
																					variant="body2"
																					color="text.secondary"
																				>
																					{
																						skill.level
																					}

																					%
																				</Typography>
																			</Box>
																			<motion.div
																				initial={{
																					scaleX: 0,
																				}}
																				animate={
																					isSkillsInView
																						? {
																								scaleX: 1,
																							}
																						: {}
																				}
																				transition={{
																					duration: 1,
																					delay:
																						categoryIndex *
																							0.2 +
																						skillIndex *
																							0.1 +
																						0.8,
																				}}
																				style={{
																					transformOrigin:
																						'left',
																				}}
																			>
																				<LinearProgress
																					variant="determinate"
																					value={
																						skill.level
																					}
																					sx={{
																						height: 8,
																						borderRadius: 4,
																						backgroundColor:
																							'rgba(0, 0, 0, 0.1)',
																						'& .MuiLinearProgress-bar':
																							{
																								borderRadius: 4,
																								background:
																									isDarkMode
																										? 'linear-gradient(45deg, #818cf8, #f472b6)'
																										: 'linear-gradient(45deg, #6366f1, #ec4899)',
																							},
																					}}
																				/>
																			</motion.div>
																		</Box>
																	</motion.div>
																)
															)}
														</Box>
													</CardContent>
												</Card>
											</motion.div>
										</Grid>
									)
								)}
							</Grid>
						</Box>
					</motion.div>

					{/* Experience Section */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8 }}
					>
						<Box sx={{ mb: 8 }}>
							<Typography
								variant="h4"
								component="h2"
								sx={{ mb: 4 }}
							>
								Experience
							</Typography>
							<Grid container spacing={4}>
								{experiences.map((exp, index) => (
									<Grid size={{ xs: 12, md: 6 }} key={index}>
										<motion.div
											initial={{
												opacity: 0,
												x: index % 2 === 0 ? -50 : 50,
											}}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.6,
												delay: index * 0.2,
											}}
										>
											<Card
												sx={{
													height: '100%',
													transition: 'all 0.3s ease',
													'&:hover': {
														transform:
															'translateY(-4px)',
														boxShadow: isDarkMode
															? '0 12px 24px rgba(129, 140, 248, 0.15)'
															: '0 12px 24px rgba(0, 0, 0, 0.1)',
													},
												}}
											>
												<CardContent>
													<Box
														sx={{
															display: 'flex',
															alignItems:
																'center',
															mb: 2,
														}}
													>
														<WorkIcon
															sx={{
																color: 'primary.main',
																mr: 2,
															}}
														/>
														<Box>
															<Typography
																variant="h6"
																component="h3"
															>
																{exp.title}
															</Typography>
															<Typography
																variant="subtitle2"
																color="text.secondary"
															>
																{exp.company} •{' '}
																{exp.period}
															</Typography>
														</Box>
													</Box>
													<Typography
														variant="body2"
														sx={{ lineHeight: 1.6 }}
													>
														{exp.description}
													</Typography>
												</CardContent>
											</Card>
										</motion.div>
									</Grid>
								))}
							</Grid>
						</Box>
					</motion.div>

					{/* Education & Achievements */}
					<Grid container spacing={4}>
						{/* Education */}
						<Grid size={{ xs: 12, md: 6 }}>
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8 }}
							>
								<Box sx={{ mb: 4 }}>
									<Typography
										variant="h4"
										component="h2"
										sx={{ mb: 3 }}
									>
										Education
									</Typography>
									{education.map((edu, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.6,
												delay: index * 0.2,
											}}
										>
											<Card
												sx={{
													mb: 2,
													'&:hover': { boxShadow: 3 },
												}}
											>
												<CardContent>
													<Box
														sx={{
															display: 'flex',
															alignItems:
																'center',
														}}
													>
														<SchoolIcon
															sx={{
																color: 'primary.main',
																mr: 2,
															}}
														/>
														<Box>
															<Typography variant="h6">
																{edu.degree}
															</Typography>
															<Typography
																variant="body2"
																color="text.secondary"
															>
																{edu.school} •{' '}
																{edu.period}
															</Typography>
														</Box>
													</Box>
												</CardContent>
											</Card>
										</motion.div>
									))}
								</Box>
							</motion.div>
						</Grid>

						{/* Achievements */}
						<Grid size={{ xs: 12, md: 6 }}>
							<motion.div
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8 }}
							>
								<Box>
									<Typography
										variant="h4"
										component="h2"
										sx={{ mb: 3 }}
									>
										Achievements
									</Typography>
									<List>
										{achievements.map(
											(achievement, index) => (
												<motion.div
													key={index}
													initial={{
														opacity: 0,
														x: 20,
													}}
													whileInView={{
														opacity: 1,
														x: 0,
													}}
													viewport={{ once: true }}
													transition={{
														duration: 0.6,
														delay: index * 0.1,
													}}
												>
													<ListItem>
														<ListItemIcon>
															<motion.div
																whileHover={{
																	scale: 1.2,
																	rotate: 180,
																}}
																transition={{
																	duration: 0.3,
																}}
															>
																<CheckCircleIcon
																	sx={{
																		color: 'success.main',
																	}}
																/>
															</motion.div>
														</ListItemIcon>
														<ListItemText
															primary={
																achievement
															}
														/>
													</ListItem>
												</motion.div>
											)
										)}
									</List>
								</Box>
							</motion.div>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</motion.div>
	);
};

export default About;

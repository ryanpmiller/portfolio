import React, { useState } from 'react';
import {
	Container,
	Box,
	Typography,
	Grid,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Button,
	Chip,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	IconButton,
	Tabs,
	Tab,
} from '@mui/material';
import {
	GitHub as GitHubIcon,
	Launch as LaunchIcon,
	Close as CloseIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useTheme as useCustomTheme } from '../../ThemeContext';
import * as ProjectsConfig from '../../data/projectsConfig';

// Type assertion to fix Framer Motion v11 compatibility issue
const AnimatePresenceFixed = AnimatePresence as React.ComponentType<
	React.ComponentProps<typeof AnimatePresence>
>;

const Projects: React.FC = () => {
	const [selectedProject, setSelectedProject] =
		useState<ProjectsConfig.Project | null>(null);
	const [tabValue, setTabValue] = useState(0);

	const filteredProjects =
		tabValue === 0
			? ProjectsConfig.projects
			: ProjectsConfig.projects.filter(
					(project: ProjectsConfig.Project) =>
						project.category ===
						ProjectsConfig.categories[tabValue].value
				);

	const handleProjectClick = (project: ProjectsConfig.Project) => {
		setSelectedProject(project);
	};

	const handleCloseDialog = () => {
		setSelectedProject(null);
	};

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setTabValue(newValue);
	};

	const { mode } = useCustomTheme();
	const isDarkMode = mode === 'dark';

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			<Container maxWidth="lg">
				<Box sx={{ py: 8 }}>
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<Box sx={{ textAlign: 'center', mb: 6 }}>
							<Typography
								variant="h2"
								component="h1"
								sx={{
									mb: 2,
									background: isDarkMode
										? 'linear-gradient(45deg, #818cf8, #f472b6)'
										: 'linear-gradient(45deg, #6366f1, #ec4899)',
									backgroundClip: 'text',
									textFillColor: 'transparent',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
								}}
							>
								My Projects
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
								A showcase of my work, from web applications to
								mobile apps and full-stack solutions
							</Typography>
						</Box>
					</motion.div>

					{/* Category Filter */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<Box
							sx={{
								mb: 6,
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<Tabs
								value={tabValue}
								onChange={handleTabChange}
								aria-label="project categories"
								sx={{
									'& .MuiTab-root': {
										textTransform: 'none',
										fontSize: '1rem',
										fontWeight: 500,
										transition: 'all 0.3s ease',
										'&:hover': {
											transform: 'translateY(-2px)',
										},
									},
									'& .MuiTabs-indicator': {
										height: 3,
										borderRadius: 1.5,
									},
								}}
							>
								{ProjectsConfig.categories.map(
									(category, _index) => (
										<Tab
											key={category.value}
											label={category.label}
										/>
									)
								)}
							</Tabs>
						</Box>
					</motion.div>

					{/* Projects Grid */}
					<AnimatePresenceFixed mode="wait">
						<motion.div
							key={tabValue}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5 }}
						>
							<Grid container spacing={4}>
								{filteredProjects.map(
									(
										project: ProjectsConfig.Project,
										index: number
									) => (
										<Grid
											size={{ xs: 12, md: 6, lg: 4 }}
											key={project.id}
										>
											<motion.div
												initial={{ opacity: 0, y: 30 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{
													duration: 0.6,
													delay: index * 0.1 + 0.6,
													ease: 'easeOut',
												}}
												whileHover={{
													y: -8,
													transition: {
														duration: 0.3,
													},
												}}
											>
												<Card
													sx={{
														height: '100%',
														display: 'flex',
														flexDirection: 'column',
														cursor: 'pointer',
														transition:
															'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
														border: '1px solid transparent',
														'&:hover': {
															boxShadow:
																isDarkMode
																	? '0 20px 40px rgba(129, 140, 248, 0.2)'
																	: '0 20px 40px rgba(0, 0, 0, 0.1)',
															borderColor:
																isDarkMode
																	? '#475569'
																	: '#e5e7eb',
														},
													}}
													onClick={() =>
														handleProjectClick(
															project
														)
													}
												>
													<motion.div
														whileHover={{
															scale: 1.02,
														}}
														transition={{
															duration: 0.3,
														}}
													>
														<CardMedia
															component="div"
															sx={{
																height: 200,
																background:
																	isDarkMode
																		? 'linear-gradient(135deg, #1e293b, #334155)'
																		: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
																display: 'flex',
																alignItems:
																	'center',
																justifyContent:
																	'center',
																position:
																	'relative',
																overflow:
																	'hidden',
															}}
														>
															<motion.div
																initial={{
																	scale: 0.8,
																	opacity: 0,
																}}
																animate={{
																	scale: 1,
																	opacity: 1,
																}}
																transition={{
																	delay:
																		index *
																			0.1 +
																		0.8,
																}}
															>
																<Typography
																	variant="h6"
																	color="text.secondary"
																>
																	{
																		project.title
																	}
																</Typography>
															</motion.div>
														</CardMedia>
													</motion.div>

													<CardContent
														sx={{ flexGrow: 1 }}
													>
														<Typography
															variant="h5"
															component="h3"
															sx={{ mb: 1 }}
														>
															{project.title}
														</Typography>
														<Typography
															variant="body2"
															color="text.secondary"
															sx={{
																mb: 2,
																lineHeight: 1.6,
															}}
														>
															{
																project.description
															}
														</Typography>
														<Box
															sx={{
																display: 'flex',
																flexWrap:
																	'wrap',
																gap: 0.5,
															}}
														>
															{project.technologies
																.slice(0, 3)
																.map(
																	(
																		tech: string,
																		techIndex: number
																	) => (
																		<motion.div
																			key={
																				tech
																			}
																			initial={{
																				opacity: 0,
																				scale: 0.8,
																			}}
																			animate={{
																				opacity: 1,
																				scale: 1,
																			}}
																			transition={{
																				delay:
																					index *
																						0.1 +
																					techIndex *
																						0.05 +
																					1,
																			}}
																		>
																			<Chip
																				label={
																					tech
																				}
																				size="small"
																				variant="outlined"
																				sx={{
																					transition:
																						'all 0.3s ease',
																					'&:hover':
																						{
																							transform:
																								'scale(1.05)',
																							backgroundColor:
																								'primary.main',
																							color: 'primary.contrastText',
																						},
																				}}
																			/>
																		</motion.div>
																	)
																)}
															{project
																.technologies
																.length > 3 && (
																<Chip
																	label={`+${project.technologies.length - 3}`}
																	size="small"
																	variant="outlined"
																/>
															)}
														</Box>
													</CardContent>

													<CardActions
														sx={{ p: 2, pt: 0 }}
													>
														<Button
															component={
																motion.button
															}
															whileHover={{
																scale: 1.05,
															}}
															whileTap={{
																scale: 0.95,
															}}
															size="small"
															startIcon={
																<GitHubIcon />
															}
															onClick={e => {
																e.stopPropagation();
																window.open(
																	project.githubUrl,
																	'_blank'
																);
															}}
															sx={{
																borderRadius: 3,
																transition:
																	'all 0.3s ease',
															}}
														>
															Code
														</Button>
														<Button
															component={
																motion.button
															}
															whileHover={{
																scale: 1.05,
															}}
															whileTap={{
																scale: 0.95,
															}}
															size="small"
															startIcon={
																<LaunchIcon />
															}
															variant="contained"
															onClick={e => {
																e.stopPropagation();
																window.open(
																	project.liveUrl,
																	'_blank'
																);
															}}
															sx={{
																borderRadius: 3,
																transition:
																	'all 0.3s ease',
															}}
														>
															Live Demo
														</Button>
													</CardActions>
												</Card>
											</motion.div>
										</Grid>
									)
								)}
							</Grid>
						</motion.div>
					</AnimatePresenceFixed>

					{/* Project Detail Dialog */}
					<AnimatePresenceFixed>
						{selectedProject && (
							<Dialog
								open={!!selectedProject}
								onClose={handleCloseDialog}
								maxWidth="md"
								fullWidth
								sx={{
									'& .MuiDialog-paper': {
										animation: 'dialogFadeIn 0.3s ease-out',
									},
									'@keyframes dialogFadeIn': {
										'0%': {
											opacity: 0,
											transform:
												'scale(0.8) translateY(50px)',
										},
										'100%': {
											opacity: 1,
											transform: 'scale(1) translateY(0)',
										},
									},
								}}
							>
								<DialogTitle
									sx={{
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<Typography
										variant="h4"
										component="span"
										sx={{ flexGrow: 1 }}
									>
										{selectedProject.title}
									</Typography>
									<IconButton
										component={motion.button}
										whileHover={{ rotate: 90 }}
										whileTap={{ scale: 0.9 }}
										onClick={handleCloseDialog}
									>
										<CloseIcon />
									</IconButton>
								</DialogTitle>
								<DialogContent>
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 }}
									>
										<Box
											sx={{
												height: 250,
												background: isDarkMode
													? 'linear-gradient(135deg, #1e293b, #334155)'
													: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												mb: 3,
												borderRadius: 2,
												border: '1px solid',
												borderColor: 'divider',
											}}
										>
											<Typography
												variant="h6"
												color="text.secondary"
											>
												{selectedProject.title}
											</Typography>
										</Box>
									</motion.div>

									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.3 }}
									>
										<Typography
											variant="body1"
											sx={{ mb: 3, lineHeight: 1.7 }}
										>
											{selectedProject.fullDescription}
										</Typography>
									</motion.div>

									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.4 }}
									>
										<Typography variant="h6" sx={{ mb: 2 }}>
											Technologies Used:
										</Typography>
										<Box
											sx={{
												display: 'flex',
												flexWrap: 'wrap',
												gap: 1,
												mb: 3,
											}}
										>
											{selectedProject.technologies.map(
												(tech, index) => (
													<motion.div
														key={tech}
														initial={{
															opacity: 0,
															scale: 0.8,
														}}
														animate={{
															opacity: 1,
															scale: 1,
														}}
														transition={{
															delay:
																0.5 +
																index * 0.05,
														}}
													>
														<Chip
															label={tech}
															variant="outlined"
															sx={{
																transition:
																	'all 0.3s ease',
																'&:hover': {
																	transform:
																		'scale(1.05)',
																	backgroundColor:
																		'primary.main',
																	color: 'primary.contrastText',
																},
															}}
														/>
													</motion.div>
												)
											)}
										</Box>
									</motion.div>
								</DialogContent>
								<DialogActions sx={{ p: 3, pt: 0 }}>
									<Button
										component={motion.button}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										startIcon={<GitHubIcon />}
										onClick={() =>
											window.open(
												selectedProject.githubUrl,
												'_blank'
											)
										}
										sx={{ borderRadius: 3 }}
									>
										View Code
									</Button>
									<Button
										component={motion.button}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										variant="contained"
										startIcon={<LaunchIcon />}
										onClick={() =>
											window.open(
												selectedProject.liveUrl,
												'_blank'
											)
										}
										sx={{ borderRadius: 3 }}
									>
										Live Demo
									</Button>
								</DialogActions>
							</Dialog>
						)}
					</AnimatePresenceFixed>
				</Box>
			</Container>
		</motion.div>
	);
};

export default Projects;

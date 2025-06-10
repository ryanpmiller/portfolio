import React, { useState } from 'react';
import {
	Container,
	Box,
	Typography,
	Grid,
	Card,
	CardContent,
	TextField,
	Button,
	Alert,
	IconButton,
	Link,
} from '@mui/material';
import {
	Email as EmailIcon,
	Phone as PhoneIcon,
	LocationOn as LocationIcon,
	LinkedIn as LinkedInIcon,
	GitHub as GitHubIcon,
	Send as SendIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { getEnvVar } from '../../utils/env';

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const Contact: React.FC = () => {
	// Environment variables
	const contactEmail = getEnvVar('VITE_CONTACT_EMAIL', 'contact@example.com');

	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		'success' | 'error' | null
	>(null);

	const contactInfo = [
		{
			icon: <EmailIcon color="primary" />,
			title: 'Email',
			value: contactEmail,
			link: `mailto:${contactEmail}`,
		},
		{
			icon: <PhoneIcon color="primary" />,
			title: 'Phone',
			value: '+1 (555) 123-4567',
			link: 'tel:+15551234567',
		},
		{
			icon: <LocationIcon color="primary" />,
			title: 'Location',
			value: 'San Francisco, CA',
			link: null,
		},
	];

	const socialLinks = [
		{
			icon: <LinkedInIcon />,
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/example',
		},
		{
			icon: <GitHubIcon />,
			name: 'GitHub',
			url: 'https://github.com/example',
		},
	];

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1000));

			// In a real application, you would send the form data to your backend
			// TODO: Replace with actual API call

			setSubmitStatus('success');
			setFormData({
				name: '',
				email: '',
				subject: '',
				message: '',
			});
		} catch {
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	const isFormValid = () => {
		return (
			formData.name.trim() &&
			formData.email.trim() &&
			formData.subject.trim() &&
			formData.message.trim()
		);
	};

	return (
		<Container maxWidth="lg">
			<Box sx={{ py: 8 }}>
				{/* Header */}
				<Box sx={{ textAlign: 'center', mb: 8 }}>
					<Typography variant="h2" component="h1" sx={{ mb: 2 }}>
						Get In Touch
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
						Have a project in mind or just want to chat? I'd love to
						hear from you. Let's create something amazing together!
					</Typography>
				</Box>

				<Grid container spacing={6}>
					{/* Contact Form */}
					<Grid size={{ xs: 12, md: 8 }}>
						<Card>
							<CardContent sx={{ p: 4 }}>
								<Typography
									variant="h4"
									component="h2"
									sx={{ mb: 3 }}
								>
									Send Message
								</Typography>
								{submitStatus === 'success' && (
									<Alert severity="success" sx={{ mb: 3 }}>
										Thank you for your message! I'll get
										back to you soon.
									</Alert>
								)}
								{submitStatus === 'error' && (
									<Alert severity="error" sx={{ mb: 3 }}>
										Something went wrong. Please try again
										later.
									</Alert>
								)}
								<Box component="form" onSubmit={handleSubmit}>
									<Grid container spacing={3}>
										<Grid size={{ xs: 12, sm: 6 }}>
											<TextField
												fullWidth
												label="Name"
												name="name"
												value={formData.name}
												onChange={handleInputChange}
												required
												variant="outlined"
											/>
										</Grid>
										<Grid size={{ xs: 12, sm: 6 }}>
											<TextField
												fullWidth
												label="Email"
												name="email"
												type="email"
												value={formData.email}
												onChange={handleInputChange}
												required
												variant="outlined"
											/>
										</Grid>
										<Grid size={{ xs: 12 }}>
											<TextField
												fullWidth
												label="Subject"
												name="subject"
												value={formData.subject}
												onChange={handleInputChange}
												required
												variant="outlined"
											/>
										</Grid>
										<Grid size={{ xs: 12 }}>
											<TextField
												fullWidth
												label="Message"
												name="message"
												multiline
												rows={6}
												value={formData.message}
												onChange={handleInputChange}
												required
												variant="outlined"
											/>
										</Grid>
										<Grid size={{ xs: 12 }}>
											<Button
												component={motion.button}
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												type="submit"
												variant="contained"
												size="large"
												endIcon={<SendIcon />}
												disabled={
													!isFormValid() ||
													isSubmitting
												}
												sx={{ px: 4, py: 1.5 }}
											>
												{isSubmitting
													? 'Sending...'
													: 'Send Message'}
											</Button>
										</Grid>
									</Grid>
								</Box>
							</CardContent>
						</Card>
					</Grid>

					{/* Contact Information */}
					<Grid size={{ xs: 12, md: 4 }}>
						<Box sx={{ mb: 4 }}>
							<Typography
								variant="h4"
								component="h2"
								sx={{ mb: 3 }}
							>
								Contact Info
							</Typography>
							{contactInfo.map((info, index) => (
								<Card key={index} sx={{ mb: 2 }}>
									<CardContent>
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',
												mb: 1,
											}}
										>
											{info.icon}
											<Typography
												variant="h6"
												sx={{ ml: 2 }}
											>
												{info.title}
											</Typography>
										</Box>
										{info.link ? (
											<Link
												href={info.link}
												color="text.secondary"
												underline="hover"
												sx={{ ml: 4 }}
											>
												{info.value}
											</Link>
										) : (
											<Typography
												color="text.secondary"
												sx={{ ml: 4 }}
											>
												{info.value}
											</Typography>
										)}
									</CardContent>
								</Card>
							))}
						</Box>

						<Box>
							<Typography
								variant="h5"
								component="h3"
								sx={{ mb: 2 }}
							>
								Follow Me
							</Typography>
							<Box sx={{ display: 'flex', gap: 1 }}>
								{socialLinks.map((social, index) => (
									<IconButton
										key={index}
										component={Link}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										color="primary"
										sx={{
											border: '1px solid',
											borderColor: 'primary.main',
											'&:hover': {
												backgroundColor: 'primary.main',
												color: 'white',
											},
										}}
									>
										{social.icon}
									</IconButton>
								))}
							</Box>
						</Box>
					</Grid>
				</Grid>

				{/* CTA Section */}
				<Box
					sx={{
						mt: 8,
						p: 4,
						textAlign: 'center',
						backgroundColor: 'background.paper',
						borderRadius: 2,
					}}
				>
					<Typography variant="h4" component="h2" sx={{ mb: 2 }}>
						Ready to Start Your Project?
					</Typography>
					<Typography
						variant="body1"
						sx={{ mb: 3, color: 'text.secondary' }}
					>
						Whether you need a new website, want to improve an
						existing one, or have a custom project in mind, I'm here
						to help bring your vision to life.
					</Typography>
					<Button
						component={motion.button}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						variant="contained"
						size="large"
						href="mailto:contact@example.com"
						sx={{ px: 4, py: 1.5 }}
					>
						Let's Talk
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default Contact;

import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import {
	GitHub as GitHubIcon,
	LinkedIn as LinkedInIcon,
	Email as EmailIcon,
} from '@mui/icons-material';
import { getEnvVar } from '../../utils/env';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	// Environment variables
	const githubUrl = getEnvVar('VITE_GITHUB_URL', 'https://github.com');
	const linkedinUrl = getEnvVar('VITE_LINKEDIN_URL', 'https://linkedin.com');
	const contactEmail = getEnvVar('VITE_CONTACT_EMAIL', 'contact@example.com');

	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: 'primary.main',
				color: 'white',
				py: 3,
				mt: 'auto',
			}}
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'row' },
						justifyContent: 'space-between',
						alignItems: 'center',
						textAlign: { xs: 'center', sm: 'left' },
					}}
				>
					<Typography variant="body2" sx={{ mb: { xs: 2, sm: 0 } }}>
						© {currentYear} Portfolio. All rights reserved.
					</Typography>
					<Box sx={{ display: 'flex', gap: 1 }}>
						<IconButton
							color="inherit"
							aria-label="GitHub"
							component={Link}
							href={githubUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							<GitHubIcon />
						</IconButton>
						<IconButton
							color="inherit"
							aria-label="LinkedIn"
							component={Link}
							href={linkedinUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							<LinkedInIcon />
						</IconButton>
						<IconButton
							color="inherit"
							aria-label="Email"
							component={Link}
							href={`mailto:${contactEmail}`}
						>
							<EmailIcon />
						</IconButton>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;

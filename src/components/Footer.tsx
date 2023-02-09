import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
	return (
		<Box sx={{ backgroundColor: "primary.main", padding: 6 }} component="footer">
			<Typography variant="h6" align="center">
				Project: A Platform Connecting Patients with Depression to Medical Experts
			</Typography>
			<Typography variant="h6" align="center">
				Copyright © SPM-TEAM-8
			</Typography>
		</Box>
	);
}
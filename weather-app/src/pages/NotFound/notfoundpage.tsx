import { Paper, Typography } from '@mui/material';

function NotFound() {
	return (
		<Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
			<Typography variant="h4" gutterBottom>
				Страница не найдена!
			</Typography>
			<Typography variant="body1">Вернитесь обратно 😊</Typography>
		</Paper>
	);
}
export default NotFound;

import { Link, Outlet } from 'react-router-dom';

import * as styles from './App.scss';
import { Box, Paper, Typography } from '@mui/material';
function App() {
	return (
		<>
			<Paper elevation={12} sx={{ height: '100%' }}>
				<header className={styles.header}>
					<Typography sx={{ letterSpacing: 10 }} variant="h2">
						Weather App
					</Typography>
					<Box
						component="nav"
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							maxWidth: 500,
							width: '100%',
						}}
					>
						<Link className="nav_link" to="/">
							Главная
						</Link>

						<Link className="nav_link" to="/about">
							Обо мне
						</Link>

						<Link className="nav_link" to="/settings">
							Настройки
						</Link>
					</Box>
				</header>

				<Outlet />
			</Paper>
		</>
	);
}

export default App;

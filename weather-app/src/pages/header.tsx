import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import * as styles from './header.scss';
function Header() {
	return (
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
	);
}
export default Header;

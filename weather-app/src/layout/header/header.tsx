import { Box, Button, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import * as styles from './header.module.scss';

function Header() {
	const location = useLocation();
	const currentPath = location.pathname;
	return (
		<header className={styles.header}>
			<Typography className={styles.header_title} variant="h2">
				Weather App
			</Typography>
			<Box className={styles.nav_list} component="nav">
				<Link className="nav_link" to="/">
					<Button variant={currentPath === '/' ? 'contained' : 'outlined'}>
						Главная
					</Button>
				</Link>
				<Link className="nav_link" to="/about">
					<Button variant={currentPath === '/about' ? 'contained' : 'outlined'}>
						Обо мне
					</Button>
				</Link>
				<Link className="nav_link" to="/settings">
					<Button
						variant={currentPath === '/settings' ? 'contained' : 'outlined'}
					>
						Настройки
					</Button>
				</Link>
			</Box>
		</header>
	);
}
export default Header;

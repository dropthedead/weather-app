import { Box, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import * as styles from './header.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function Header() {
	const location = useLocation();
	const currentPath = location.pathname;
	const currentTheme = useSelector((state: RootState) => state.settings.theme);

	return (
		<header className={styles.header}>
			<Box>
				<Link to="./">
					{currentTheme === 'light' ? (
						<img src="./assets/cloudy.png" alt="logo" />
					) : (
						<img src="./assets/cloudy-night.png" alt="logo" />
					)}
				</Link>
			</Box>
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

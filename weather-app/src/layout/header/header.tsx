import React, { useState } from 'react';
import { Box, Button, Drawer, IconButton } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import * as styles from './header.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function Header() {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const location = useLocation();
	const currentPath = location.pathname;
	const currentTheme = useSelector((state: RootState) => state.settings.theme);

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}
			setDrawerOpen(open);
		};

	const navLinks = (
		<Box className={styles.nav_list} component="nav">
			<Link className="nav_link" to="/">
				<Button
					className={styles.link_btn}
					variant={currentPath === '/' ? 'contained' : 'outlined'}
					onClick={toggleDrawer(false)}
				>
					Главная
				</Button>
			</Link>
			<Link className="nav_link" to="/about">
				<Button
					className={styles.link_btn}
					variant={currentPath === '/about' ? 'contained' : 'outlined'}
					onClick={toggleDrawer(false)}
				>
					Обо мне
				</Button>
			</Link>
			<Link className="nav_link" to="/settings">
				<Button
					className={styles.link_btn}
					variant={currentPath === '/settings' ? 'contained' : 'outlined'}
					onClick={toggleDrawer(false)}
				>
					Настройки
				</Button>
			</Link>
		</Box>
	);

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
			<Box className={styles.desktopNav}>{navLinks}</Box>
			<IconButton
				className={styles.mobileMenuButton}
				onClick={toggleDrawer(true)}
				sx={{ fontSize: '40px' }}
			>
				<MenuIcon fontSize="inherit" />
			</IconButton>
			<Drawer
				anchor="right"
				open={drawerOpen}
				onClose={toggleDrawer(false)}
				classes={{ paper: styles.drawerPaper }}
			>
				<Box className={styles.drawerHeader}>
					<IconButton onClick={toggleDrawer(false)} sx={{ fontSize: '40px' }}>
						<CloseIcon fontSize="inherit" />
					</IconButton>
				</Box>
				{navLinks}
			</Drawer>
		</header>
	);
}

export default Header;

import { Outlet, useLocation } from 'react-router-dom';
import { Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import { RootState } from './store/store';
import Header from './layout/header/header';
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from './utils/framermotion';

function App() {
	const theme = useSelector((state: RootState) => state.settings.theme);
	const location = useLocation();

	return (
		<ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
			<CssBaseline />
			<Paper elevation={12} sx={{ height: '100%' }}>
				<Header />
				<div id="map"></div>
				<motion.div
					key={location.pathname}
					variants={pageVariants}
					initial="initial"
					animate="in"
					exit="out"
					transition={pageTransition}
				>
					<Outlet />
				</motion.div>
			</Paper>
		</ThemeProvider>
	);
}

export default App;

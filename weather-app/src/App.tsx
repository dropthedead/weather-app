import { Outlet } from 'react-router-dom';
// import * as styles from './App.scss';
import { Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import { RootState } from './store/store';
import Header from './pages/header';
function App() {
	const theme = useSelector((state: RootState) => state.settings.theme);
	return (
		<>
			<ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
				<CssBaseline />
				<Paper elevation={12} sx={{ height: '100%' }}>
					<Header />
					<Outlet />
				</Paper>
			</ThemeProvider>
		</>
	);
}

export default App;

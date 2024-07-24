import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import {
	changeDaysAmount,
	changeTheme,
	toggleShowRepos,
} from '../../store/slices/settings';
import {
	Box,
	FormControl,
	IconButton,
	NativeSelect,
	Switch,
	Typography,
} from '@mui/material';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import * as styles from './settings.module.scss';
function Settings() {
	const count = useSelector((state: RootState) => state.settings.days);
	const projectsVisibility = useSelector(
		(state: RootState) => state.settings.showRepos
	);
	const currentTheme = useSelector((state: RootState) => state.settings.theme);
	const dispatch = useDispatch();

	function handleChangeTheme() {
		dispatch(changeTheme());
	}
	function handleChangeDays(e: React.ChangeEvent<HTMLSelectElement>) {
		const value = e.target.value;
		dispatch(changeDaysAmount(Number(value)));
	}
	function handleToggleShowRepos() {
		dispatch(toggleShowRepos());
	}
	return (
		<>
			<Typography className={styles.settings_header} variant="h4">
				Настройки
			</Typography>
			<Box component="section">
				<Box className={styles.weather_days_choice}>
					<Typography>
						Выберите количество дней прогноза погоды по умолчанию
					</Typography>
					<FormControl>
						<NativeSelect
							defaultValue={count}
							inputProps={{
								name: 'days',
								id: 'days-select',
							}}
							onChange={handleChangeDays}
						>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
						</NativeSelect>
					</FormControl>
				</Box>
				<Box className={styles.hide_projects}>
					{projectsVisibility ? (
						<Typography>Скрыть список проектов в "Обо мне"</Typography>
					) : (
						<Typography>Показать список проектов в "Обо мне"</Typography>
					)}
					<Switch
						checked={projectsVisibility}
						onChange={handleToggleShowRepos}
					/>
				</Box>
				<Box>
					<Typography>Тема приложения</Typography>
					<Box>
						<IconButton onClick={handleChangeTheme}>
							{currentTheme === 'light' ? (
								<ModeNightOutlinedIcon />
							) : (
								<WbSunnyOutlinedIcon />
							)}
						</IconButton>
					</Box>
				</Box>
			</Box>
		</>
	);
}
export default Settings;

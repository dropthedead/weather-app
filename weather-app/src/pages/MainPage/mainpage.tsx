import RenderFetchedWeather from './components/fetchweather';
import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import * as styles from './mainpage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { changeCity } from '../../store/slices/settings';
function MainPage() {
	const currentCity = useSelector((state: RootState) => state.settings.city);
	const dispatch = useDispatch();
	function handleCityChange(event: SelectChangeEvent<string>) {
		const value = event.target.value;
		dispatch(changeCity(value));
	}
	return (
		<>
			<Box className={styles.weather_section}>
				<Box className={styles.weather_city_input}>
					<FormControl fullWidth>
						<InputLabel id="city_label">Город</InputLabel>
						<Select
							labelId="city_label"
							id="city_select"
							value={currentCity || 'Москва'}
							label="City"
							onChange={handleCityChange}
						>
							<MenuItem value={'Москва'}>Москва</MenuItem>
							<MenuItem value={'Санкт-Петербург'}>Санкт-Петербург</MenuItem>
							<MenuItem value={'Ростов-на-Дону'}>Ростов-на-Дону</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<RenderFetchedWeather city={currentCity} />
			</Box>
		</>
	);
}

export default MainPage;

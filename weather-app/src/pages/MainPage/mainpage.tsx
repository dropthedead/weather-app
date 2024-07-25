import RenderFetchedWeather from './components/fetchweather';
import {
	Box,
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import styles from './mainpage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { changeCity } from '../../store/slices/settings';
import YandexMap from '../../utils/yandexmaps';
import { API_KEY_MAPS } from '../../utils/CONSTANTS';
import { motion, AnimatePresence } from 'framer-motion';
import { pageVariants, pageTransition } from '../../utils/framermotion';

type City = 'Москва' | 'Санкт-Петербург' | 'Ростов-на-Дону';
function MainPage() {
	const currentCity = useSelector((state: RootState) => state.settings.city);
	const dispatch = useDispatch();
	function handleCityChange(event: SelectChangeEvent<string>) {
		const value = event.target.value as City;
		dispatch(changeCity(value));
	}
	return (
		<>
			<Box className={styles.weather_section}>
				<Box className={styles.weather_city_input}>
					<FormControl fullWidth>
						<Select
							id="city_select"
							value={currentCity || 'Москва'}
							onChange={handleCityChange}
							displayEmpty
							autoFocus
							renderValue={(value) =>
								value !== undefined && value !== null ? value : 'Выберите город'
							}
						>
							<MenuItem value={'Москва'}>Москва</MenuItem>
							<MenuItem value={'Санкт-Петербург'}>Санкт-Петербург</MenuItem>
							<MenuItem value={'Ростов-на-Дону'}>Ростов-на-Дону</MenuItem>
						</Select>
					</FormControl>
				</Box>

				<AnimatePresence mode="wait">
					<motion.div
						className={styles.forecast_map_wrapper}
						key={currentCity}
						variants={pageVariants}
						initial="initial"
						animate="in"
						exit="out"
						transition={pageTransition}
					>
						<RenderFetchedWeather city={currentCity} />

						<YandexMap city={currentCity} apiKey={API_KEY_MAPS} />
					</motion.div>
				</AnimatePresence>
			</Box>
		</>
	);
}

export default MainPage;

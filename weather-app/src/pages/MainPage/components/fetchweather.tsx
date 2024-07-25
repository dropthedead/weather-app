import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { API_KEY_WEATHER } from '../../../utils/CONSTANTS';
import { secondsToDate } from '../../../utils/secondsToDate';
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	CircularProgress,
	Typography,
} from '@mui/material/';
import { useSelector } from 'react-redux';
import * as styles from './fetchweather.module.scss';
import { RootState } from '../../../store/store';

const queryClient = new QueryClient();

interface WeatherData {
	error?: { message: string };
	forecast: {
		forecastday: Array<{
			date: string;
			date_epoch: number;
			day: {
				avgtemp_c: number;
				condition: {
					text: string;
					icon: string;
				};
			};
		}>;
	};
}
function FetchWeather(selectedCity: { city: string }) {
	const count = useSelector((state: RootState) => state.settings.days);

	const { city } = selectedCity;

	const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY_WEATHER}&q=${city}&days=${count}`;

	const { isLoading, error, data } = useQuery<WeatherData, Error>({
		queryKey: ['weatherData', city, count],
		queryFn: async () => {
			const response = await fetch(url);
			if (!response.ok) {
				const errorResponse = await response.json();
				throw new Error(errorResponse.error.message);
			}
			return response.json();
		},
	});

	if (isLoading)
		return (
			<p>
				<CircularProgress />
				Загрузка...
			</p>
		);

	if (error) {
		return <p>Ошибка: {error.message}</p>;
	}

	return (
		<>
			<Box className={styles.forecast_wrapper}>
				{data?.forecast?.forecastday.map((day, index) => (
					<Card className={styles.weather_card} key={index}>
						<CardMedia
							className={styles.weather_image}
							image={day.day.condition.icon.replace(/^\\\\/, '/')}
							title="Weather miniature"
						/>
						<CardContent className={styles.weather_information_wrapper}>
							<Typography gutterBottom variant="h5" component="div">
								{secondsToDate(day.date_epoch)}
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
								sx={{ textAlign: 'center' }}
							>
								Avg Temperature:
							</Typography>
							<Typography
								className={styles.weather_info_text_big}
								variant="subtitle2"
								color="text.secondary"
							>
								{day.day.avgtemp_c}°C
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Condition:
							</Typography>
							<Typography
								className={styles.weather_info_text_big}
								variant="subtitle2"
								color="text.secondary"
							>
								{day.day.condition.text}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Box>
		</>
	);
}

function RenderFetchedWeather(selectedCity: { city: string }) {
	const { city } = selectedCity;
	return (
		<QueryClientProvider client={queryClient}>
			<FetchWeather city={city} />
		</QueryClientProvider>
	);
}

export default RenderFetchedWeather;

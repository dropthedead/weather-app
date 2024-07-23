import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { API_KEY_WEATHER, DAYS } from '../../../utils/CONSTANTS';
import { secondsToDate } from '../../../utils/secondsToDate';
import { useEffect } from 'react';
const queryClient = new QueryClient();

interface WeatherData {
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
  const { city } = selectedCity;
  useEffect(() => {
    queryClient.refetchQueries();
  }, [city]);

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY_WEATHER}&q=${city}&days=${DAYS}`;
  const { isLoading, error, data } = useQuery<WeatherData, Error>(
    ['weatherData', city],
    () => fetch(url).then((response) => response.json())
  );
  console.log(data);
  if (isLoading) return <p>Загрузка...</p>;

  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <div>
      {data?.forecast.forecastday.map((day, index) => (
        <div key={index}>
          <h2>{secondsToDate(day.date_epoch)}</h2>
          <p>Avg Temperature: {day.day.avgtemp_c}°C</p>
          <p>
            Condition: {day.day.condition.text}
            <img
              src={day.day.condition.icon.replace(/^\\\\/, '/')}
              alt='Weather Icon'
            />
          </p>
        </div>
      ))}
    </div>
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

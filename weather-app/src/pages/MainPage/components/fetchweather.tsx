import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { API_KEY_WEATHER } from '../../../utils/CONSTANTS';
import { secondsToDate } from '../../../utils/secondsToDate';
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material/';
import { useSelector } from 'react-redux'

import { RootState } from '../../../store/store';

const queryClient = new QueryClient();

interface WeatherData {
  error?: {message:string}
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

  const count = useSelector((state: RootState) => state.settings.days)
 
  console.log(count)
  const { city } = selectedCity;
 
  
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY_WEATHER}&q=${city}&days=${count}`;
  // const { isLoading, error, data, } = useQuery<WeatherData, Error>(
  //   ['weatherData', city, count],
  //   () => fetch(url).then((response) => {
  //     if (response.ok) {
  //       return response.json()
  //     }
  //     throw response;
  //   } ).catch((error)=> {throw new Error(error?.message)}),{throw}
  // )
  //
  const { isLoading, error, data } = useQuery<WeatherData, string>({
    queryKey: ['weatherData', city, count],
    queryFn: async() =>{
      try {
      const response = await fetch(url)
      if(!response.ok) {
        console.log(response)
        throw new Error ('ERROR')
      }
      console.log (response)
      return response.json()
    }
    catch(error) {
      throw new Error ('ERROR')
    }
    }
  })
  // console.log(data);
 
  if (isLoading) return <p><CircularProgress />Загрузка...</p>;

  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      {data?.forecast?.forecastday.map((day, index) => (
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

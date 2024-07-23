import { useState } from 'react';

import RenderFetchedWeather from './components/fetchweather';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
function MainPage() {
  const [city, setCity] = useState<string>('Москва');

  const handleCityChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };
  return (
    <>
      <Box sx={{ maxWidth: 400 }}>
        <FormControl fullWidth>
          <InputLabel id='city_label'>Город</InputLabel>
          <Select
            labelId='city_label'
            id='city_select'
            value={city}
            label='City'
            onChange={handleCityChange}
          >
            <MenuItem value={'Москва'}>Москва</MenuItem>
            <MenuItem value={'Санкт-Петербург'}>Санкт-Петербург</MenuItem>
            <MenuItem value={'Ростов-на-Дону'}>Ростов-на-Дону</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <RenderFetchedWeather city={city} />
    </>
  );
}

export default MainPage;

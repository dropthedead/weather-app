import React, { useEffect, useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

type City = 'Москва' | 'Санкт-Петербург' | 'Ростов-на-Дону';

interface YandexMapProps {
	city: City;
	apiKey: string;
}

const coordinates: Record<City, [number, number]> = {
	Москва: [55.7558, 37.6173],
	'Санкт-Петербург': [59.9343, 30.3351],
	'Ростов-на-Дону': [47.2357, 39.7013],
};

const YandexMap: React.FC<YandexMapProps> = ({ city, apiKey }) => {
	const [mapKey, setMapKey] = useState(0);

	useEffect(() => {
		setMapKey((prevKey) => prevKey + 1);
	}, [city]);

	return (
		<YMaps query={{ apikey: apiKey }}>
			<Map
				key={mapKey}
				defaultState={{ center: coordinates[city], zoom: 7 }}
				width="400px"
				height="350px"
			>
				<Placemark geometry={coordinates[city]} />
			</Map>
		</YMaps>
	);
};

export default YandexMap;

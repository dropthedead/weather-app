import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { changeDaysAmount } from '../../store/slices/settings';
import { Box, FormControl, NativeSelect, Typography } from '@mui/material';
function Settings() {
	const count = useSelector((state: RootState) => state.settings.days);
	const dispatch = useDispatch();

	function handleChangeDays(e: React.ChangeEvent<HTMLSelectElement>) {
		const value = e.target.value;
		dispatch(changeDaysAmount(+value));
	}
	return (
		<>
			<Typography sx={{ letterSpacing: 10 }} variant="h4">
				Настройки
			</Typography>
			<Box component="section">
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
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
			</Box>
		</>
	);
}
export default Settings;

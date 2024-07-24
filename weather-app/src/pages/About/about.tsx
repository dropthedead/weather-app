import TelegramIcon from '@mui/icons-material/Telegram';
import {
	Avatar,
	Box,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Paper,
	Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import TerminalIcon from '@mui/icons-material/Terminal';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
function About() {
	const projectsVisibility = useSelector(
		(state: RootState) => state.settings.showRepos
	);
	return (
		<>
			<Box component="section">
				<Typography>Краткое резюме</Typography>
				<Box>
					<Typography variant="subtitle1">
						{`Изучаю фронтэнд-разработку уже около года, полон энтузиазма и
						желания влиться в данную сферу. Закончил три курса `}
						<a
							href="https://rs.school/"
							target="_blank"
							rel="noopener norefferer"
						>
							RsSchool
						</a>
						{` по фронтенд-разработке, был лидером команды из трёх человек, сделал
						и защитил проект `}
						<a
							href="https://valenki-online-store.netlify.app/"
							target="_blank"
							rel="noopener norefferer"
						>
							онлайн-магазина
						</a>
						{` (но, к сожалению, сейчас его нормально не потестить, т.к ключ апи
						был всего на месяц). Делал многостраничные проекты и SPA. Понимаю
						основные принципы создания и проектирования веб-приложений.`}
						<br />
						{`На данный момент продолжаю изучать React.`}
						<br />
						<TerminalIcon />
						{`На данный момент владею:`}
						<Grid container spacing={1}>
							<Grid xs={4}>
								<Paper>JavaScript</Paper>
							</Grid>
							<Grid xs={4}>
								<Paper>HTML5</Paper>
							</Grid>
							<Grid xs={4}>
								<Paper>CSS3</Paper>
							</Grid>
							<Grid xs={4}>
								<Paper>Vite</Paper>
							</Grid>
							<Grid xs={4}>
								<Paper>WebPack</Paper>
							</Grid>
							<Grid xs={4}>
								<Paper>SASS/SCSS</Paper>
							</Grid>
							<Grid xs={4}>
								<Paper>GIT</Paper>
							</Grid>
							<Grid xs={4}>
								<Paper>TypeScript</Paper>
							</Grid>
							<Grid xs={4}>
								<Paper>React</Paper>
							</Grid>
							<Grid xs={4}>
								<Paper>Axios</Paper>
							</Grid>
							<Grid xs={4}>
								<Paper>TanStackQuery</Paper>
							</Grid>
							<Grid xs={4}>
								<Paper>Postman</Paper>
							</Grid>
						</Grid>
						<SentimentVerySatisfiedIcon />
						{`Soft-skills:`}
						<Grid container spacing={1}>
							<Grid xs={4}>
								<Paper>Коммуникативность</Paper>
							</Grid>
							<Grid xs={4}>
								<Paper>Критическое мышление</Paper>
							</Grid>
							<Grid xs={4}>
								<Paper>Стрессоустойчивость</Paper>
							</Grid>
						</Grid>
						{`Contact me:`}
						<a
							href="https://t.me/drpdd"
							target="_blank"
							rel="noopener norefferer"
						>
							<TelegramIcon />
							@drpdd
						</a>
					</Typography>
				</Box>
			</Box>
			{projectsVisibility && (
				<Box>
					<Typography>Некоторые из выполненных проектов:</Typography>
					<a
						href="https://valenki-online-store.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ListItem>
							<ListItemAvatar>
								<Avatar>
									<TelegramIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="Photos" secondary="Jan 9, 2014" />
						</ListItem>
					</a>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<TelegramIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Work" secondary="Jan 7, 2014" />
					</ListItem>
				</Box>
			)}
		</>
	);
}

export default About;

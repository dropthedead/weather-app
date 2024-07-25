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

const skills = [
	'JavaScript',
	'HTML5',
	'CSS3',
	'Vite',
	'WebPack',
	'SASS/SCSS',
	'GIT',
	'TypeScript',
	'React',
	'Axios',
	'TanStackQuery',
	'Postman',
];

const softSkills = [
	'Коммуникативность',
	'Критическое мышление',
	'Стрессоустойчивость',
];

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
							rel="noopener noreferrer"
						>
							RsSchool
						</a>
						{` по фронтенд-разработке, был лидером команды из трёх человек, сделал
						и защитил проект `}
						<a
							href="https://valenki-online-store.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
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
							{skills.map((skill, index) => (
								<Grid key={index} xs={4}>
									<Paper>{skill}</Paper>
								</Grid>
							))}
						</Grid>
						<SentimentVerySatisfiedIcon />
						{`Soft-skills:`}
						<Grid container spacing={1}>
							{softSkills.map((softSkill, index) => (
								<Grid key={index} xs={4}>
									<Paper>{softSkill}</Paper>
								</Grid>
							))}
						</Grid>
						{`Contact me:`}
						<a
							href="https://t.me/drpdd"
							target="_blank"
							rel="noopener noreferrer"
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

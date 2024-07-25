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
import LanguageIcon from '@mui/icons-material/Language';
import StoreIcon from '@mui/icons-material/Store';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import ExtensionIcon from '@mui/icons-material/Extension';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import * as styles from './about.module.scss';

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
				<Typography className={styles.about_title} variant="h4">
					Краткое резюме
				</Typography>
				<Box className={styles.cv_wrapper}>
					<Typography variant="subtitle1">
						{`Изучаю фронтэнд-разработку уже около года, полон энтузиазма и
						желания влиться в данную сферу. Закончил три курса `}
						<a
							className={styles.links}
							href="https://rs.school/"
							target="_blank"
							rel="noopener noreferrer"
						>
							RsSchool
						</a>
						{` по фронтенд-разработке, был лидером команды из трёх человек, сделал
						и защитил проект онлайн-магазина (но, к сожалению, сейчас его нормально не потестить, т.к ключ апи
						был всего на месяц). Делал многостраничные проекты и SPA. Понимаю
						основные принципы создания и проектирования веб-приложений. На данный момент продолжаю изучать React.`}
						<Box className={styles.skills_wrapper}>
							<Typography className={styles.skills_title}>
								<TerminalIcon />
								{`Hard Skills:`}
							</Typography>
							<Grid className={styles.grid} container spacing={1}>
								{skills.map((skill, index) => (
									<Grid key={index} xs={4}>
										<Paper className={styles.grid_item}>{skill}</Paper>
									</Grid>
								))}
							</Grid>
						</Box>
						<Box className={styles.skills_wrapper}>
							<Typography className={styles.skills_title}>
								<SentimentVerySatisfiedIcon />
								{`Soft Skills:`}
							</Typography>
							<Grid className={styles.grid} container spacing={1}>
								{softSkills.map((softSkill, index) => (
									<Grid key={index} xs={4}>
										<Paper className={styles.grid_item}>{softSkill}</Paper>
									</Grid>
								))}
							</Grid>
						</Box>
						<Box className={styles.contact_me}>
							{`Contact me:`}
							<a
								className={`${styles.links} ${styles.tg}`}
								href="https://t.me/drpdd"
								target="_blank"
								rel="noopener noreferrer"
							>
								<TelegramIcon />
								@drpdd
							</a>
						</Box>
					</Typography>
				</Box>
			</Box>
			{projectsVisibility && (
				<Box className={styles.projects_wrapper} component="section">
					<Typography>Некоторые из выполненных проектов:</Typography>
					<a
						href="https://valenki-online-store.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ListItem className={styles.list_item}>
							<ListItemAvatar className={styles.list_item_avatar}>
								<Avatar>
									<StoreIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary="Valenki-Store"
								secondary="Онлайн-магазин (API ключ устарел)"
							/>
						</ListItem>
					</a>
					<a
						href="https://rolling-scopes-school.github.io/dropthedead-JSFE2023Q4/coffee-house/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ListItem className={styles.list_item}>
							<ListItemAvatar className={styles.list_item_avatar}>
								<Avatar>
									<LanguageIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary="Coffee-house"
								secondary="Онлайн-магазин/Landing"
							/>
						</ListItem>
					</a>
					<a
						href="https://rolling-scopes-school.github.io/dropthedead-JSFEPRESCHOOL2023Q2/audioplayer/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ListItem className={styles.list_item}>
							<ListItemAvatar className={styles.list_item_avatar}>
								<Avatar>
									<AudiotrackIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary="Audio Player"
								secondary="Простой онлайн плеер"
							/>
						</ListItem>
					</a>
					<a
						href="https://rolling-scopes-school.github.io/dropthedead-JSFEPRESCHOOL2023Q2/imagegallery/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ListItem className={styles.list_item}>
							<ListItemAvatar className={styles.list_item_avatar}>
								<Avatar>
									<PhotoSizeSelectActualIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary="Image Gallery"
								secondary="Поиск фото/картинок"
							/>
						</ListItem>
					</a>
					<a
						href="https://rolling-scopes-school.github.io/dropthedead-JSFEPRESCHOOL2023Q2/library/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ListItem className={styles.list_item}>
							<ListItemAvatar className={styles.list_item_avatar}>
								<Avatar>
									<LanguageIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary="Brooklyn Public Library"
								secondary="Landing библиотеки"
							/>
						</ListItem>
					</a>
					<a
						href="https://rolling-scopes-school.github.io/dropthedead-JSFE2023Q4/hangman/ "
						target="_blank"
						rel="noopener noreferrer"
					>
						<ListItem className={styles.list_item}>
							<ListItemAvatar className={styles.list_item_avatar}>
								<Avatar>
									<ExtensionIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary="Hangman"
								secondary="Простая игра `Висельник`"
							/>
						</ListItem>
					</a>
				</Box>
			)}
		</>
	);
}

export default About;

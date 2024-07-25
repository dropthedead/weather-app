import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import TerminalIcon from '@mui/icons-material/Terminal';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import * as styles from './about.module.scss';
import ProjectList from './components/projectList';

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
							<Box className={styles.skills_container}>
								{softSkills.map((softSkill, index) => (
									<Paper key={index} className={styles.skill_item}>
										{softSkill}
									</Paper>
								))}
							</Box>
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
			{projectsVisibility && <ProjectList />}
		</>
	);
}

export default About;

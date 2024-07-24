import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import TerminalIcon from '@mui/icons-material/Terminal';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
function About() {
	return (
		<>
			<Typography>Обо мне</Typography>
			<Box component="section">
				<Typography>Краткое резюме</Typography>
				<Box>
					<Typography variant="subtitle1">
						Изучаю фронтэнд-разработку уже около года, полон энтузиазма и
						желания влиться в данную сферу. Закончил три курса{' '}
						<a href={'https://rs.school/'} target="_blank">
							RsSchool
						</a>{' '}
						по фронтенд-разработке, был лидером команды из трёх человек, сделал
						и защитил проект{' '}
						<a
							href={'https://valenki-online-store.netlify.app/'}
							target="_blank"
						>
							онлайн-магазина
						</a>{' '}
						(но, к сожалению, сейчас его нормально не потестить, т.к ключ апи
						был всего на месяц). Делал многостраничные проекты и SPA. Понимаю
						основные принципы создания и проектирования веб-приложений.{' '}
						<br></br> На данный момент продолжаю изучать React.<br></br>
						<TerminalIcon></TerminalIcon>На данный момент владею:
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
						<SentimentVerySatisfiedIcon></SentimentVerySatisfiedIcon>
						Soft-skills:
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
						Contact me:
						<a href="https://t.me/drpdd" target="blank">
							<TelegramIcon></TelegramIcon>@drpdd
						</a>
					</Typography>
				</Box>
			</Box>
		</>
	);
}
export default About;

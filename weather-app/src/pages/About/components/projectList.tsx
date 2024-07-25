import {
	Avatar,
	Box,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import LanguageIcon from '@mui/icons-material/Language';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import ExtensionIcon from '@mui/icons-material/Extension';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import * as styles from '../about.module.scss';

const projects = [
	{
		href: 'https://valenki-online-store.netlify.app/',
		icon: <StoreIcon />,
		primary: 'Valenki-Store',
		secondary: 'Онлайн-магазин (API ключ устарел)',
	},
	{
		href: 'https://rolling-scopes-school.github.io/dropthedead-JSFE2023Q4/coffee-house/',
		icon: <LanguageIcon />,
		primary: 'Coffee-house',
		secondary: 'Онлайн-магазин/Landing',
	},
	{
		href: 'https://rolling-scopes-school.github.io/dropthedead-JSFEPRESCHOOL2023Q2/audioplayer/',
		icon: <AudiotrackIcon />,
		primary: 'Audio Player',
		secondary: 'Простой онлайн плеер',
	},
	{
		href: 'https://rolling-scopes-school.github.io/dropthedead-JSFEPRESCHOOL2023Q2/imagegallery/',
		icon: <PhotoSizeSelectActualIcon />,
		primary: 'Image Gallery',
		secondary: 'Поиск фото/картинок',
	},
	{
		href: 'https://rolling-scopes-school.github.io/dropthedead-JSFEPRESCHOOL2023Q2/library/',
		icon: <LanguageIcon />,
		primary: 'Brooklyn Public Library',
		secondary: 'Landing библиотеки',
	},
	{
		href: 'https://rolling-scopes-school.github.io/dropthedead-JSFE2023Q4/hangman/',
		icon: <ExtensionIcon />,
		primary: 'Hangman',
		secondary: 'Простая игра `Висельник`',
	},
];

function ProjectList() {
	return (
		<Box className={styles.projects_wrapper} component="section">
			<Typography>Некоторые из выполненных проектов:</Typography>
			{projects.map((project, index) => (
				<a
					key={index}
					href={project.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					<ListItem className={styles.list_item}>
						<ListItemAvatar className={styles.list_item_avatar}>
							<Avatar>{project.icon}</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={project.primary}
							secondary={project.secondary}
						/>
					</ListItem>
				</a>
			))}
		</Box>
	);
}
export default ProjectList;

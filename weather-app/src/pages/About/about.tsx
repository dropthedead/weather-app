import TelegramIcon from '@mui/icons-material/Telegram';

function About() {
  return (
    <>
      <h1>Обо мне</h1>
      <h3>Краткое резюме</h3>
      <div>
        Изучаю фронтэнд-разработку уже около года, полон энтузиазма и желания
        влиться в данную сферу. Закончил три курса{' '}
        <a href={'https://rs.school/'} target='_blank'>
          RsSchool
        </a>{' '}
        по фронтенд-разработке, был лидером команды из трёх человек, сделал и
        защитил проект{' '}
        <a href={'https://valenki-online-store.netlify.app/'} target='_blank'>
          онлайн-магазина
        </a>{' '}
        (но, к сожалению, сейчас его нормально не потестить, т.к ключ апи был
        всего на месяц). Делал многостраничные проекты и SPA. Понимаю основные
        принципы создания и проектирования веб-приложений. <br></br> На данный
        момент продолжаю изучать React. На данный момент владею: JavaScript,
        HTML5, CSS3, Vite, WebPack, SASS/SCSS, GIT, TypeScript, React, Axios,
        TanstackQuery, Postman. Soft-skills: коммуникативность, критическое
        мышление, стрессоустойчивость. contact me:
        <a href='https://t.me/drpdd' target='blank'>
          <TelegramIcon></TelegramIcon>@drpdd
        </a>
      </div>
    </>
  );
}
export default About;

import s from './calendar.module.scss';
import EventButtons from './components/eventButtons/EventButtons';
import EventCalendar from './components/eventCalendar/EventCalendar';
import Schedule from './components/schedule/Schedule';
import Title from './components/title/Title';

const Calendar = () => {
	return (
		<div style={{width: '100%'}} className={s.calendar}>
			<header className={s.header}>
				<Title />

				<div className={s.wrapper}>
					<EventButtons />
					<EventCalendar />
				</div>
			</header>

			<Schedule />
		</div>
	);
};

export default Calendar;

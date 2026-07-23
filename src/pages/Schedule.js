function Schedule() {
    const sessions = [
        { time: '10:00', title: 'Intro & Setup' },
        { time: '10:30', title: 'Building the React App' },
        { time: '11:15', title: 'Writing the Azure Function' },
        { time: '11:45', title: 'Deploying to Static Web Apps' },
    ];

    return (
        <div className="page">
            <h1>Schedule</h1>
            <ul className="schedule-list">
                {sessions.map((s) => (
                    <li key={s.time}>
                        <strong>{s.time}</strong> — {s.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Schedule;
import React from "react";

const ActivityCard = ({ activity, handleDelete, toggleDayDone, id }) => {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [];
  for (let i = 1; i <= activity.totalDays; i++) {
    days.push(i);
  }

  return (
    <div className="activity-card grid ">
      <div className="box flex ">
        <div>
          <h2 className="topic">{activity.title}</h2>
          <h3 className="month">{monthNames[activity.month]}</h3>
        </div>
      </div>
      <div className="days grid">
        <button className="close" onClick={() => handleDelete(id)}>
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
        {days.map((day) => {
          return (
            <button
              className={activity.daysDone.includes(day) ? "active" : ""}
              onClick={() => toggleDayDone(id, day)}
              key={day}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityCard;

import React from "react";
import ActivityCard from "./ActivityCard";

const Main = ({ state, handleDelete, toggleDayDone }) => {
  return (
    <>
      {state.activities.map((activity, index) => {
        return (
          <ActivityCard
            key={activity.title}
            id={index}
            handleDelete={handleDelete}
            activity={activity}
            toggleDayDone={toggleDayDone}
          />
        );
      })}
    </>
  );
};

export default Main;

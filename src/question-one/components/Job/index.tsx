import React from "react";
import dayjs from "dayjs";

const Job = (props: any) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Assignee: {props.contact.name}</p>
        <p className="text-gray-700 text-base">
          <div>Start Date: {dayjs(props.start).format("DD.MM.YYYY HH:mm")}</div>
          <div>End Date: {dayjs(props.end).format("DD.MM.YYYY HH:mm")}</div>
        </p>
      </div>
    </div>
  );
};

export default Job;

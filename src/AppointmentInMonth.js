import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ time, patient, dentist }) => (
  <div className="appointment">
    <span className="time">{format_time(time)}</span>
    <br />
    <span className="dentist">Tandarts: {dentist}</span>
    <br />
    {/* <span className="patient">Patient: {patient}</span> */}
    <span>Patient: {patient} </span>
  </div>
);

import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ time, patient, dentist, styles }) => (
  <div className="appointment">
    {/* <h1>{styles}</h1> */}

    <span className="time">{format_time(time)}</span>
    <br />
    <span className="dentist" style={{ styles }} >Tandarts: {dentist}</span>
    <br />
    <span>Patient: {patient} </span>
  </div>
);

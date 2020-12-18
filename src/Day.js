import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";

function Day(props) {
  const dayAppointment = props.appointments.filter(app => app.day === 1)
  const appointmentsJSX = dayAppointment
    .map(
      ({ time, patient, dentist, assistant }, index) => (
        <AppointmentInDay
          time={time}
          patient={patient}
          dentist={dentist}
          assistant={assistant}
          key={index}
        />
      )
    );
  return (
    <ul className="dayview">{appointmentsJSX}</ul>
  )
}
export default Day

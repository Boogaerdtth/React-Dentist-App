import React from "react";
import "./Calendar.css";
import DayInMonth from "./DayInMonth";
import Inputfields from './Inputfields'

const divideByDay = appointments => {
  const appointmentsByDay = {};
  appointments.forEach(appointment => {
    const day = appointment.day;
    if (!appointmentsByDay.hasOwnProperty(day)) {
      appointmentsByDay[day] = [];
    }
    appointmentsByDay[day].push(appointment);
  });
  return appointmentsByDay;
};


function getAppointmentByDay(props) {
  const appointmentsByDay = divideByDay(props.appointments);
  const daysInMonthJSX = Object.values(appointmentsByDay)
    .map((appointmentsInDay, index) => (
      <DayInMonth
        appointments={appointmentsInDay}
        key={index}
        submitNewAppointment={props.submitNewAppointment}
      />
    ));


  return (
    <div>
      <Inputfields
        submitNewPatient={props.submitNewPatient}
        submitNewAppointment={props.submitNewAppointment}
        numberOfDay={props.numberOfDay}
        numberOfTime={props.numberOfTime}
        query={props.query}
        handleInputChange={props.handleInputChange}
        state={props.state}
        Suggestions={props.Suggestions}
        handleChange={props.handleChange}
        day={props.state.day}
        time={props.state.time} />
      <div className="calendarview">
        <div className="header">
          <div>Maandag</div>
          <div>Dinsdag</div>
          <div>Woensdag</div>
          <div>Donderdag</div>
          <div>Vrijdag</div>
        </div>
        <div className="table">{daysInMonthJSX}</div>
      </div>
    </div>
  );
};
export default getAppointmentByDay
import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

export default ({ appointments, styles }) => {
  const appointmentsJSX = appointments.map(({ time, patient, dentist }, index) => (
    <AppointmentInMonth time={time} patient={patient} dentist={dentist} styles={styles} key={index} />
  ));
  return <div className="day">{appointmentsJSX}</div>;
};

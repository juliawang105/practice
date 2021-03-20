export const todaysAppts = (state) => {
  const date = new Date();
  const today = date.toDateString();
  let appointments = Object.values(state.entities.appointments);

  return appointments.filter (appt => {
    let apptDate = new Date(appt.time);
    return apptDate.toDateString() === today;
  })
}
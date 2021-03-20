
export const fetchAllPhysicians = () => {
  return $.ajax({
    method: `GET`,
    url: `/api/physicians`
  })
}

export const fetchPhysicianAppts = (physicianId) => {
  return $.ajax({
    method: `GET`,
    url: `/api/physicians/${physicianId}/appointments`
  })
}

export const createAppt = (appointment, patient) => {
  return $.ajax({
    method: `POST`,
    url: `/api/appointments`,
    data: { appointment, patient }
  })
}

export const deleteAppt = (id) => {
  return $.ajax({
    method: `DELETE`,
    url: `/api/appointments/${id}`
  })
}

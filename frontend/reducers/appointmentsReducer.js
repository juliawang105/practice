import {
  RECEIVE_PHYSICIAN_APPTS, RECEIVE_APPT, REMOVE_APPT
} from "../actions/PhysicianApptActions";

export const appointmentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PHYSICIAN_APPTS:
      if(!action.payload.appointments) return {};
      return action.payload.appointments
    case RECEIVE_APPT:
      newState[action.appt.id] = action.appt;
      return newState;
    case REMOVE_APPT:
      delete newState[action.appt.id];
      return newState;
    default:
      return state;
  }
};

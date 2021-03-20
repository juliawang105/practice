import * as ApiUtils from './ApiUtils';

export const RECEIVE_ALL_PHSYICIANS = "RECEIVE_ALL_PHSYICIANS";
export const RECEIVE_PHYSICIAN_APPTS = "RECEIVE_PHYSICIAN_APPTS";
export const RECEIVE_APPT = "RECEIVE_APPT ";
export const REMOVE_APPT = "REMOVE_APPT";

const receiveAllPhysicians = (physicians) => {
  return{
    type: RECEIVE_ALL_PHSYICIANS,
    physicians
  };
};

const receiveAllPhysicianAppts = (payload) => {
  return{
    type: RECEIVE_PHYSICIAN_APPTS,
    payload 
  };
};

const removeAppt = (appt) => {
  return {
    type: REMOVE_APPT,
    appt
  }
}

const receiveAppt = (appt) => {
  return{
    type: RECEIVE_APPT,
    appt
  };
};

export const fetchAllPhysicians = () => dispatch => {
  return ApiUtils.fetchAllPhysicians()
    .then( physicians => dispatch(receiveAllPhysicians(physicians)))
};

export const fetchPhysicianAppts = (physicianId) => dispatch => {
  return ApiUtils.fetchPhysicianAppts(physicianId)
    .then(payload => dispatch(receiveAllPhysicianAppts(payload)))
}

export const createAppt = ( appt, patient ) => dispatch => {
  return ApiUtils.createAppt(appt, patient).then(
    (appt) => {
      return dispatch(receiveAppt(appt));
    },
    (errors) => {
      console.log(errors.responseJSON);
    }
  ); 
}

export const deleteAppt = (id) => dispatch => {
  return ApiUtils.deleteAppt(id)
    .then( (appt) => dispatch(removeAppt(appt)))
}

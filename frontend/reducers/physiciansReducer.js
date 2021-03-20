import { RECEIVE_ALL_PHSYICIANS, RECEIVE_PHYSICIAN_APPTS } from '../actions/PhysicianApptActions';

export const physiciansReducer = (state = {}, action) => {
  Object.freeze(state);
 
  switch(action.type){
    case RECEIVE_ALL_PHSYICIANS:
      return Object.assign({}, state, action.physicians)
    default:
      return state;
  }
};
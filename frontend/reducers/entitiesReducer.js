import { combineReducers } from "redux";
import { appointmentsReducer } from './appointmentsReducer';
import { physiciansReducer } from './physiciansReducer';

const entitiesReducer = combineReducers({
  physicians: physiciansReducer,
  appointments: appointmentsReducer
});

export default entitiesReducer;

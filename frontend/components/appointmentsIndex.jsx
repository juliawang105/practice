import React from 'react';
import { connect } from 'react-redux';
import { fetchPhysicianAppts, deleteAppt } from '../actions/PhysicianApptActions';
import AppointmentForm from './appointmentForm';
import { todaysAppts } from '../reducers/selectors';

class AppointmentIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPhysicianAppts(this.props.match.params.physicianId)
  }

  componentDidUpdate(prevProps){
    if(prevProps.match.params.physicianId !== this.props.match.params.physicianId){
      this.props.fetchPhysicianAppts(this.props.match.params.physicianId)
    }
  }

  render(){
    const { physician, appointments } = this.props;
    if(!physician) return null;
    let appointmentInfo;
 
    if(appointments.length){
        appointmentInfo = appointments.map( (appt, i) => {
        let time = new Date(appt.time);
        let options = {
          timeZone: 'UTC'
        };
   
        return <div className="appt-details" key={appt.id}>
          <li>{i + 1}</li>
          <li>{appt.patientFName} {appt.patientLName}</li>
          <li>{time.toLocaleTimeString("en-US", options)}</li>
          <li>{appt.kind}</li>
          <button onClick={ () => this.props.deleteAppt(appt.id)}> Delete Appt</button>
          <button onClick= { () => this.toggleForm(appt)}>Edit</button>
        </div>
      })
    } else {
      appointmentInfo = <div>No Appointments for Today</div>
    }
  
    return(
      <div>
         <div className="physician-details">
          <span>Dr. {physician.fName} {physician.lName}</span>
          <span>{physician.email}</span>
        </div>
        <div className="appt-header">
          <p>#</p>
          <p>Name</p>
          <p>Time</p>
          <p>Kind</p>
        </div>
        {appointmentInfo}
        <AppointmentForm physicianId={this.props.physician.id}/>
      </div>
    )
  }
}

const mSTP = (state, ownProps) => {
  return{
    physician: state.entities.physicians[ownProps.match.params.physicianId],
    appointments: todaysAppts(state)
  }
};

const mDTP = (dispatch) => {
  return{
    fetchPhysicianAppts: (physicianId) => dispatch(fetchPhysicianAppts(physicianId)),
    deleteAppt: (id) => dispatch(deleteAppt(id))
  }
};

export default connect(mSTP, mDTP)(AppointmentIndex);
import React from 'react';
import { connect } from 'react-redux';
import { createAppt} from '../actions/PhysicianApptActions';

class AppointmentForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      date:"",
      time: "",
      kind: "",
      patientFName: "",
      patientLName: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField(field){
    this.setState({[field]: event.target.value })
  }

  handleSubmit(){
    event.preventDefault();
    const appt = {
      time: this.state.date + " " + this.state.time,
      kind: this.state.kind,
      physician_id: this.props.physicianId
    };

    const patient = {
      f_name: this.state.patientFName,
      l_name: this.state.patientLName
    };

    this.props.createAppt(appt, patient)
      .then( () => console.log("success!"))
  }

  render(){
    const { date, time, kind, patientFName, patientLName } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Date 
          <input onChange={ () => this.updateField("date")}type="date" value={date}/>
        </label>
         <label>Time
          <input onChange={ () => this.updateField("time")}type="time" value={time}/>
        </label>
         <label>Kind
          <input onChange={ () => this.updateField("kind")}type="text" value={kind}/>
        </label>
        <label>Patient's First Name 
          <input onChange={ () => this.updateField("patientFName")}type="text" value={patientFName}/>
        </label>
        <label>Patient's Last Name 
          <input onChange={ () => this.updateField("patientLName")}type="text" value={patientLName}/>
        </label>
        <input type="submit" value="Create an Appointment" />
      </form>
    )
  }
}


const mDTP = (dispatch) => {
  return {
    createAppt: (appt, patient) => dispatch(createAppt(appt, patient))
  }
};

export default connect(null, mDTP)(AppointmentForm);
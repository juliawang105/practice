import React from 'react';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import { fetchAllPhysicians } from '../actions/PhysicianApptActions';
import AppointmentsIndexContainer from './appointmentsIndex';

class PhysiciansIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllPhysicians();
  }

  render(){
    const { physicians } = this.props;
    const physicianInfo = physicians.map( physician => {
      return <NavLink className="physicians" activeClassName="selected" to={`/physicians/${physician.id}`} key={physician.id}>{physician.lName} {physician.fName}</NavLink>
    });

    return(
      <div className="main">
        <div className="physicians-index">
          <p>PHYSICIANS</p>
          {physicianInfo}
        </div>
        <Route path="/physicians/:physicianId" component={AppointmentsIndexContainer}/>
      </div>
    )
  }
}

const mSTP = (state) => {
  return{
    physicians: Object.values(state.entities.physicians)
  }
};

const mDTP = (dispatch) => {
  return{
    fetchAllPhysicians: () => dispatch(fetchAllPhysicians())
  }
};

export default connect(mSTP, mDTP)(PhysiciansIndex)
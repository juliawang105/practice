import React from 'react';
import { Route } from 'react-router-dom';
import PhysiciansIndexContainer from './physiciansIndex'

const App = (props) => (
  <>
    <Route path="/" component={PhysiciansIndexContainer} />  
  </>
)

export default App;
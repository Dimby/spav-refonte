import React from 'react'
import { Route, Routes as RoutesDOM } from "react-router-dom";
import Dashboard from './pages/Dashboard';

const Routes = () => {
  return <RoutesDOM>
  <Route path='/' element={<Dashboard/>}>
  </Route>
</RoutesDOM>
}

export default Routes

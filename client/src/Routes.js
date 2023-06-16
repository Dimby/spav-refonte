import React from 'react'
import { Route, Routes as RoutesDOM } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Utils from './pages/Utils';
import AboutUs from './containers/AboutUs';
import Hero from './containers/Hero';
import Areas from './containers/Areas';
import Gallery from './pages/Gallery';

const Routes = () => {
  return <RoutesDOM>
  <Route element={<Dashboard/>}>
    <Route path='/' element={<Hero/>} />
    <Route path='/aboutUs' element={<AboutUs/>} />
    <Route path='/areas' element={<Areas/>} />
  </Route>
  <Route path='/gallery' element={<Gallery/>} />
  <Route path='utils' element={<Utils/>} />
</RoutesDOM>
}

export default Routes

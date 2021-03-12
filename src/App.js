import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Overview from './pages/overview/overview.page';
import Company from './pages/company/company.page';

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Overview />
      </Route>
      <Route path="/company/:companyId"> 
        <Company />
      </Route>
    </Switch>
  );
}

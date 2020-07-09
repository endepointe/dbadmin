import React from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";
import CreateTable from './CreateTable';

const Crud = () => {

  return (
    <Switch>
      <Route path="/home/postgresql/view-tables">
        {'view tables'}
      </Route>
      <Route path="/home/postgresql/create-table">
        <CreateTable />
      </Route>
    </Switch>
  );
}

export default Crud;
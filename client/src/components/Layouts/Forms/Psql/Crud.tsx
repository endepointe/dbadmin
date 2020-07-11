import React from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";
import ViewTables from './ViewTables';
import CreateTable from './CreateTable';

const Crud = () => {

  return (
    <Switch>
      <Route path="/home/postgresql/view-tables">
        <ViewTables />
      </Route>
      <Route path="/home/postgresql/create-table">
        <CreateTable />
      </Route>
    </Switch>
  );
}

export default Crud;
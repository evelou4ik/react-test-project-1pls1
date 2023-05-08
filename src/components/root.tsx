import React from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Sidebar from './Sidebar/Sidebar';

import classes from './root.module.css';

const Root = () => {
  return (
    <Provider store={store}>
      <div className={classes.root}>
        <Sidebar />
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </Provider>
  );
};

export default Root;

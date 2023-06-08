import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Sidebar from './Sidebar/Sidebar';

import classes from './root.module.css';
import '../fonts/fonts.css';

const Root = () => {
  const [subSidebarIsOpened, setSubSidebarIsOpened] = useState(false);
  const { pathname: location } = useLocation();

  useEffect(() => {
    if (location.includes('settings')) {
      setSubSidebarIsOpened(true);
    } else {
      setSubSidebarIsOpened(false);
    }
  }, [location]);

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <Sidebar subSidebarIsActive={subSidebarIsOpened} />
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </Provider>
  );
};

export default Root;

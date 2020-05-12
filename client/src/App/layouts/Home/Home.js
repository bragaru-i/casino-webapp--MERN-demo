import React, { Fragment } from 'react';

import LeftPanel from '../../components/LeftPanel/LeftPanel';
import RightPanel from '../../components/RightPanel/RightPanel';
import TopPanel from '../../components/TopPanel/TopPanel';

const Home = () => {
  return (
    <Fragment>
      <div className="left-container">
        <LeftPanel />
      </div>
      <div className="right-container">
        <TopPanel />
        <RightPanel />
      </div>
    </Fragment>
  );
};

export default Home;

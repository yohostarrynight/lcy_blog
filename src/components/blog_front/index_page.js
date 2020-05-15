import React from 'react';
import FrontHeader from './front_header/front_header';
import FrontSidebar from './front_sidebar/front_sidebar';
import FrontContainer from './front_container/front_container';

function IndexPage() {
  return (
    <div>
      <FrontHeader />
      <FrontSidebar />
      <FrontContainer />
    </div>
  );
}

export default IndexPage;

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import BackgroundHeader from './background_header/background_header';
import BackgroundSidebar from './background_sidebar/background_sidebar';
import BackgroundMain from './background_main/background_main';

function BackgroundPage() {
  const history = useHistory();
  const [cookies] = useCookies(['token']);
  useEffect(() => {
    (cookies.token === 'null' || cookies.token === undefined)
      && history.push('/login');
  }, []);
  return (
    <div>
      <BackgroundHeader />
      <BackgroundSidebar />
      <BackgroundMain />
    </div>
  );
}

export default BackgroundPage;

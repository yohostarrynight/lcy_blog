import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import GitHubIcon from '@material-ui/icons/GitHub';

const IconList = styled.div`
  display: flex;
`;
const GitHub = styled(GitHubIcon)`
  cursor: pointer;
`;
const AdminIcon = styled.div`
  cursor: pointer;
  position: relative;
  height: 24px;
  margin-left: 20px;
`;
const AdminList = styled.ul`
  position: absolute;
  top: 10px;
  width: 100px;
  right: -35px;
  z-index: 1;
`;
const AdminListItem = styled.li`
  text-align: center;
  list-style: none;
  display: block;
  padding: 10px 0;
  color: #dfdfdf;
  background: rgba(40,42,44,.6);
  border-bottom: 0.5px solid #eaeaea;
  text-decoration: none;
  &:hover {
    color: white; 
    background-color: #999;
  }
`;

function HeaderRightNav() {
  const history = useHistory();
  const [showlist, setShowlist] = useState(false);
  const [, setCookie] = useCookies(['token']);
  const handleChangeShowlist = () => {
    setShowlist(!showlist);
  };
  const handleLoginOut = () => {
    setCookie('token', null, { path: '/' });
    history.push('/login');
  };
  const handlePushIndex = () => {
    history.push('/');
  };
  const handlePushGithub = () => {
    window.open('https://github.com');
  };
  return (
    <IconList>
      <GitHub onClick={handlePushGithub} />
      <AdminIcon
        onMouseEnter={handleChangeShowlist}
        onMouseLeave={handleChangeShowlist}
      >
        <SupervisorAccountIcon />
        {
          showlist ? (
            <AdminList>
              <AdminListItem onClick={handlePushIndex}>首页</AdminListItem>
              <AdminListItem onClick={handleLoginOut}>退出</AdminListItem>
            </AdminList>
          ) : null
        }
      </AdminIcon >
    </IconList>
  );
}

export default HeaderRightNav;

import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import GithubIcon from '@material-ui/icons/GitHub';
import AvatarIcon from '../../../static/images/avatar.jpg';
import NeskattackedIcon from '../../../static/images/nestattacked.png';

const Sidebar = styled.div`
  position: fixed;
  top: 78px;
  width: 21%;
  border-right: 1px solid #ebedf0;
`;
const AvatarSize = styled(Avatar)`
  margin: 40px auto 0 auto;
  &.MuiAvatar-root {
    width: 132px;
    height: 132px;
  }
`;
const Introduce = styled.div`
  margin-top: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ebedf0;
  text-align: center;
`;
const FriendPath = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
  border-bottom: 1px solid #ebedf0;
`;
const Github = styled(GithubIcon)`
  cursor: pointer;
  &.MuiSvgIcon-root {
    width: 1.3em;
    height: 1.3em;
  }
`;
const AvatarNest = styled(Avatar)`
  margin-left: 30px;
  background: #000000;
  &.MuiAvatar-root {
    height: 31.2px;
    width: 31.2px;
  }
`;

function FrontSidebar() {
  const handlePushGithub = () => {
    window.open('https://github.com/yohostarrynight/lcy_blog');
  };
  return (
    <Sidebar>
      <AvatarSize alt="" src={AvatarIcon} />
      <Introduce>lcy: 一个前端小白</Introduce>
      <FriendPath>
        <Github onClick={handlePushGithub} />
        <a href="https://www.nestattacked.com/" target="view_window">
          <AvatarNest alt="" src={NeskattackedIcon} />
        </a>
      </FriendPath>
      <Introduce>
        <h3>一代人</h3>
        <p>黑夜给了我黑色的眼睛</p>
        <p>我却用它寻找光明</p>
      </Introduce>
    </Sidebar>
  );
}

export default FrontSidebar;

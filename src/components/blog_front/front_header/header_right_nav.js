import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ArchiveIcon from '@material-ui/icons/Archive';

const RightNav = styled.div`
  display: flex;
`;
const Block = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    color: #006bde;
  }
`;
const Icon = styled.div`
  .MuiSvgIcon-root {
    height: 1.2em;
    width: 1.2em;
  }
`;
function HeaderRightNav() {
  const history = useHistory();
  const handlePush = url => () => {
    history.push(url);
  };
  return (
    <RightNav>
      <Block onClick={handlePush('/index')}>
        <Icon>
          <HomeIcon />
        </Icon>
        <span>首页</span>
      </Block>
      <Block onClick={handlePush('/index/archives')}>
        <Icon>
          <ArchiveIcon />
        </Icon>
        <span>归档</span>
      </Block>
      <Block onClick={handlePush('/index/categories/0')}>
        <span>前端</span>
      </Block>
      <Block onClick={handlePush('/index/categories/1')}>
        <span>后端</span>
      </Block>
      <Block onClick={handlePush('/index/categories/2')}>
        <span>生活</span>
      </Block>
      <Block onClick={handlePush('/index/categories/3')}>
        <span>其他</span>
      </Block>
    </RightNav>
  );
}

export default HeaderRightNav;

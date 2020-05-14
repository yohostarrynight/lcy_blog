import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarItemLi = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  color: black;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;
  }
`;
const SidebarItemSpan = styled.span`
  margin-left: 10px;
`;
const SidebarItemSecLi = styled(Link)`
  display: block;
  padding: 5px 0 5px 50px;
  line-height: 30px;
  color: black;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #e5e5e5;
  }
`;

export { SidebarItemLi, SidebarItemSpan, SidebarItemSecLi };

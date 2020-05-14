import React from 'react';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Arrow = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
`;

function SidebarItemArrow(props) {
  const arrowstatus = props.arrowstatus;
  return (
    <Arrow>
      {
        arrowstatus ? <ExpandLessIcon /> : <ExpandMoreIcon />
      }
    </Arrow>
  );
}

export default SidebarItemArrow;

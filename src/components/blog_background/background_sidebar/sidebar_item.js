import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import produce from 'immer';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DescriptionIcon from '@material-ui/icons/Description';
import PieChartIcon from '@material-ui/icons/PieChart';
import HelpIcon from '@material-ui/icons/Help';
import { SidebarItemLi, SidebarItemSpan, SidebarItemSecLi } from './sidebar_item_style';
import SidebarItemArrow from './sidebar_item_arrow';

const sidebarConfigList = [
  { name: '用户管理', icon: <AccountBoxIcon />, children: [{ name: '管理用户', path: '/manageuser' }, { name: '新增用户', path: '/adduser' }] },
  { name: '数据管理', icon: <DescriptionIcon />, children: [{ name: '管理数据', path: '/managedata' }, { name: '更新数据', path: '/updatedata/null' }] },
  { name: '数据图表', icon: <PieChartIcon />, children: [{ name: '图表', path: '/datachart' }] },
  { name: '项目说明', icon: <HelpIcon />, children: [{ name: '说明', path: '/note' }] }
];

function SidebarItem() {
  const { url } = useRouteMatch();
  const [itemStatus, setItemStatus] = useState([]);
  const handleChangeArrow = (name, index) => () => {
    setItemStatus(produce(itemStatus, draft => {
      draft[index][name] = !draft[index][name];
    }));
  };
  useEffect(() => {
    let result = [...itemStatus];
    sidebarConfigList.forEach(item => {
      result = [...result, { [item.name]: false }];
    });
    setItemStatus([...itemStatus, ...result]);
  }, []);
  return (
    itemStatus.length > 0 && sidebarConfigList.map((config, configIndex) => {
      return (
        <div key={config.name}>
          <SidebarItemLi onClick={handleChangeArrow(config.name, configIndex)}>
            {config.icon}
            <SidebarItemSpan>{config.name}</SidebarItemSpan>
            <SidebarItemArrow arrowstatus={itemStatus[configIndex][config.name]} />
          </SidebarItemLi>
          {
            itemStatus[configIndex][config.name] ? (
              config.children.map(childrenconfig => {
                return (
                  <SidebarItemSecLi
                    to={`${url}${childrenconfig.path}`}
                    key={childrenconfig.name}
                  >
                    {childrenconfig.name}
                  </SidebarItemSecLi>
                );
              })
            ) : null
          }
        </div>
      );
    })
  );
}

export default SidebarItem;

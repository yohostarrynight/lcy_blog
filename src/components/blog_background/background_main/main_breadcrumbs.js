import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';

const BreadcrumbUnlink = styled(Typography)`
  color: rgba(0,0,0,.87);
`;
const BreadcrumbLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  &:visited {
    color: rgba(0,0,0,.87);
  }
`;
const Breadcrumb = styled(Breadcrumbs)`
  width: 100%;
  padding: 5px 0 5px 10px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  &.MuiBreadcrumbs-root {
    margin-bottom: 10px;
  }
`;

const breadcrumbsConfig = {
  '/background': '首页',
  '/background/manageuser': '管理用户',
  '/background/adduser': '新增用户',
  '/background/managedata': '管理数据',
  '/background/updatedata': '更新数据',
  '/background/datachart': '数据图表',
  '/background/note': '项目说明'
};

function MainBreadcrumbs(props) {
  const { location } = props;
  const [showpathnames, setShowPathNames] = useState([]);
  useEffect(() => {
    const pathnames = location.pathname.split('/').filter(x => x);
    const splicenames = pathnames.map((_value, index) => {
      return `/${pathnames.slice(0, index + 1).join('/')}`;
    });
    const showpathname = splicenames.filter(pathname => {
      return breadcrumbsConfig[pathname];
    });
    setShowPathNames(showpathname);
  }, [location.pathname]);
  return (
    <Breadcrumb separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      {
        showpathnames.map((_detail, index) => {
          const last = index === showpathnames.length - 1;
          const to = showpathnames[index];
          return last ? (
            <BreadcrumbUnlink key={to}>{breadcrumbsConfig[to]}</BreadcrumbUnlink>
          ) : (
            <BreadcrumbLink key={to} to={to}>{breadcrumbsConfig[to]}</BreadcrumbLink>
          );
        })
      }
    </Breadcrumb>
  );
}

export default withRouter(MainBreadcrumbs);

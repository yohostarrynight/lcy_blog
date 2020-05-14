import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import axios from '../../../../axios_config/axios_config';
import UserDeleteDialog from './user_delete_dialog';
import UserEditDialog from './user_edit_dialog';

const EditIcon = styled(Edit)`
  cursor: pointer;
`;
const DeleteIcon = styled(Delete)`
  cursor: pointer;
  margin-left: 5px;
`;

function UserTable(props) {
  const [userList, setUserList] = useState([]);
  const [userDetailInfo, setUserDetailInfo] = useState({});
  const [dialogslist, setDialogsList] = useState({
    editDialog: false,
    deleteDialog: false
  });
  const [pageInfo, setPageInfo] = useState({
    page: 0,
    rowsPerPage: 5,
    count: 0
  });
  const getUserInfo = async () => {
    const result = await axios.get('/getuserinfo', {
      params: {
        searchkey: props.searchKey,
        offset: pageInfo.page * pageInfo.rowsPerPage,
        limit: pageInfo.rowsPerPage
      }
    });
    const { res, rescount } = result.data.data;
    setUserList(res);
    setPageInfo({ ...pageInfo, count: rescount });
  };
  const handleChangePage = (_event, newPage) => {
    setPageInfo({ ...pageInfo, page: newPage });
  };
  const handleChangeRowsPerPage = event => {
    setPageInfo({ ...pageInfo, rowsPerPage: event.target.value, page: 0 });
  };
  const handleChangeDialogs = (name, userInfo) => () => {
    setUserDetailInfo(userInfo);
    setDialogsList({ ...dialogslist, [name]: !dialogslist[name] });
  };
  const handleCloseDialogs = name => () => {
    setDialogsList({ ...dialogslist, [name]: false });
  };
  useEffect(() => {
    getUserInfo();
  }, [props.searchKey, pageInfo.page, pageInfo.rowsPerPage]);
  return (
    <div>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">username</TableCell>
            <TableCell align="right">phone</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            userList.map((detailInfo, selectIndex) => {
              return (
                <TableRow key={detailInfo._id}>
                  <TableCell>{selectIndex + 1}</TableCell>
                  <TableCell align="right">{detailInfo.username}</TableCell>
                  <TableCell align="right">{detailInfo.phone}</TableCell>
                  <TableCell align="right">{detailInfo.email}</TableCell>
                  <TableCell align="right">
                    <EditIcon onClick={handleChangeDialogs('editDialog', detailInfo)} />
                    <DeleteIcon onClick={handleChangeDialogs('deleteDialog', detailInfo)} />
                  </TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10]}
              count={pageInfo.count}
              rowsPerPage={pageInfo.rowsPerPage}
              labelRowsPerPage="每页行数"
              page={pageInfo.page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <UserEditDialog
        open={dialogslist.editDialog}
        handleClose={handleCloseDialogs('editDialog')}
        userInfo={userDetailInfo}
        handleGetUserInfo={getUserInfo}
      />
      <UserDeleteDialog
        open={dialogslist.deleteDialog}
        handleClose={handleCloseDialogs('deleteDialog')}
        userInfo={userDetailInfo}
        handleGetUserInfo={getUserInfo}
      />
    </div>
  );
}

export default UserTable;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
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
import DataDeleteDialog from './data_delete_dialog';

const EditIcon = styled(Edit)`
  cursor: pointer;
`;
const DeleteIcon = styled(Delete)`
  cursor: pointer;
  margin-left: 5px;
`;

function DataTable() {
  const history = useHistory();
  const [dataList, setDataList] = useState([]);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [dataDetailInfo, setDataDetailInfo] = useState({});
  const [pageInfo, setPageInfo] = useState({
    page: 0,
    rowsPerPage: 5,
    count: 0
  });
  const getDataInfo = async () => {
    const result = await axios.get('/getarticleinfo', {
      params: {
        offset: pageInfo.page * pageInfo.rowsPerPage,
        limit: pageInfo.rowsPerPage
      }
    });
    const { res, rescount } = result.data.data;
    setDataList(res);
    setPageInfo({ ...pageInfo, count: rescount });
  };
  const handleChangePage = (_event, newPage) => {
    setPageInfo({ ...pageInfo, page: newPage });
  };
  const handleChangeRowsPerPage = event => {
    setPageInfo({ ...pageInfo, rowsPerPage: event.target.value, page: 0 });
  };
  const handleChangeDialog = dataInfo => () => {
    setDeleteDialog(true);
    setDataDetailInfo(dataInfo);
  };
  const handleCloseDialog = () => {
    setDeleteDialog(false);
  };
  const handlePushUpdate = id => () => {
    history.push('/background/updatedata/' + id);
  };
  const categoryFilter = num => {
    switch (num) {
      case 0:
        return '前端';
      case 1:
        return '后端';
      case 2:
        return '生活';
      default:
        return '其他';
    }
  };
  useEffect(() => {
    getDataInfo();
  }, [pageInfo.page, pageInfo.rowsPerPage]);
  return (
    <div>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">#</TableCell>
            <TableCell align="right">title</TableCell>
            <TableCell align="right">category</TableCell>
            <TableCell align="right">creatime</TableCell>
            <TableCell align="right">actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            dataList.map((detailInfo, selectIndex) => {
              return (
                <TableRow key={detailInfo._id}>
                  <TableCell align="right">{selectIndex + 1}</TableCell>
                  <TableCell align="right">{detailInfo.title}</TableCell>
                  <TableCell align="right">{categoryFilter(detailInfo.category)}</TableCell>
                  <TableCell align="right">{detailInfo.createtime}</TableCell>
                  <TableCell align="right">
                    <EditIcon onClick={handlePushUpdate(detailInfo._id)} />
                    <DeleteIcon onClick={handleChangeDialog(detailInfo)} />
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
      <DataDeleteDialog
        open={deleteDialog}
        handleClose={handleCloseDialog}
        dataInfo={dataDetailInfo}
        handleGetDataInfo={getDataInfo}
      />
    </div>
  );
}

export default DataTable;

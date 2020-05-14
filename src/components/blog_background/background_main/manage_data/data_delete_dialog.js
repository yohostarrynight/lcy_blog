import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogDraggable from '../../../common/dialog_draggable';
import axios from '../../../../axios_config/axios_config';

const DeleteDialog = styled(Dialog)`
  .MuiDialog-paper{
    width: 400px;
  }
`;

function DataDeleteDialog(props) {
  const handleDelete = async () => {
    const result = axios.post('/deletearticle', {
      id: props.dataInfo._id
    });
    if (result) {
      props.handleGetDataInfo();
      props.handleClose();
    }
  };
  return (
    <DeleteDialog
      open={props.open}
      onClose={props.handleClose}
      PaperComponent={DialogDraggable}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">删除</DialogTitle>
      <DialogContent>
        您确定删除文章信息吗?
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDelete} color="primary">确定</Button>
        <Button onClick={props.handleClose} color="primary">取消</Button>
      </DialogActions>
    </DeleteDialog>
  );
}

export default DataDeleteDialog;

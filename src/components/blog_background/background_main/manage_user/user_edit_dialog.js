import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useForm, FormContext } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogDraggable from '../../../common/dialog_draggable';
import axios from '../../../../axios_config/axios_config';
import UserNameInput from '../../../common/input/username_input';
import PhoneInput from '../../../common/input/phone_input';
import EmailInput from '../../../common/input/email_input';
import SnackbarMessage from '../../../common/message/snackbar';

const EditDialog = styled(Dialog)`
  .MuiDialog-paper {
    padding: 0 10px;
  }
  .MuiDialog-paperWidthSm {
    max-width: 400px;
  }
  .MuiDialog-paperScrollPaper {
    min-height: 390px;
  }
`;
const EditForm = styled.div`
  .MuiFormControl-root {
    margin: 0 0 30px 0;
  }
  .MuiInputBase-input {
    width: 324px;
  }
  .MuiOutlinedInput-input {
    padding: 14px 14px;
  }
  .MuiInputLabel-outlined {
    transform: translate(14px, 14px) scale(1);
  }
  .errMessage {
    float: left;
    margin-top: -25px;
  }
`;

function UserEditDialog(props) {
  const methods = useForm();
  const { handleSubmit } = methods;
  const [editId, setEditId] = useState('');
  const [errMessage, setErrMessage] = useState({
    message: ''
  });
  useEffect(() => {
    setEditId(props.userInfo._id);
  }, [props.open]);
  const handleEdit = async (data) => {
    const { username, phone, email } = data;
    const result = await axios.post('edituserinfo', {
      id: editId,
      username,
      phone,
      email
    });
    if (result.data.code === 0) {
      props.handleClose();
      props.handleGetUserInfo();
    } else {
      setErrMessage({ ...errMessage, message: result.data.message });
    }
  };
  return (
    <div>
      <EditDialog
        open={props.open}
        onClose={props.handleClose}
        PaperComponent={DialogDraggable}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">修改信息</DialogTitle>
        <DialogContent>
          <EditForm>
            <FormContext {...methods}>
              <UserNameInput value={props.userInfo.username} />
              <PhoneInput value={props.userInfo.phone} />
              <EmailInput value={props.userInfo.email} />
            </FormContext>
          </EditForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit(handleEdit)} color="primary">确定</Button>
          <Button onClick={props.handleClose} color="primary">取消</Button>
        </DialogActions>
      </EditDialog>
      <SnackbarMessage message={errMessage} />
    </div>
  );
}

export default UserEditDialog;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { NormalButton } from '../../../common/button/button';
import UserTable from './user_table';

const SearchTextField = styled(TextField)`
  .MuiOutlinedInput-input {
    padding: 10.5px 15px;
  }
  .MuiInputBase-input {
    width: 170px;
  }
  .MuiInputLabel-outlined {
    font-size: 14px;
    transform: translate(14px, 14px) scale(1);
  }
`;
const SearchButton = styled(NormalButton)`
  &.MuiButtonBase-root{
    margin-left: 15px;
  }
`;
const ResetButton = styled(SearchButton)``;
const AddButton = styled(NormalButton)`
  float: right;
`;

function ManageUser() {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const handleSearchQuery = event => {
    setSearchQuery(event.target.value);
  };
  const handleSearch = () => {
    setSearchKey(setSearchQuery);
  };
  const handleReSet = () => {
    setSearchQuery('');
    setSearchKey('');
  };
  const handlePushAdd = () => {
    history.push('/background/adduser');
  };
  return (
    <div>
      <SearchTextField
        variant="outlined"
        label="请输入手机号或者账号"
        value={searchQuery}
        onChange={handleSearchQuery}
      />
      <SearchButton variant="contained" onClick={handleSearch}>搜索</SearchButton>
      <ResetButton variant="contained" onClick={handleReSet}>重置</ResetButton>
      <AddButton variant="contained" onClick={handlePushAdd}>添加</AddButton>
      <UserTable searchKey={searchKey} />
    </div>
  );
}

export default ManageUser;

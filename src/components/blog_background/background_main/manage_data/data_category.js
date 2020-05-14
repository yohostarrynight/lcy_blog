import React from 'react';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const Control = styled(FormControl)`
  &.MuiFormControl-root {
    margin: 0 0 10px 0;
  }
  .MuiOutlinedInput-input {
    padding: 14px 14px;
  }
  .MuiOutlinedInput-root {
    width: 324px;
  }
`;

function DataCategory(props) {
  return (
    <Control variant="outlined">
      <InputLabel id="demo-simple-select-outlined-label">类别</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={props.value}
        onChange={props.handleChange}
        label="类别"
      >
        <MenuItem value={0}>前端</MenuItem>
        <MenuItem value={1}>后端</MenuItem>
        <MenuItem value={2}>生活</MenuItem>
        <MenuItem value={4}>其他</MenuItem>
      </Select>
    </Control>
  );
}

export default DataCategory;

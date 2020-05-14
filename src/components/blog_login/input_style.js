import styled from 'styled-components';
import CheckBox from '@material-ui/core/Checkbox';

const LoginTextField = styled.div`
  .MuiFormControl-root {
    width: 100%;
    margin: 0 0 30px 0;
  }
  .errMessage {
    float: left;
    margin-top: -25px;
  }
`;

const RememberCheckBox = styled(CheckBox)`
  float: left;
  &.MuiCheckbox-colorSecondary.Mui-checked {
    color: #0084ff;
  }
  &.MuiCheckbox-colorSecondary:hover {
    background-color: rgba(0, 132, 255, 0.08);
  }
  &.MuiCheckbox-colorSecondary.Mui-checked:hover {
    background-color: rgba(0, 132, 255, 0.08);
  }
`;

export { LoginTextField, RememberCheckBox };

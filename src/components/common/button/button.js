import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const NormalButton = styled(Button)`
  &.MuiButton-root {
    padding: 8px 24px;
    background-color: #0084ff;
  }
  &.MuiButton-root:hover {
    background-color: #0077e6;
  }
  .MuiButton-label {
    color: white;
  }
`;

export { NormalButton };

import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import InputErrMessage from '../message/input_err_message';

function ControllerInput(props) {
  const { control, errors } = useFormContext();
  return (
    <div>
      <Controller
        as={(
          <TextField
            variant={props.variant}
            label={props.label}
            type={props.type}
            InputProps={props.InputProps}
          />
        )}
        control={control}
        defaultValue={props.defaultValue}
        name={props.name}
        rules={props.rules}
      />
      {
        errors[props.name]
          ? <InputErrMessage message={errors[props.name].message} />
          : null
      }
    </div>
  );
}

export default ControllerInput;

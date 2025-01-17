import { TextField as MuiTextField, type TextFieldProps } from '@mui/material';
import React from 'react';

export function TextField(props: TextFieldProps): JSX.Element {
  return <MuiTextField {...props} />;
}

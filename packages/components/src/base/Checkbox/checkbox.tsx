import { Checkbox as MuiCheckbox, type CheckboxProps } from '@mui/material';
import React from 'react';

export function Checkbox(props: CheckboxProps) {
  return <MuiCheckbox {...props} />;
}

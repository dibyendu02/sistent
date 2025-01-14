import { Select as MuiSelect, type SelectProps } from '@mui/material';
import React from 'react';

export const Select = (props: SelectProps) => {
  return <MuiSelect {...props} />;
};

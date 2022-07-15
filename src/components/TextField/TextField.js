import * as React from 'react';

import CustomTextField from './style';

export default function TextField(props) {
  return (
   
      <CustomTextField
        label={props.label}
        id={props.id}
        variant="filled"
        placeholder={props.placeholder}
      />
  );
}
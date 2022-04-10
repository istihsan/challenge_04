import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function ButtonMain() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" sx=
      {{fontFamily: ['"Helvetica"'],
      backgroundColor: '#5CB85F',
      maxHeight: "62%",
      marginTop: '13px'
      }}>
          Register</Button>
    </Stack>
  )
}

export default ButtonMain
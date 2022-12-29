import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export default function BasicCard( {name,styling} ) {
  return (
    <Card className={styling}  >
        <Typography className={styling}  sx={{ fontSize: 14 }} >
          {name}
        </Typography>
    </Card>
  );
}
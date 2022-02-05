import * as React from 'react';
import Typography from '@mui/material/Typography';

// https://remix.run/api/conventions#meta
export const meta = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <React.Fragment>
      <Typography variant='h4' component='h1' gutterBottom>
        Hello World!
      </Typography>
    </React.Fragment>
  );
}

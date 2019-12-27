import React from 'react';
import Konami from 'react-konami';
import { IconButton, Snackbar } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

const quotes = [
  "Initiating barn door protocol!",
  "May the force be with you",
  "To infinity and beyond!",
  "There's a snake in my boot!",
  "Initiating house party protocol!",
];

export default function EasterEgg() {
  const [isSnackbarOpen, setSnackbarOpen] = React.useState<string|undefined>(undefined);
  const quote = quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <>
      <Konami easterEgg={() => setSnackbarOpen(quote)} />
      <Snackbar 
        open={isSnackbarOpen !== undefined}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        message={isSnackbarOpen}
        action={[
          <IconButton
            key="done"
            aria-label="done"
            color="inherit"
            onClick={() => setSnackbarOpen(undefined)}
          >
            <CheckIcon />
          </IconButton>,
        ]}
      />
    </>
  );
} 
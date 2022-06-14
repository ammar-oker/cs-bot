import React from 'react';
import Wizard from './containers/Wizard';
import ChatBot from './containers/ChatBot';
import {
  Route,
  Routes,
  BrowserRouter,
  Link as RouterLink,
} from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Link from '@mui/material/Link';

const App = () => {
  return (
    <BrowserRouter>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Box flexGrow={1}>
            <Link
              color="inherit"
              underline="none"
              component={RouterLink}
              to="/"
            >
              <Typography>Customer Service Bot</Typography>
            </Link>
          </Box>
          <Button
            endIcon={<SupportAgentIcon />}
            component={RouterLink}
            disableElevation
            variant="outlined"
            color="inherit"
            to="/chat"
          >
            Start Conversation
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/chat" element={<ChatBot />} />
        <Route path="/" element={<Wizard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

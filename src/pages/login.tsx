import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react'

const Login = () => {
  //states
  const [id, setId] = useState('');

  //functions
  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();

  }
  //end of functions
  return (
    <Box 
      sx={{
        display: "flex",
        overflowX: "hidden",
        height: "100vh"
      }}
    >
      <Box
        sx={{
          width: "35%",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography
          sx={{
            lineHeight: "50px"
          }}
        >
          Alexi
          <Typography component="span">STF</Typography>
        </Typography>
        <Box 
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
              width: "300px"
            }}
          >
            <Typography variant="h1">Login</Typography>
            <TextField
              type="text"
              placeholder="Enter your ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              variant="outlined"
              label="Enter your ID"
              required
            />
            <Button type="submit" variant='contained'>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        flexGrow="grow"
        height="100%"
      >
        <img src="/img/gaming.jpg" alt="SFT image" className="login-image" />
      </Box>
    </Box>
  );
};

export default Login;
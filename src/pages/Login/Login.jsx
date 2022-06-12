import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "@fontsource/jetbrains-mono";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import "./login.css"


export default function Login() {
  return (
    <div>
      <div
        style={{
          padding: "10rem",
          width: "100%",
          position: "fixed",
          backgroundColor: "#7330d3",
        }}
      />
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          backgroundColor: "#121212",
          padding: "30rem",
          paddingTop: "17rem",
          marginBottom: "-1rem",
        }}
      >
        <Card
          variant="outlined"
          style={{
            padding: "20rem",
            paddingTop: "25rem",
            zIndex: "100",
            marginTop: "-15rem",
            borderRadius: "1rem",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            height: "0.1vw",
            paddingBottom: "2rem",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 2px 4px -1px, rgba(0, 0, 0, 0.114) 0px 4px 5px 0px, rgba(0, 0, 0, 0.094) 0px 1px 10px 0px",
          }}
        >
          <CardContent>
            <Typography
              mt={-45}
              variant="h5"
              style={{
                fontFamily: "JetBrains Mono,monospace",
                fontWeight: "400",
                width: "40vw",
                height: "0vw",
                
              }}
            >
              Sign Up
            </Typography>
            <div style={{ textAlign: "left" }}>
              <Box
                mt={4}
                component="form"
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Box>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

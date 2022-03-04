import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"

function MainCard() {
  return (
    <div className="card mb-3" style={{ width: '500px',  borderColor: "#2F0F58" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            width="100%"
            height="100%"
            src="https://source.unsplash.com/random"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Heading</h5>
            <p className="card-text">
              Subtitle of blog
            </p>
            <p className="card-text">
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</small>
            </p>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" style={{ backgroundColor: "#2F0F58", }}>Continue Reading</Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
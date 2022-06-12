import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";



import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "@fontsource/jetbrains-mono";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    const style_obj = {
      // height: 100,
    }
     var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '45vw'
}
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
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
            padding: "25rem",
            marginBottom: "-20rem",
          }}
        >
          <Card
            variant="outlined"
            style={{
              padding: "25rem",
              zIndex: "100",
              marginTop: "-15rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
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
                <div style={{ textAlign: "left" }}>
                  <Box
                    mt={4}
                    component="form"
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Heading"
                      autoFocus
                    />
                  </Box>
                </div>
              </Typography>
              <div style={{ textAlign: "left" }}>
                <Typography

                  mt={14}
                  variant="p"
                  component="div"
                  style={{ width: "40vw" }}
                >
                  <div>
                    <Editor
                      editorState={editorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      onEditorStateChange={this.onEditorStateChange}
                      editorStyle={style_obj}
                    />
                  </div>
                </Typography>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 0 }}
                >
                  Submit
                </Button>
                
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
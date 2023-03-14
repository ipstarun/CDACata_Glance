import axios from "axios";
import React, { Component } from "react";
import { upLoadfile } from "../services/userservice";
import { Button, Input } from "reactstrap";

export default class FileUpload extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
    showFileSuccessMsg: false,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    // console.log(event.target.files[0]);
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    const formData = new FormData();
    // Update the formData object
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    // axios.post("http://localhost:8282/uploadFile", formData);
    upLoadfile(formData, this.fileUploadCB);
  };

  fileUploadCB = () => {
    this.setState({
      showFileSuccessMsg: true,
    });
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
  render() {
    return (
      <div style={{ padding: "50px", border: "darkblue" }}>
        <Button color="danger">File upload Here!</Button>

        <hr />

        <div>
          <Input type="file" onChange={this.onFileChange} />
          <br />
          <Button onClick={this.onFileUpload} color="warning" outline>
            {" "}
            Upload
          </Button>
        </div>

        {this.fileData()}
        {this.state.showFileSuccessMsg && (
          <h5 style={{ color: "green" }}>File has been uploaded</h5>
        )}
      </div>
    );
  }
}

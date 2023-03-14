import React from "react";
import { Card, Container, Table } from "reactstrap";
import Customnavbar from "../components/Customnavbar";
import Footernav from "./Footernav";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Customnavbar />
      <div>
        <Container>
          <hr />
          <h2
            style={{
              textAlign: "center",
              color: "#f50057",
              fontFamily: "fantasy",
            }}
          >
            Mail Us On
          </h2>
          <Table bordered>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Desc</th>
                <th style={{ textAlign: "center" }}>Mail ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <b>Student/Candidate Supports</b>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Link to="mailto:actssupport@cdac.in">
                    actssupport@cdac.in
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>
                  {" "}
                  <b> C-Cat Counsiling Enquiry</b>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Link to="mailto:course-enquiry@cdac.in">
                    course-enquiry@cdac.in
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>

      <Footernav />
    </div>
  );
}

export default Contact;

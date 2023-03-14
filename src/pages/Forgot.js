import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { NavLink as ReactLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Customnavbar from "../components/Customnavbar";
import Footernav from "./Footernav";

export default function forgot() {
  const onOtpClick = (props) => {
    toast.success("Otp send Succesflly");
  };

  return (
    <div>
      <Customnavbar />

      <div style={{ color: "#ff1744" }}>
        <Container className="text-center">
          <Row className="mt-4">
            <Col sm={{ size: 6, offset: 3 }}>
              <Card>
                <CardHeader>
                  <h2>Reset Password !!!</h2>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Label>
                        <h5> Enter Email ID</h5>
                        <Input
                          type="email"
                          placeholder="Enter  Registered Email-Id"
                        ></Input>
                      </Label>
                      <br />
                      <Link target={ReactLink} to="/resetpasswod">
                        <Button color="primary" outline onClick={onOtpClick}>
                          Send OTP
                        </Button>
                      </Link>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Footernav />
    </div>
  );
}

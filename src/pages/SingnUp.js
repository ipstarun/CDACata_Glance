import React, { useEffect } from "react";
import { signUp } from "../services/userservice";
import Customnavbar from "../components/Customnavbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Footernav from "./Footernav";
import { useForm } from "react-hook-form";
import "../pages/Homecss.css";

import {
  Card,
  CardBody,
  CardHeader,
  Container,
  FormGroup,
  Input,
  Label,
  Form,
  Button,
  Row,
  Col,
  FormFeedback,
} from "reactstrap";
import { useState, flase } from "react";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    prn: "",
    password: "",
  });
  const [error, setError] = useState({
    errors: {},
    isError: flase,
  });

  //to prevent the Refresh of page
  // const submitForm = (event) => {
  //   event.preventDeafault();

  // if (error.isError) {
  //   toast.error("Form data is invalid , currect all details!! ");
  //   setError({ ...error, isError: flase });
  //   return;
  // }
  //   console.log(data);
  // };

  //for navigation
  const history = useNavigate();

  // data validation

  //server API for sending the data
  const onClickRegister = () => {
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("You have  Register Succesfully!!! ");
        console.log(history);
        history("/login", { replace: true });
        //after user has been register the form data will be cleared
        setData({
          name: "",
          prn: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Log");

        //handel error in proper way
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  // to print the Entered data on the Console
  useEffect(() => {
    console.log(data);
  }, [data]);

  //hangle change
  const handelChange = (event, property) => {
    //dynamic setting the value
    setData({ ...data, [property]: event.target.value });
  };
  const resetData = () => {
    setData({
      name: "",
      prn: "",
      email: "",
      password: "",
    });
  };

  //for validation of form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      <Customnavbar />
      <h3
        style={{
          textAlign: "center",
          fontFamily: "inherit",
          color: "#f50057",
        }}
      >
        {" "}
        Student Registration
      </h3>
      <Container className="text-center">
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader>
                <h2>Fill Information to Register</h2>
              </CardHeader>
              <CardBody>
                {/* //creating from */}
                <Form onSubmit={handleSubmit(onSubmit)}>
                  {/* Name Field */}
                  <FormGroup>
                    <Label for="name">
                      Enter Name
                      <Input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        id="name"
                        autoComplete="off"
                        {...register("name", { required: true })}
                        // ? is used for null save
                        // invalid={
                        //   error.errors?.response?.data?.name ? true : false
                        // }
                        onChange={(e) => handelChange(e, "name")}
                        value={data.name}
                      ></Input>
                      {/* <error className="Red">
                        {errors.name && "Name is required"}
                      </error> */}
                    </Label>
                  </FormGroup>

                  {/* PRn number Field */}
                  <FormGroup>
                    <Label for="prn">
                      Enter PRN
                      <Input
                        type="number"
                        placeholder="Enter your PRN number"
                        {...register(
                          "number",
                          // { required: true },
                          {
                            minLength: 6,
                            maxLength: 10,
                          }
                        )}
                        // id="prn"
                        // name="prn"
                        onChange={(e) => handelChange(e, "prn")}
                        value={data.prn}
                      ></Input>
                      {/* <error className="Red">
                        {errors.number?.type === "" &&
                          "prn is required"}
                        {errors.number?.type === "minLength" &&
                          "Entered number is less than 6 digits"}
                        {errors.number?.type === "maxLength" &&
                          "Entered number is more than 12 digits"}
                      </error> */}
                    </Label>
                  </FormGroup>

                  {/* Email  */}
                  <FormGroup>
                    <Label for="email">
                      Enter Email
                      <Input
                        type="email"
                        placeholder="Enter your Email-Id"
                        id="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                        })}
                        onChange={(e) => handelChange(e, "email")}
                        value={data.email}
                      ></Input>
                      {/* <error className="Red">
                        {errors.email?.type === "pattern" &&
                          "Entered email is in wrong format"}
                        {errors.email?.type === "required" &&
                          "Email is required"}
                      </error> */}
                    </Label>
                  </FormGroup>

                  {/* password filed */}

                  <FormGroup>
                    <Label for="password">
                      Enter Password
                      <Input
                        type="password"
                        placeholder="Enter your Password"
                        // id="password"
                        {...register("password", {
                          required: true,
                          minLength: 5,
                          maxLength: 20,
                        })}
                        value={data.password} //bad me kra he update 10:3:2023
                        onChange={(e) => handelChange(e, "password")}
                      ></Input>
                      {/* <error className="Red">
                        {errors.password?.type === "required" &&
                          "Password is required"}
                        {errors.password?.type === "minLength" &&
                          "Entered password is less than 5 characters"}
                        {errors.password?.type === "maxLength" &&
                          "Entered password is more than 20 characters"}
                      </error> */}
                    </Label>
                  </FormGroup>
                  <Container className="text-center">
                    <Button
                      color="success"
                      onClick={onClickRegister}
                      type="submit"
                    >
                      Register!
                    </Button>
                    <Button
                      onClick={resetData}
                      color="warning"
                      className="ms-4"
                      type="reset"
                    >
                      Clear
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footernav />
    </div>
  );
};

export default SignUp;

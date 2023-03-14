// Used ReactStrap

import React, { useEffect } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";

import {
  Card,
  CardBody,
  CardGroup,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  Button,
  Container,
} from "reactstrap";
import b1 from "../images/b1.jpg";
import Footernav from "./Footernav";
import { Link } from "react-router-dom";
import Navbartwo from "../components/Navbartwo";
import os from "../images/os.jpg";
import cop from "../images/cop.jpg";
import java from "../images/java.jpg";
import data from "../images/database.jpg";
import sdlc from "../images/sdlc.jpg";
import wbt from "../images/wbt.jpg";
import spring from "../images/spring.png";
import php from "../images/php.jpg";
import place from "../images/place.jpg";

const MainPage = () => {
  const history = useNavigate();

  useEffect(() => {
    const sValue = sessionStorage.getItem("app_session");
    if (!sValue) {
      history("/login", { replace: true });
    }
  }, []);

  return (
    <div>
      <Navbartwo />

      <br />
      <span
        style={{
          color: "#f50057 ",
          fontFamily: "timenewroman",
          fontWeight: "bold",
        }}
      >
        <h5>Welcome {window.currentUser}</h5>
      </span>

      <div>
        {/* ReactStrap */}
        <Container>
          <CardGroup>
            <Card>
              <CardImg
                alt="Card image cap"
                style={{ width: "260x", height: "300px" }}
                src={os}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ color: "#ff1744" }}>
                  OS
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted " tag="h6">
                  Operating Sysytem
                </CardSubtitle>
                <CardText style={{ textAlign: "justify" }}>
                  An operating system (OS) is a collection of software that
                  manages a computer's hardware resources and provides services
                  to its applications. It controls the computer's input/output
                  devices, memory, and CPU usage. The OS is responsible for
                  starting and stopping programs, managing files and folders,
                  and ensuring system security and stability.
                </CardText>

                <Link tag={ReactLink} to="/os">
                  <Button color="primary" outline>
                    Link
                  </Button>
                </Link>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                alt="Card image cap"
                style={{ width: "260x", height: "300px" }}
                src={cop}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ color: "#ff1744" }}>
                  COP JAVA
                </CardTitle>
                <CardSubtitle className=" mb-2  text-muted" tag="h6">
                  Concept of Programing
                </CardSubtitle>
                <CardText style={{ textAlign: "justify" }}>
                  Programming is the process of designing and writing code in a
                  programming language to create software that enables computers
                  to perform specific tasks. It involves understanding computer
                  architecture, algorithms, and data structures, as well as
                  logical thinking and problem-solving skills to create
                  efficient and effective programs.
                </CardText>
                <Link tag={ReactLink} to="/cop">
                  <Button color="primary" outline>
                    Link
                  </Button>
                </Link>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                alt="Card image cap"
                style={{ width: "260x", height: "300px" }}
                src={java}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ color: "#ff1744" }}>
                  Core JAVA
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  OOP's JAVA
                </CardSubtitle>
                <CardText style={{ textAlign: "justify" }}>
                  Core Java refers to the fundamental components of the Java
                  programming language, including syntax,semantics,and
                  libraries.It provides the basic building blocks for creating
                  platform-independent applications, such as
                  variables,loops,conditional statements, data types, and
                  objects. Core Java is essential for building enterprise
                  applications, web applications,and Android mobile apps.
                </CardText>
                <Link tag={ReactLink} to="/corejava">
                  <Button color="primary" outline>
                    Link
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </CardGroup>
        </Container>
      </div>
      <br />

      {/* second Card  */}

      <div>
        <Container>
          <CardGroup>
            <Card>
              <CardImg
                alt="Card image cap"
                style={{ width: "260x", height: "300px" }}
                src={data}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ color: "#ff1744" }}>
                  DATA Base System
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted " tag="h6">
                  Relational & Non-Relational
                </CardSubtitle>
                <CardText style={{ textAlign: "justify" }}>
                  Database management involves organizing, storing, and
                  manipulating data using specialized software tools to ensure
                  data integrity, security, and efficient retrieval and
                  analysis.
                </CardText>
                <Link tag={ReactLink} to="/database">
                  <Button color="primary" outline>
                    Link
                  </Button>
                </Link>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                alt="Card image cap"
                style={{ width: "260x", height: "300px" }}
                src={sdlc}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ color: "#ff1744" }}>
                  SDM
                </CardTitle>
                <CardSubtitle className=" mb-2  text-muted" tag="h6">
                  Software Development Management
                </CardSubtitle>
                <CardText style={{ textAlign: "justify" }}>
                  The software development life cycle (SDLC) is a process used
                  to design, develop, test, and deploy software. It typically
                  involves six stages: planning, analysis, design,
                  implementation, testing, and maintenance.
                </CardText>
                <Link tag={ReactLink} to="/sdm">
                  <Button color="primary" outline>
                    Link
                  </Button>
                </Link>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                alt="Card image cap"
                style={{ width: "260x", height: "300px" }}
                src={wbt}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5" style={{ color: "#ff1744" }}>
                  WBT
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Web Base Technology
                </CardSubtitle>
                <CardText style={{ textAlign: "justify" }}>
                  Web development involves designing, creating, and maintaining
                  websites, web applications, and web services. It encompasses a
                  range of technologies, including HTML, CSS, JavaScript, and
                  various back-end programming languages, databases, and web
                  frameworks.
                </CardText>
                <Link tag={ReactLink} to="/wbt">
                  <Button color="primary" outline>
                    Link
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </CardGroup>
        </Container>
      </div>
      <br />
      {/* Card  3rd */}

      <div></div>
      <Container>
        <CardGroup>
          <Card>
            <CardImg
              alt="Card image cap"
              style={{ width: "260x", height: "300px" }}
              src={spring}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5" style={{ color: "#ff1744" }}>
                Java J2EE
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted " tag="h6">
                Advance Java
              </CardSubtitle>
              <CardText style={{ textAlign: "justify" }}>
                Advance Java refers to the advanced components of the Java
                programming language, including Servlets, JSP, JDBC, Enterprise
                JavaBeans, and various web frameworks. It is used for developing
                large-scale enterprise applications and web services.
              </CardText>
              <Link tag={ReactLink} to="/advancejava">
                <Button color="primary" outline>
                  Link
                </Button>
              </Link>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              style={{ width: "260x", height: "300px" }}
              src={php}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5" style={{ color: "#ff1744" }}>
                C-Shap
              </CardTitle>
              <CardSubtitle className=" mb-2  text-muted" tag="h6">
                MS Dot Net
              </CardSubtitle>
              <CardText style={{ textAlign: "justify" }}>
                Microsoft .NET is a software development framework used for
                building Windows applications, web applications, and web
                services. It provides a wide range of programming languages,
                libraries, and tools for developing robust, secure, and scalable
                software applications.
              </CardText>
              <Link tag={ReactLink} to="/dotnet">
                <Button color="primary" outline>
                  Link
                </Button>
              </Link>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              style={{ width: "260x", height: "300px" }}
              src={place}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5" style={{ color: "#ff1744" }}>
                Placement Preparation
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Effective Commontion & Apptitute etc.
              </CardSubtitle>
              <CardText style={{ textAlign: "justify" }}>
                A placement module is a component of a student information
                system used by educational institutions to manage their
                placement activities. It enables students to apply for job
                opportunities, and helps employers to identify and recruit
                suitable candidates for their vacancies.
              </CardText>
              <Link tag={ReactLink} to="/placement">
                <Button color="primary" outline>
                  Link
                </Button>
              </Link>
            </CardBody>
          </Card>
        </CardGroup>
      </Container>

      <div>
        <Footernav />
      </div>
    </div>
  );
};

export default MainPage;

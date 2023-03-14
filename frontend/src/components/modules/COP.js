import React, { useState, useEffect } from "react";
import Footernav from "../../pages/Footernav";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
} from "reactstrap";
import Navbartwo from "../Navbartwo";

export default function COP() {
  const history = useNavigate();

  useEffect(() => {
    const sValue = sessionStorage.getItem("app_session");
    if (!sValue) {
      history("/login", { replace: true });
    }
  }, []);
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const onLinkClick = () => {
    fetch(
      "Http://localhost:8282/downloadFile/3e3fee7b-bba7-4c9c-ab7f-b441cc346acf"
    ).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "PG-DAC Syllabus.pdf";
        alink.click();
      });
    });
  };
  const secondLink = () => {
    fetch(
      "Http://localhost:8282/downloadFile/95bda488-c881-4ae1-a774-e36cd6925657"
    ).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Constructor In Java.pptx";
        alink.click();
      });
    });
  };
  const thirdLink = () => {
    fetch(
      "Http://localhost:8282/downloadFile/ed451db6-8013-412d-b1ad-2e79b621a763"
    ).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Java 8 Features & Lambda Expressions.pdf";
        alink.click();
      });
    });
  };

  return (
    <div>
      <Navbartwo />
      <hr />
      <h2
        style={{
          textAlign: "center",
          color: "darkgoldenrod",
          fontFamily: "Times New Roman",
          textDecoration: "Underline",
        }}
      >
        Concept of Programing Data list
      </h2>
      <hr />

      {/* list times  */}
      <div>
        <Container style={{ backgroundColor: "darkcyan" }}>
          <Accordion open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1">Syllabus of DAC</AccordionHeader>
              <AccordionBody accordionId="1">
                <Link onClick={onLinkClick}>Syllabus.pdf</Link>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">Basic of Java</AccordionHeader>
              <AccordionBody accordionId="2">
                <Link onClick={secondLink}>Constructor In Java</Link>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                Java 8 Features & Lambda Expressions
              </AccordionHeader>
              <AccordionBody accordionId="3">
                <Link onClick={thirdLink}>
                  Java 8 Features & Lambda Expressions.pdf
                </Link>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </Container>
      </div>

      <Footernav />
    </div>
  );
}

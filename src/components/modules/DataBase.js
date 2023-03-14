import React, { useState, useEffect } from "react";
import Footernav from "../../pages/Footernav";
import { Link, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
} from "reactstrap";

import Navbartwo from "../Navbartwo";

export default function DataBase() {
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
      "Http://localhost:8282/downloadFile/179d7a7a-be71-4c46-8436-19e9ed524699"
    ).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Database Technology soln.pdf";
        alink.click();
      });
    });
  };
  const onLinkSecond = () => {
    fetch(
      "Http://localhost:8282/downloadFile/d4fff78a-3d4b-444e-8aa4-830ea5e8955b"
    ).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Normalisation_Question.xlsx";
        alink.click();
      });
    });
  };

  return (
    <div>
      <Navbartwo />
      <h2>Data base page</h2>
      <hr />
      <h2
        style={{
          textAlign: "center",
          color: "darkgoldenrod",
          fontFamily: "Times New Roman",
          textDecoration: "Underline",
        }}
      >
        Data Base list
      </h2>
      <hr />

      {/* list times  */}
      <div>
        <Container style={{ backgroundColor: "darkcyan" }}>
          <Accordion open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1">
                DATA base MCQ for CCE
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <Link onClick={onLinkClick}>CCEMCQ.pdf</Link>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">Normilisation</AccordionHeader>
              <AccordionBody accordionId="2">
                <Link onClick={onLinkSecond}>Normalisation_Question.xlsx</Link>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">Demo</AccordionHeader>
              <AccordionBody accordionId="3">
                <strong>This is the third item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </Container>
      </div>

      <Footernav />
    </div>
  );
}

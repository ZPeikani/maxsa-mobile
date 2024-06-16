import {
  Accordion,
  AccordionDetails,
  AccordionSlots,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Divider,
  Fade,
  Stack,
  Typography,
} from "@mui/material";
import FAQImage from "../../assets/imgs/FAQ.svg";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Router from "next/router";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  Router.push("/");
}
export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);
  const breadcrumbs = [
    <Link
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
      className="text-lg font-light text-[#717171]"
    >
      Home
    </Link>,
    <Box>
      <Typography
        key="2"
        color="primary"
        fontSize="1.125rem"
        fontWeight="lighter"
      >
        FAQs
      </Typography>
      <Divider className="bg-blue-300" />
    </Box>,
  ];
  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <Box>
      <Stack spacing={2}>
        <Breadcrumbs
          separator={
            <NavigateNextIcon fontSize="large" sx={{ color: "#717171" }} />
          }
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box component="img" src={FAQImage.src} paddingY={5} />
        <Box display="flex" gap={2}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography fontSize="20px">Table of Contents</Typography>
            <Typography color="primary" fontSize="1rem" fontWeight="lighter">
              General
            </Typography>
            <Typography fontSize="1rem" fontWeight="lighter">
              Trusts & Safety
            </Typography>
            <Typography fontSize="1rem" fontWeight="lighter">
              Services
            </Typography>
            <Typography fontSize="1rem" fontWeight="lighter">
              Billing
            </Typography>
          </Box>
          <Box width="808px" paddingBottom={6}>
            <Accordion
              expanded={expanded}
              onChange={handleExpansion}
              slots={{ transition: Fade as AccordionSlots["transition"] }}
              slotProps={{ transition: { timeout: 400 } }}
              sx={{
                "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
                "& .MuiAccordionDetails-root": {
                  display: expanded ? "block" : "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  color="primary"
                  fontSize="1.5rem"
                  fontWeight="medium"
                >
                  Can I purchase products from Tech Heim using installment
                  payments?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="1.25rem" fontWeight="light">
                  Yes, Tech Heim offers the option to purchase products using
                  both cash and installment payments. This allows you to choose
                  the payment method that suits your needs and budget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography
                  color="primary"
                  fontSize="1.5rem"
                  fontWeight="medium"
                >
                  How can I engage with the magazine content on Tech Heim?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="1.25rem" fontWeight="light">
                  You can actively engage with the magazine content by leaving
                  comments and participating in the question-and-answer section.
                  Feel free to share your thoughts, ask questions, and interact
                  with fellow tech enthusiasts in the community.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography
                  color="primary"
                  fontSize="1.5rem"
                  fontWeight="medium"
                >
                  Does Tech Heim offer a warranty on its products?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="1.25rem" fontWeight="light">
                  Yes, Tech Heim provides a warranty on all eligible products.
                  The specific warranty details may vary depending on the
                  manufacturer and product category. Please refer to the product
                  description or contact our customer support for more
                  information.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography
                  color="primary"
                  fontSize="1.5rem"
                  fontWeight="medium"
                >
                  Is Tech Heim a secure platform for online shopping?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="1.25rem" fontWeight="light">
                  Yes, Tech Heim provides a warranty on all eligible products.
                  The specific warranty details may vary depending on the
                  manufacturer and product category. Please refer to the product
                  description or contact our customer support for more
                  information.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography
                  color="primary"
                  fontSize="1.5rem"
                  fontWeight="medium"
                >
                  How can I get assistance with my purchase or any other
                  inquiries?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="1.25rem" fontWeight="light">
                  If you need assistance with your purchase or have any
                  questions, our dedicated customer support team is here to
                  help. You can reach out to us through the contact page on our
                  website, and we'll be happy to assist you promptly.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

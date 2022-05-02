import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function MuiAccordion() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => {
          handleChange(isExpanded, "panel1");
        }}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            molestias eaque ab debitis cum modi! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sapiente, aut ipsum. Totam, omnis
            minima! Rerum, aperiam nisi. Quasi, doloremque fugiat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => {
          handleChange(isExpanded, "panel2");
        }}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            molestias eaque ab debitis cum modi! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sapiente, aut ipsum. Totam, omnis
            minima! Rerum, aperiam nisi. Quasi, doloremque fugiat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => {
          handleChange(isExpanded, "panel3");
        }}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            molestias eaque ab debitis cum modi! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sapiente, aut ipsum. Totam, omnis
            minima! Rerum, aperiam nisi. Quasi, doloremque fugiat.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MuiAccordion;

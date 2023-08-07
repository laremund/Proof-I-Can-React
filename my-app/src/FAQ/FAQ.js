import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./faq.module.css";

export default function FAQ({ question, answer }) {
  const [isExpanded, setExpanded] = useState(false);
  const handleChange = () => {
    setExpanded(!isExpanded);
  };
  return (
    <div>
      <Accordion
        className={styles.accordion}
        sx={{
          bgcolor: "#1e2228",
          color: "#e6edf3",
          border: "1px solid #22272e",
        }}
        // square={true}
        // disableGutters={true}
        onChange={handleChange}
      >
        <AccordionSummary
          // className={isExpanded ? styles.summaryExpanded : null}
          expandIcon={
            <ExpandMoreIcon
              className={styles.expandIcon}
              fontSize="small"
              sx={{
                fill: "#e6edf3",
              }}
            />
          }
          sx={{
            bgcolor: "#0e1117",
          }}
        >
          <div className={styles.summaryContainer}>
            <Typography className={styles.typography}>{question}</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.answerTypography}>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

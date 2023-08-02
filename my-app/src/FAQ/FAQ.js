import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./faq.module.css";

export default function FAQ({ question, answer }) {
  return (
    <div>
      <Accordion
        className={styles.accordion}
        // square={true}
        // disableGutters={true}
        // onChange={handleChange}
      >
        <AccordionSummary
          // className={isExpanded ? styles.summaryExpanded : null}
          expandIcon={
            <ExpandMoreIcon className={styles.expandIcon} fontSize="small" />
          }
        >
          <div className={styles.summaryContainer}>
            <Typography variant="body1" className={styles.typography}>
              {question}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.details}>
          <Typography variant="body1" className={styles.answerTypography}>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

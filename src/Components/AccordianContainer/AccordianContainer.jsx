import React, { useState } from 'react';
import "../AccordianContainer/AccordianContainer.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AccordianContainer = ({ question }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordian">
      <div className="accordianContainer" onClick={() => setOpen(!open)}>
        <div className="accordianTitle">
          <h3>{question.title}</h3>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {open && <p>{question.infos}</p>}
      </div>
    </div>
  );
}

export default AccordianContainer;

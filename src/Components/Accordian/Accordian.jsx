import React from 'react';
import AccordianContainer from "../AccordianContainer/AccordianContainer";
import "../Accordian/Accordian.scss";
import data from "../../data";

const Accordian = () => {
  return (
      <div className="accordian">
          <h2>Explore options near me</h2>
          {data.map((question) => (
              <AccordianContainer question={question} key={question.id} />
          ))}
    </div>
  );
}

export default Accordian;

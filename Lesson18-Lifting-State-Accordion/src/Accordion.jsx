/*
Parent Component => Accordion.jsx

The parent component holds the state for which accordion section is open and passes it as props to its children.

*/

import React, { useState } from "react";
import AccordionSection from "./AccordionSection";
import "./Accordion.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSectionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle or close : Do not use true or false 
    //because using true or false will keep it open.
  };

  return (

    <div className="accordion">

      {/* Accordion 1 */}
      <AccordionSection
        title="Item 1"
        isActive={activeIndex === 0}
        onClick={() => handleSectionClick(0)}
      >
        Mango is my favourite fruit.
      </AccordionSection>

      {/* Accordion 2 */} 
      <AccordionSection
        title="Item 2"
        isActive={activeIndex === 1}
        onClick={() => handleSectionClick(1)}
      >
        Rajma is my favourite Dal.
      </AccordionSection>

      {/* Accordion 3 */}
      <AccordionSection
        title="Item 3"
        isActive={activeIndex === 2}
        onClick={() => handleSectionClick(2)}
      >
        I love cauliflower.
      </AccordionSection>

    </div>
  );
};

export default Accordion;




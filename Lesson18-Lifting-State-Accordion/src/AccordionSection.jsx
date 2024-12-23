/* Child Component => AccordionSection.js

Each section receives props (title, isActive, onClick) from the parent 
to display its content and notify the parent when clicked.

*/

import React from "react";

const AccordionSection = ({ title, isActive, onClick, children }) => {

  return (

    <div className={`accordion-section ${isActive ? "active" : ""}`}>
      <button className="accordion-title" onClick={onClick}>
        {title}
      </button>
      {isActive && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default AccordionSection;

/*

In React, children refer to the elements or components nested inside another component.
It's a special prop that every React component receives by default, and it allows
you to pass JSX (HTML-like code), strings, or even other components into a component.

*/





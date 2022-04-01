import React from "react";

function Divider({ transformed }) {
  return (
    <div className={`section-divider ${transformed ? "transformed" : ""}`}>
      <div className="line"></div>
    </div>
  );
}

export default Divider;

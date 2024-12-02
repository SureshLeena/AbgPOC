import React from "react";
import ListThemeSearchResults from "./ListThemeResult";

function SearchResultsHeader({
    header,
    subHeader
}) {
  return (
    <div
      style={{
        background: "#FFF",
        display: "flex",
        flexDirection: "column",
        padding: "50px",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          color: "#364658",
            fontWeight: "600",
        }}
      >
        {header}
      </h1>
      <p
        style={{
          fontSize: "16px",
          color: "#7C8692",
          marginTop: 10,
        }}
      >
        {subHeader}
      </p>
    </div>
  );
}

export default SearchResultsHeader;

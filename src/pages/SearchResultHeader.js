import React from "react";
import ListThemeSearchResults from "./ListThemeResult";

function SearchResultsHeader({ template = "list", header, subHeader, imageURL }) {
  const ListViewHeader = () => {
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
  };

  const TimelineViewHeader = () => {
    return (
      <div
        style={{
          background: "#FFF",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 10
        }}
      >
        <img
          src={imageURL}
          className="w-full shadow-lg"
          style={{
            width: "100%",
            height: 250,
            maxHeight: "250px",
            backgroundSize: "cover",
            backgroundColor: "#F5CC9E",
            objectFit: 'fit',
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            maxHeight: 200,
            width: 300,
            background: "#ED736B",
            left: 40,
            maxWidth: "50%",
            borderRadius: 20,
            padding: 20,
          }}
        >
          <h1
            style={{
              fontSize: "30px",
              color: "#FFFFFF",
              fontWeight: "600",
            }}
          >
            {header}
          </h1>
        </div>
        {/* <h1
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
        </p> */}
      </div>
    );
  };

  return (template == "timeline" ? TimelineViewHeader() : ListViewHeader());
}

export default SearchResultsHeader;

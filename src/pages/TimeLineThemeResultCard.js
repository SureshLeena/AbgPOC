import React from "react";

function TimelineThemeResultCard({ num, info, image }) {
  const transformBoldText = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, "$1");
  };
  const CardContent = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "50px",
          maxWidth: "50%",
        }}
      >
        {/* <div
          style={{
            background: "#70D671",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "10px",
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#FFF",
            }}
          >
            {num}
          </h1>
        </div> */}
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#000",
          }}
        >
          {transformBoldText(info.title)}
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#64707E",
            marginTop: 10,
          }}
        >
          {transformBoldText(info.description)}
        </p>
      </div>
    );
  };

  const CardImageView = () => {
    return (
      <div
        style={{
          width: 370,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "#F5CC9E",
            width: 3,
            height: "calc(100% + 100px)",
            position: "absolute",
            top: -50,
            zIndex: 0
          }}
        ></div>
        {image ? (
          <img
            src={image}
            className="w-full shadow-lg"
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              backgroundSize: "cover",
              backgroundColor: "#D9D9D9",
              zIndex: 10,
              overflow: 'hidden',
              objectFit: 'cover'
            }}
          />
         ) : (
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              backgroundSize: "cover",
              backgroundColor: "#D9D9D9",
              zIndex: 10,
            }}
          ></div>
        )} 
      </div>
    );
  };

  return (
    <div style={{ marginTop: 50 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          position: "relative",
        }}
      >
        <CardImageView />
        <CardContent />
      </div>
    </div>
  );
}

export default TimelineThemeResultCard;

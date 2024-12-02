import React from "react";

function ListThemeResultCard({
  num,
  info,
  image,
  direction = "left-to-right",
}) {
  //   const [direction, setDirection] = React.useState(
  //     direction || "left-to-right"
  //   );
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
        <div
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
        </div>
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#64707E",
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
        {/* {
            info.details?.map((detail, index) => {
                return (
                    <p
                        key={index}
                        style={{
                            fontSize: "16px",
                            color: "#64707E",
                            marginTop: 10,
                        }}
                    >
                        {transformBoldText(detail)}
                    </p>
                )
            })
        } */}
      </div>
    );
  };

  const CardImageView = () => {
    return (
      <div style={{ width: "45%", display: "flex", alignItems: "center" }}>
        {image ? (
          <img
            src={image}
            alt="Generated content"
            className="w-full shadow-lg"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "250px",
              backgroundSize: "cover",
              backgroundColor: "#D9D9D9",
              borderTopLeftRadius: direction == "left-to-right" ? "10px" : 0,
              borderBottomLeftRadius: direction == "left-to-right" ? "10px" : 0,
              borderTopRightRadius: direction == "left-to-right" ? 0 : 10,
              borderBottomRightRadius: direction == "left-to-right" ? 0 : 10,
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: 250,
              backgroundSize: "cover",
              backgroundColor: "#D9D9D9",
              borderTopLeftRadius: direction == "left-to-right" ? "10px" : 0,
              borderBottomLeftRadius: direction == "left-to-right" ? "10px" : 0,
              borderTopRightRadius: direction == "left-to-right" ? 0 : 10,
              borderBottomRightRadius: direction == "left-to-right" ? 0 : 10,
            }}
          ></div>
        )}
        {/* <img
          src={ image ? image : ""}
          alt="Generated content"
          className="w-full shadow-lg"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "250px",
            backgroundSize: "cover",
            backgroundColor: "#D9D9D9",
            borderTopLeftRadius: direction == "left-to-right" ? "10px" : 0,
            borderBottomLeftRadius: direction == "left-to-right" ? "10px" : 0,
            borderTopRightRadius: direction == "left-to-right" ? 0 : 10,
            borderBottomRightRadius: direction == "left-to-right" ? 0 : 10,
          }}
        /> */}
      </div>
    );
  };

  const LeftToRightCard = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CardContent />
        <CardImageView />
      </div>
    );
  };

  const RightToLeftCard = () => {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CardImageView />
          <CardContent />
        </div>
      </div>
    );
  };

  return (
    <div style={{ marginTop: 50 }}>
      {direction == "left-to-right" ? <LeftToRightCard /> : <RightToLeftCard />}
    </div>
  );
}

export default ListThemeResultCard;

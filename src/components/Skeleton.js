import React from "react";

const Skeleton = ({ type = "text", lines = 1, width }) => {
  const getSkeletonStyle = () => {
    switch (type) {
      case "avatar":
        return "h-12 w-12 rounded-full";
      case "title":
        return "h-7 w-3/4";
      case "text":
        return "h-4 w-full";
      case "button":
        return "h-10 w-32";
      case "image":
        return "h-48 w-full";
      default:
        return "h-4 w-full";
    }
  };

  const baseStyle = "bg-gray-200 animate-pulse rounded";
  const skeletonStyle = getSkeletonStyle();

  if (lines > 1) {
    return (
      <div className="space-y-3">
        {Array(lines)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={`${baseStyle} ${skeletonStyle}`}
              style={{ width: i === lines - 1 ? "80%" : width }}
            />
          ))}
      </div>
    );
  }

  return <div className={`${baseStyle} ${skeletonStyle}`} style={{ width }} />;
};

// Example usage
const SkeletonCard = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "50%", padding: 20 }}>
        <Skeleton type="button"  width="60px"/>
        <div className="mt-2">
        <Skeleton type="title" />
        </div>
        <div className="mt-2">
          <Skeleton type="text" width="60%" />
        </div>
      </div>

      <div style={{ width: "40%" }}>
        <Skeleton type="image" />
      </div>
    </div>
  );
};

const SkeletonCard2 = () => {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
         <div style={{ width: "40%" }}>
          <Skeleton type="image" />
        </div>

        <div style={{ width: "50%", padding: 20 }}>
          <Skeleton type="button"  width="60px"/>
          <div className="mt-2">
          <Skeleton type="title" />
          </div>
          <div className="mt-2">
            <Skeleton type="text" width="60%" />
          </div>
        </div>
  
       
      </div>
    );
  };

export { Skeleton, SkeletonCard, SkeletonCard2 };

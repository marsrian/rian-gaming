import React from "react";

const Loading = ({ loadingInfo }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <span className="loader"></span>
      <p className="text-white text-center">{loadingInfo}</p>
    </div>
  );
};

export default Loading;

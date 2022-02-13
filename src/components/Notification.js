import React from "react";

const style = {
  color: "green",
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  const isError = message.endsWith("_msg_is_err");

  return (
    <div className="notification" style={isError ? { ...style, color: "red" } : style}>
      {isError ? message.replace("_msg_is_err", "") : message}
    </div>
  );
};

export default Notification;

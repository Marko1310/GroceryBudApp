import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert }) => {
  // delete error message after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;

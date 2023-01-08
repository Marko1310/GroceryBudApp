import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  // delete error message after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;

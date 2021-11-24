import React, { useEffect, Fragment } from "react";

const LifecycleDemo = () => {
  useEffect(() => {
    console.log("Mounting...");
    return () => console.log("unmounting...");
  }, []);

  return <Fragment>THIS IS Mounting and Unmounting</Fragment>;
};

export default LifecycleDemo;

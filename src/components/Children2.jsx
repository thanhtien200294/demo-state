import React, { memo, useEffect, useState } from "react";

function Children2() {

  useEffect(() => {
    console.log("children2 mounting");
    return () => {
        console.log("children2 unmount");
    }
  },[]);

  return (
    <div>
      <h3>Children 2</h3>
    </div>
  );
}

export default Children2;

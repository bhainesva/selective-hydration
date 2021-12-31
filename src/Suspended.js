import React, { useEffect, useState } from "react";

function Suspended(props) {
  const [s, setS] = useState("");
  useEffect(() => {
    setTimeout(() => setS("fetched data"), 1500)
  })

  return (
    <div>
      Marco!: {s}
    </div> 
  )
};

export default Suspended;
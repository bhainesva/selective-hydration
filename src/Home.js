import React, { Suspense } from "react";
import Suspended from "./Suspended";

function Home(props) {
  return (
    <h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Suspended />
      </Suspense>
      Hello {props.name}!
    </h1>
  )
};

export default Home;
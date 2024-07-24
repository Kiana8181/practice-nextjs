"use client";

import React, { use, useState } from "react";
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <p>Loading...</p>,
});

const LazyLoading = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setVisible(!isVisible)}
        className="btn btn-primary mr-3"
      >
        Show
      </button>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;

          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
        className="btn btn-primary"
      >
        Ordered
      </button>

      {isVisible && <HeavyComponent />}
    </>
  );
};

export default LazyLoading;

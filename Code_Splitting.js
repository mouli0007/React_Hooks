import React, { lazy, Suspense } from "react";
import Lazy from "./Lazy";

const Lazy = lazy(() => import("./Lazy"));

const Memo = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading.....</h1>}>
        <Lazy />
      </Suspense>
    </div>
  );
};

export default Memo;

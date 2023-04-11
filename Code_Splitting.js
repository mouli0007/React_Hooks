############################################
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
#################################
 Lazy loading a function !
 The JS File contains the sum function will only be downloaded when we click the button
<button
  onClick={() => {
    import("../sum.js").then((module) => {
      alert(module.sum(2, 2));
    });
  }}
>
  Add Sum
</button>
############################
 Code Splitting a React component when you have a named export
  Manually  delaying the code for some seconds
function wait(duration) {
  return new Promise((res) => setTimeout(res, duration));
}
const About = lazy(() =>
  wait(1000).then((module) => {
    return { default: module.About };
  })
);

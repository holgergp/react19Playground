import { Suspense, use } from "react";

export const LocalPromiseConditional = ({toggle}) => {
  const inlinePromise = Promise.resolve("Test");
  const inlinePromise2 = Promise.resolve("Test2");

  return <Suspense fallback={<p>Loading!</p>}>
    <PromiseConsumer
      value1={inlinePromise}
      value2={inlinePromise2}
      toggle={toggle}
    ></PromiseConsumer>
  </Suspense>;
};

const PromiseConsumer = ({ value1, value2, toggle }) => {
  const inlinePromiseValue1 = use(value1);
  let inlinePromiseValue2
  if(toggle) {
    inlinePromiseValue2 = use(value2);
  }
  console.log("rendering", value1, value2);

  return (
    <div className={"w-28 h-36 px-2 pt-1 pb-2 border-2"}>
      <>{inlinePromiseValue1}</>
      <>{inlinePromiseValue2}</>
    </div>
  );
};
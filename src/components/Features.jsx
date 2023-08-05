import { Suspense, lazy } from "react";

const Aboutus = lazy(() => import("./Aboutus"));
const Creations = lazy(() => import("./Creations"));
const Features = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div className=" md:px-[2rem] py-[5rem] 2xl:px-[6rem] bg-White">
        <Aboutus />
        <Creations />
      </div>
    </Suspense>
  );
};

export default Features;

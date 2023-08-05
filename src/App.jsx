import "./App.css";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("../src/components/Home"));
const Features = lazy(() => import("../src/components/Features"));
const Footer = lazy(() => import("../src/components/Footer"));
function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Home />
      <Features />
      <Footer />
    </Suspense>
  );
}

export default App;

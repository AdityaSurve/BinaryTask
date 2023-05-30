import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import WhatIsKozo from "./components/WhatIsKozo";
import Features from "./components/Features";
import ProblemsSolved from "./components/ProblemsSolved";
import Integration from "./components/Integration";
import Team from "./components/Team";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Banner />
      <Introduction />
      <WhatIsKozo />
      <Features />
      <ProblemsSolved />
      <Integration />
      <Team />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import WhatIsKozo from "./components/WhatIsKozo";
import Features from "./components/Features";
import ProblemsSolved from "./components/ProblemsSolved";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Banner />
      <Introduction />
      <WhatIsKozo />
      <Features />
      <ProblemsSolved />
    </div>
  );
}

export default App;

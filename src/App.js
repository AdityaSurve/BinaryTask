import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import WhatIsKozo from "./components/WhatIsKozo";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Banner />
      <Introduction />
      <WhatIsKozo />
    </div>
  );
}

export default App;

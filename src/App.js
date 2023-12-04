import Header from "./Components/Header/Header";
import Card from "./Components/Cards/Card";
import Collection from "./Components/Collection/Collection";
import Cities from "./Components/Cities/Cities";
import CTA from "./Components/CTA/CTA";
import Accordian from "./Components/Accordian/Accordian";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Collection />
      <Cities />
      <CTA />
      <Accordian />
      <Footer />
    </div>
  );
}

export default App;

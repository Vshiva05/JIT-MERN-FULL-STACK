// function App(){
//   return(
//     <div>
//       <h1> Hello , Friends!</h1>
//       <p>Chai peelo</p>
//     </div>
//   );
// }
// export default App;
import "./app.css";
import Navbar from "./components/Navbar";
import Hero from"./components/Hero";
import EventSection from "./components/EventSection";
import Footer from "./components/Footer";
function App(){
  return(
    <div>
    <Navbar />
    <main id="home">
    <Hero />
    <EventSection/>
    </main>
    <Footer/>
    </div>
  );

  }
  export default App;
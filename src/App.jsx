import "./App.css";
import Hero from "./components/blog/Hero";
import PopularSection from "./components/blog/PopularSection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <PopularSection />
      <Footer />
    </>
  );
}

export default App;

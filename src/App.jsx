import "./App.css";
import Hero from "./components/blog/Hero";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import FeaturedCollection from "./page/sections/featured collection/FeaturedCollection";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<FeaturedCollection />
			<Footer />
		</>
	);
}

export default App;

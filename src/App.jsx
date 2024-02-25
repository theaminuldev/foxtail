import FeaturedCollection from "./components/blog/FeaturedCollection";
import Hero from "./components/blog/Hero";

import PopularSection from "./components/blog/PopularSection";

import SectionTwo from "./components/blog/SectionTwo";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { useQueryPosts } from "./hooks";
import PopularSection from "./components/blog/PopularSection";

function App() {

	const { postData, error } = useQueryPosts();
	return (
		<>
			<Header />
			<Hero />
			<PopularSection />
			<FeaturedCollection />
			<SectionTwo />
			<Footer />
		</>
	);

}

export default App;

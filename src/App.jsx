import FeaturedCollection from "./components/blog/FeaturedCollection";
import Hero from "./components/blog/Hero";
import PopularSection from "./components/blog/PopularSection";

import SectionTwo from "./components/blog/SectionTwo";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { PostProvider } from "./provider";

function App() {
	return (
		<>
			<Header />
			<Hero />

			{/* wrap by PostProvider to access post data from all children */}
			<PostProvider>
				<PopularSection />
				<FeaturedCollection />
				<SectionTwo />
			</PostProvider>

			<Footer />
		</>
	);
}

export default App;

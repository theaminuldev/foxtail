import NewsItem from "./components/NewsItem";

const placeholderNewsItems = [
  {
    title: "Firefox 89: A new look, and new privacy features",
    subtitle:
      "The latest version of Firefox brings a modern and calmer look, and new privacy features.",
    url: "https://blog.mozilla.org/firefox/firefox-89-a-new-look-and-new-privacy-features/",
  },
  {
    title: "Pocket’s new features make it easier to save and discover content",
    subtitle:
      "Pocket’s new features make it easier to save and discover content.",
    url: "https://blog.mozilla.org/blog/2021/06/23/pockets-new-features-make-it-easier-to-save-and-discover-content/",
  },
  {
    title: "Mozilla’s 2020 Internet Health Report: Unhealthy is the New Normal",
    subtitle:
      "The 2020 Internet Health Report is a call to action for a healthier internet.",
    url: "https://blog.mozilla.org/blog/2020/04/21/mozillas-2020-internet-health-report-unhealthy-is-the-new-normal/",
  },
  {
    title: "Mozilla’s 2020 Internet Health Report: Unhealthy is the New Normal",
    subtitle:
      "The 2020 Internet Health Report is a call to action for a healthier internet.",
    url: "https://blog.mozilla.org/blog/2020/04/21/mozillas-2020-internet-health-report-unhealthy-is-the-new-normal/",
  },
];

const FeaturedCollection = ({ newsItems = placeholderNewsItems }) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <span className="text-xs mb-4">FEATURED COLLECTION</span>
      <h2 className="text-[2rem] font-bold mb-16">Latest Mozilla news</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
        {newsItems.map((item, index) => (
          <NewsItem
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            url={item.url}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-16">
        <a
          href=""
          className="text-4 font-bold text-center underline hover:no-underline"
        >
          Read More News
        </a>
      </div>
    </section>
  );
};

export default FeaturedCollection;

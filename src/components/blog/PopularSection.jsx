import React, { useEffect, useRef, useState } from "react";
const datas = [
  {
    id: 1,
    ImageUrl:
      "https://blog.mozilla.org/wp-content/blogs.dir/278/files/2022/03/moz_blog_header_pattern_1920x1080_03-800x800.jpg",
    title: " Next steps for Mozilla and Trustworthy AI",
    category: "ai",
    url: "https://blog.mozilla.org/en/mozilla/ai/next-steps-for-mozilla-and-trustworthy-ai/",
  },
  {
    id: 2,
    ImageUrl:
      "https://blog.mozilla.org/wp-content/blogs.dir/278/files/2024/01/moz_distilled_header_monitor_plus_01_2048x1153-800x800.png",
    title:
      "Introducing Mozilla Monitor Plus, a new tool to automatically remove your personal information from datas broker sites",
    category: "mozilla",
    url: "https://blog.mozilla.org/en/mozilla/ai/next-steps-for-mozilla-and-trustworthy-ai/",
  },
  {
    id: 3,
    ImageUrl:
      "https://blog.mozilla.org/wp-content/blogs.dir/278/files/2024/02/Mozilla_rise25_Chris-Smalls_1-800x800.jpg",
    title:
      " Activist Chris Smalls reflects on taking on Amazon, forming worker unions and digital activism in 2024",
    category: "INTERNET CULTURE",
    url: "https://blog.mozilla.org/en/mozilla/ai/next-steps-for-mozilla-and-trustworthy-ai/",
  },
];

export default function PopularSection() {
  const [isActive, setIsActive] = useState(1);
  const timeId = useRef();

  useEffect(() => {
    clearInterval(timeId.current);
    timeId.current = setInterval(() => {
      setIsActive((isActive + 1) % 3);
    }, 2000);
    return () => clearInterval(timeId.current);
  }, [isActive]);

  const handleMouseOver = (index) => {
    clearInterval(timeId.current); // Clear the interval when mouse is over
    setIsActive(index);
  };
  return (
    <section className="flex flex-wrap xl:my-[190px] md:my-[190px] my-[120px]">
      <div className="grid xl:grid-cols-2 xl:gap-x-20 xl:max-w-[1152px] md:max-w-[628px]  max-w-[388px] mx-auto my-0">
        <div className="hidden xl:block">
          <div className="relative grid grid-cols-[repeat(20,1fr)] grid-rows-[56px,144px] self-center justify-self-center">
            <img
              width="800"
              height="800"
              src={datas[0].ImageUrl}
              alt="An illustration shows the Mozilla logo atop a pattern of building blocks."
              className={`col-start-1 col-end-[16] row-start-1 ${
                isActive === 1 ? "z-20" : "z-0"
              }`}
            />
            <img
              width="800"
              height="800"
              src={datas[1].ImageUrl}
              alt=""
              className={`col-start-6 col-end-[21] row-start-2 ${
                isActive === 2 ? "z-20" : "z-0"
              }`}
            />

            <img
              width="800"
              height="800"
              src={datas[2].ImageUrl}
              alt=""
              className={`col-start-3 col-end-[18] row-start-3 ${
                isActive === 3 ? "z-20" : "z-0"
              }`}
            />
          </div>
        </div>

        <div className=" flex flex-col max-w-full">
          {datas.map((data, i) => {
            return (
              <div
                className="flex mb-[48px] justify-start items-center"
                id="ft-js-first"
                key={data.id}
              >
                <img
                  width="800"
                  height="800"
                  src={data.ImageUrl}
                  className="lg:hidden shadow-xl shadow-black/20 mr-6 rounded-lg flex-1 inline-block max-w-[35%]  h-fit"
                  alt=""
                />
                <div className="tracking-wide ">
                  <span className="uppercase mb-[16px] leading-10 tracking-widest">
                    {data.category}
                  </span>
                  <a href={data.url}>
                    <h2
                      className="font-bold mb-[16px] max-w-[95%] hover:underline text-wrap text-[1.3rem]"
                      onMouseOver={() => handleMouseOver(i + 1)}
                    >
                      {data.title}
                    </h2>
                    <span className="underline">Read More</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full text-center underline text-lg text-[#0060df] font-bold mt-[64px]">
        <a href="https://blog.mozilla.org/latest/" className="mzp-c-cta-link">
          View All Posts{" "}
        </a>
      </div>
    </section>
  );
}

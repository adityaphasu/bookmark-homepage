import { useState } from "react";
import Illustration1 from "../assets/images/illustration-features-tab-1.svg";
import Illustration2 from "../assets/images/illustration-features-tab-2.svg";
import Illustration3 from "../assets/images/illustration-features-tab-3.svg";

const features = [
  {
    title: "Simple Bookmarking",
    heading: "Bookmark in one click",
    illustration: Illustration1,
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    title: "Speedy Searching",
    heading: "Intelligent search",
    illustration: Illustration2,
    description:
      "Our powerful search feature allows you to find saved sites quickly. Start typing and we’ll suggest sites that match your query.",
  },
  {
    title: "Easy Sharing",
    heading: "Share your bookmarks",
    illustration: Illustration3,
    description:
      "Share your favourite sites with friends and family. Our easy-to-use sharing feature lets you send bookmarks via email or social media.",
  },
];

const FeaturesTab = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section className="overflow-hidden py-23.5 text-center">
      <div className="px-8 pb-10">
        <h2 className="text-2xl">Features</h2>
        <p className="mt-[0.65rem]">
          Our aim is to make it quick and easy for you to access your favourite websites. Your
          bookmarks sync between your devices so you can access them on the go.
        </p>
      </div>
      <div className="border-light-gray mx-8 border-y">
        <ul className="divide-light-gray flex flex-col items-center justify-center divide-y-1">
          {features.map((feature, index) => (
            <li key={index} className="w-full">
              <button
                className={`relative w-full cursor-pointer py-4 text-[16.75px] transition-all ${
                  activeFeature.title === feature.title ? "font-medium" : "font-normal"
                }`}
                onClick={() => setActiveFeature(feature)}
                aria-selected={activeFeature.title === feature.title}>
                {feature.title}
                {activeFeature.title === feature.title && (
                  <span className="bg-soft-red absolute bottom-[0.5px] left-1/2 h-1 w-36 -translate-x-1/2"></span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative md:flex">
        <div className="relative z-20 flex items-center justify-center px-8 py-18">
          <img src={activeFeature.illustration} alt="Hero" className="z-20 max-w-[19.5rem]" />
          <div className="bg-soft-blue absolute top-26.75 left-0 z-1 h-[58.9%] w-[82%] rounded-r-full" />
        </div>

        <div className="px-8 py-2">
          <h3 className="text-2xl">{activeFeature.heading}</h3>
          <p className="mt-2.5">{activeFeature.description}</p>
        </div>
      </div>
    </section>
  );
};
export default FeaturesTab;

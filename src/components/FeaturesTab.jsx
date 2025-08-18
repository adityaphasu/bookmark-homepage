import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Illustration1 from "../assets/images/illustration-features-tab-1.svg";
import Illustration2 from "../assets/images/illustration-features-tab-2.svg";
import Illustration3 from "../assets/images/illustration-features-tab-3.svg";
import MoreButton from "./MoreButton";

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
    <section className="py-23.5 text-center lg:mx-auto lg:max-w-[78.5rem] lg:pt-[0.7rem]">
      <div className="px-8 pb-10 lg:mx-auto lg:max-w-[37rem]">
        <h2 className="text-2xl md:text-[2rem]">Features</h2>
        <p className="mt-[0.65rem] lg:mt-5">
          Our aim is to make it quick and easy for you to access your favourite websites. Your
          bookmarks sync between your devices so you can access them on the go.
        </p>
      </div>

      <div className="border-light-gray lg:border-t-none mx-8 border-t md:border-none lg:mx-auto lg:max-w-[45.7rem]">
        <ul className="flex flex-col items-center justify-center md:flex-row">
          {features.map((feature, index) => (
            <li key={index} className="border-light-gray w-full border-b">
              <button
                type="button"
                className={`relative w-full cursor-pointer py-4 text-[16.75px] transition-all lg:py-7 ${
                  activeFeature.title === feature.title
                    ? "text-light-grayish-blue font-medium"
                    : "hover:text-soft-red font-normal text-gray-500"
                }`}
                onClick={() => setActiveFeature(feature)}>
                {feature.title}
                {activeFeature.title === feature.title && (
                  <motion.span
                    layoutId="underline"
                    className="bg-soft-red absolute bottom-0 left-1/2 h-1.25 w-36 -translate-x-1/2 lg:bottom-[0.5px] lg:w-full"></motion.span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeFeature.heading}
          role="tabpanel"
          id={activeFeature.title.replace(/\s+/g, "-")}
          aria-labelledby={`tab-${activeFeature.title.replace(/\s+/g, "-")}`}
          className="relative md:flex md:items-center md:justify-between">
          <div className="relative z-20 flex items-center justify-center px-8 py-18 lg:ml-11.25 lg:h-[490px]">
            <motion.img
              key={activeFeature.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut" }}
              src={activeFeature.illustration}
              alt="Hero"
              className={`z-20 max-w-[19.5rem] lg:max-w-full ${activeFeature.title !== "Simple Bookmarking" && "ml-10 lg:ml-18.5"}`}
            />
            <div className="bg-soft-blue absolute top-26.75 left-0 z-1 h-[58.9%] w-[82%] rounded-r-full md:top-[9.65rem] lg:-left-34.5 lg:h-88 lg:min-w-160" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-8 py-2 md:text-left lg:mr-9.75 lg:space-y-[1.36rem] lg:py-10 lg:pt-11">
            <h3 className="text-2xl lg:text-[2rem]">{activeFeature.heading}</h3>
            <p className="mt-2.5 lg:max-w-md">{activeFeature.description}</p>
            <div className="hidden md:block">
              <MoreButton />
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
export default FeaturesTab;

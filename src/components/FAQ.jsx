import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import Arrow from "../assets/images/icon-arrow.svg";
import MoreButton from "./MoreButton";

const FAQs = [
  {
    question: "What is Bookmark?",
    answer:
      "Bookmark is a tool that helps you save, organize, and manage your favorite links and resources in one place.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "You can request a new browser by contacting our support team through the contact form on our website. We are always looking to expand our compatibility.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes, Bookmark has a mobile app available for both iOS and Android devices, allowing you to access your bookmarks on the go.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Bookmark is currently available for Chrome, Firefox, and Opera. We are working on expanding support to other Chromium-based browsers.",
  },
];

const FAQ = () => {
  return (
    <section className="px-8 pt-17 pb-30.5 md:px-6.5 md:pt-19 md:pb-37.5 lg:mx-auto lg:max-w-148">
      <div className="text-center">
        <h2 className="text-2xl md:text-[2rem]">Frequently Asked Questions</h2>
        <p className="mt-3.5 md:mt-4.75 md:px-2">
          Here are some of our FAQs. If you have any other questions you’d like answered please feel
          free to email us.
        </p>
      </div>
      <LayoutGroup>
        <motion.div
          layout
          className="md:border-light-gray/80 mt-11.5 flex flex-col gap-0.5 pb-[2.45rem] md:mt-14.25 md:gap-0 md:space-y-0.75 md:border-t">
          <AnimatePresence>
            {FAQs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </AnimatePresence>
        </motion.div>
        <motion.div layout className="flex justify-center md:mt-1.5">
          <MoreButton />
        </motion.div>
      </LayoutGroup>
    </section>
  );
};
export default FAQ;

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div layout className="border-light-gray/80 border-b py-[1.115rem] text-left md:py-4">
      <motion.button
        layout
        type="button"
        className="group mt-1 flex w-full items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}>
        <span
          className={`text-light-grayish-blue group-hover:text-soft-red text-left text-[15px] font-normal transition-colors md:text-lg ${isOpen ? "text-soft-red" : ""}`}>
          {question}
        </span>
        <img
          src={Arrow}
          alt=""
          className={`transition-transform md:mr-5.75 ${isOpen ? "filter-red rotate-180" : ""}`}
        />
      </motion.button>

      {isOpen && (
        <motion.p
          layout
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="py-8.5 pr-5 text-[15.25px] leading-[30px]">
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
};

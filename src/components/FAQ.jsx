import { useState } from "react";
import Arrow from "../assets/images/icon-arrow.svg";
import MoreButton from "./MoreButton";

const FAQs = [
  {
    question: "What is Bookmark?",
    answer:
      "Bookmark is a tool that helps you save, organize, and manage your favorite links and resources in one place.",
  },
  {
    question: "How can i request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
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
    <section className="px-8 py-17">
      <div className="text-center">
        <h2 className="text-2xl">Frequently Asked Questions</h2>
        <p className="mt-3.5">
          Here are some of our FAQs. If you have any other questions you’d like answered please feel
          free to email us.
        </p>
      </div>
      <div className="flex flex-col gap-0.5 pt-11.5 pb-[2.45rem]">
        {FAQs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="flex justify-center">
        <MoreButton />
      </div>
    </section>
  );
};
export default FAQ;

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-light-gray border-b py-[1.115rem] text-left">
      <button
        className="mt-1 flex w-full items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}>
        <h3 className="text-light-grayish-blue text-left text-[15px] font-normal">{question}</h3>
        <img src={Arrow} alt="" className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <p className="py-8.5 pr-5 text-[15.25px] leading-[30px]">{answer}</p>}
    </div>
  );
};

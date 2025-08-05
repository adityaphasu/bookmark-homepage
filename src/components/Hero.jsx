import HeroImage from "../assets/images/illustration-hero.svg";

const Hero = () => {
  return (
    <section className="relative py-[2.06rem] lg:mx-auto lg:flex lg:max-w-[78.5rem] lg:flex-row-reverse lg:items-start lg:pt-[3.6rem] lg:pb-0">
      <div className="relative z-20 flex items-center justify-center pb-[33px] lg:pb-[6.4rem]">
        <img src={HeroImage} alt="Hero" className="z-20 w-[94%] lg:w-full lg:translate-x-10" />
        <div className="bg-soft-blue absolute top-[3.6rem] right-0 z-1 h-[71.75%] w-[81%] rounded-l-full md:top-1/4 md:h-[62%] lg:-right-[6.7rem]" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4.5 p-6 text-center lg:flex-1 lg:items-start lg:justify-start lg:gap-5.5 lg:py-19.5 lg:pl-18 lg:text-left">
        <h1 className="text-3xl leading-10 md:text-5xl md:leading-13.5">
          A Simple Bookmark Manager
        </h1>
        <p className="px-2 lg:max-w-lg lg:px-0">
          A clean and simple interface to organize your favourite websites. Open a new browser tab
          and see your sites load instantly. Try it for free.
        </p>
        <div className="flex w-full items-center justify-center gap-4 pt-3 text-sm font-medium lg:justify-start lg:pt-2.5">
          <button className="bg-soft-blue shadow-light-bluish-gray rounded-md px-[1.185rem] py-3.5 text-white shadow-lg lg:px-7">
            Get it on Chrome
          </button>
          <button className="text-light-grayish-blue/80 shadow-light-bluish-gray bg-light-gray/10 rounded-md px-4.5 py-3.5 shadow-lg lg:px-6">
            Get it on Firefox
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;

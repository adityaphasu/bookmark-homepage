import HeroImage from "../assets/images/illustration-hero.svg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-[33px]">
      <div className="relative z-20 flex items-center justify-center pb-[33px]">
        <img src={HeroImage} alt="Hero" className="w-[94%]" />
        <div className="bg-soft-blue absolute top-[3.6rem] right-0 z-1 h-[71.75%] w-[81%] rounded-l-full" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4.5 px-6 py-6 text-center">
        <h1 className="text-3xl leading-10">A Simple Bookmark Manager</h1>
        <p className="px-2">
          A clean and simple interface to organize your favourite websites. Open a new browser tab
          and see your sites load instantly. Try it for free.
        </p>
        <div className="flex w-full items-center justify-center gap-4 pt-3 text-sm font-medium">
          <button className="bg-soft-blue shadow-light-bluish-gray rounded-md px-[1.185rem] py-3.5 text-white shadow-lg">
            Get it on Chrome
          </button>
          <button className="bg-light-gray/15 text-light-grayish-blue/80 shadow-light-bluish-gray rounded-md px-4.5 py-3.5 shadow-lg">
            Get it on Firefox
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;

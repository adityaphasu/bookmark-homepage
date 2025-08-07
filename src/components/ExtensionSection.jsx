import Firefox from "../assets/images/logo-firefox.svg";
import Chrome from "../assets/images/logo-chrome.svg";
import Opera from "../assets/images/logo-opera.svg";
import Dots from "../assets/images/bg-dots.svg";

const extensions = [
  {
    name: "Chrome",
    logo: Chrome,

    version: "62",
  },
  {
    name: "Firefox",
    logo: Firefox,
    version: "55",
  },
  {
    name: "Opera",
    logo: Opera,
    version: "46",
  },
];

const ExtensionSection = () => {
  const margins = ["", "md-lg:mt-14", "md-lg:mt-24"];

  return (
    <section className="px-12 py-[2.9rem] text-center lg:pt-19">
      <div>
        <h2 className="text-2xl md:text-[2rem]">Download the extension</h2>
        <p className="mt-2.5 lg:mx-auto lg:mt-5 lg:max-w-140">
          We've got more browsers in the pipeline. Please do let us know if you've got a favourite
          you'd like us to prioritize.
        </p>
      </div>
      <div className="md-lg:items-start flex flex-col items-center justify-center gap-[1.5rem] py-6 md:flex-row md:gap-8.75 md:py-8">
        {extensions.map((extension, index) => (
          <div
            key={index}
            className={`shadow-light-bluish-gray mt-4 rounded-lg bg-white pt-[3.05rem] pb-2 shadow-lg transition-shadow hover:shadow-xl ${margins[index]}`}>
            <img src={extension.logo} alt={`${extension.name} logo`} className="inline-block" />
            <div className="py-7.5">
              <h3 className="text-[20.75px]">Add to {extension.name}</h3>
              <p className="md-lg:mt-[1.5px] md-lg:text-[14.5px] md-lg:tracking-wide mt-1">
                Minimum version {extension.version}
              </p>
            </div>
            <img src={Dots} alt="" className="mt-[.1563rem]" />
            <div className="md-lg:ml-0.5 flex items-center justify-center py-4">
              <button className="bg-soft-blue border-soft-blue hover:text-soft-blue mt-2 cursor-pointer rounded-sm border-2 px-9 py-[0.67rem] text-[15px] font-medium text-white transition-colors hover:bg-white md:px-[1.9rem]">
                Add & Install Extension
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ExtensionSection;

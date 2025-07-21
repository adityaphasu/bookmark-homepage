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
  return (
    <section className="px-12 py-[2.9rem] text-center">
      <div>
        <h2 className="text-2xl">Download the extension</h2>
        <p className="mt-2.5">
          We've got more browsers in the pipeline. Please do let us know if you've got a favourite
          you'd like us to prioritize.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-[1.5rem] py-6">
        {extensions.map((extension, index) => (
          <div
            key={index}
            className="shadow-light-bluish-gray mt-4 rounded-lg bg-white pt-[3.05rem] pb-2 shadow-lg transition-shadow hover:shadow-xl">
            <img src={extension.logo} alt={`${extension.name} logo`} className="inline-block" />
            <div className="py-7.5">
              <h3 className="text-[20.5px]">Add to {extension.name}</h3>
              <p className="mt-1">Minimum version {extension.version}</p>
            </div>
            <img src={Dots} alt="" className="mt-[.1563rem]" />
            <div className="flex items-center justify-center py-4">
              <button className="bg-soft-blue mt-2 cursor-pointer rounded-md px-9 py-[0.8rem] text-[15px] text-white">
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

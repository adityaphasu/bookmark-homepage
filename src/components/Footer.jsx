import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const links = ["Features", "Pricing", "Contact"];

const Footer = () => {
  return (
    <footer className="bg-light-grayish-blue pt-9.5 pb-9 md:py-6">
      <div className="flex w-full max-w-[76.93rem] flex-col items-center gap-[2.18rem] px-8 md:mx-auto md:flex-row md:justify-between md:gap-16 md:px-15">
        <div>
          <Logo textFill="#FFF" />
        </div>
        <div className="flex flex-col items-center gap-[2.18rem] md:flex-1 md:flex-row md:justify-between">
          <ul className="flex flex-col items-center gap-[1.35rem] md:flex-row md:gap-11.5">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-soft-red text-[15.5px] font-light tracking-widest text-white uppercase transition-colors md:text-[13px] md:font-normal">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="py-2">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

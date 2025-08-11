import { useEffect, useState } from "react";
import HamburgerMenu from "../assets/images/icon-hamburger.svg";
import CloseMenu from "../assets/images/icon-close.svg";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const links = ["Features", "Pricing", "Contact"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <header className="mx-auto md:max-w-[76.75rem]">
      <nav className="relative px-8 py-10 md:flex md:items-center md:justify-between lg:py-11.5 lg:pr-[3.6rem] lg:pl-16">
        <div className="relative z-50 flex items-center justify-between">
          <div>
            <a href="/" aria-label="Homepage">
              <Logo
                textFill={isMenuOpen ? "#FFF" : "#242A45"}
                circleFill={isMenuOpen ? "#FFF" : "#5267DF"}
                bookmarkFill={isMenuOpen ? "#252b46" : "#FFF"}
              />
            </a>
          </div>
          <div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <img src={isMenuOpen ? CloseMenu : HamburgerMenu} alt="Menu" />
            </button>
          </div>
        </div>
        <div
          className={`bg-light-grayish-blue/95 fixed inset-x-0 z-40 flex h-screen w-full flex-col justify-between pt-26 pb-11 transition-all md:relative md:h-auto md:w-auto md:bg-white md:py-0 ${isMenuOpen ? "top-0" : "-top-full"}`}>
          <ul className="flex flex-col items-center justify-center gap-4 px-8 text-[1.285rem] md:flex-row md:gap-[47px] md:px-0 md:text-sm">
            {links.map((link, index) => (
              <li
                key={index}
                className="w-full border-t-[0.1px] border-neutral-50/20 pt-[18.5px] text-center md:w-auto md:border-none md:pt-0">
                <a
                  href="#"
                  className="md:text-light-grayish-blue hover:text-soft-red mr-3 font-light tracking-[0.12em] text-white uppercase transition-colors md:mr-0 md:font-normal md:tracking-wider">
                  {link}
                </a>
              </li>
            ))}
            <li className="w-full border-t-[0.1px] border-neutral-50/20 pt-6.5 text-center md:border-none md:pt-0">
              <button className="hover:text-light-grayish-blue md:bg-soft-red md:border-soft-red md:hover:text-soft-red w-full rounded-md border-2 border-white pt-2 pb-1.5 font-medium tracking-[0.12em] text-white uppercase transition-colors hover:bg-white md:px-[1.85rem] md:py-2.5">
                Login
              </button>
            </li>
          </ul>
          <div className="pt-8 md:hidden">
            <SocialLinks />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;

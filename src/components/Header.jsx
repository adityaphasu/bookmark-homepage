import { useState } from "react";
import BookMarkLogo from "../assets/images/logo-bookmark.svg";
import LightBookMarkLogo from "../assets/images/logo-bookmark-light.svg";
import HamburgerMenu from "../assets/images/icon-hamburger.svg";
import CloseMenu from "../assets/images/icon-close.svg";
import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";

const links = ["Features", "Pricing", "Contact"];
const socialLinks = ["Facebook", "Twitter"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="relative px-8 py-10">
        <div className="relative z-50 flex items-center justify-between">
          <div>
            <a href="/">
              <img
                src={isMenuOpen ? LightBookMarkLogo : BookMarkLogo}
                alt="Logo"
                aria-label="Bookmark logo"
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
          className={`bg-light-grayish-blue/95 fixed inset-x-0 z-40 flex h-screen w-full flex-col justify-between pt-26 pb-11 transition-all ${isMenuOpen ? "top-0" : "-top-full"}`}>
          <ul className="flex flex-col items-center justify-center gap-4 px-8">
            {links.map((link, index) => (
              <li
                key={index}
                className="w-full border-t-[0.1px] border-neutral-50/20 pt-[18.5px] text-center">
                <a
                  href="#"
                  className="mr-3 text-[1.285rem] font-light tracking-[0.12em] text-white uppercase transition-colors">
                  {link}
                </a>
              </li>
            ))}
            <li className="w-full border-t-[0.1px] border-neutral-50/20 pt-6.5 text-center">
              <button className="hover:text-light-grayish-blue w-full rounded-md border-2 border-white pt-2 pb-1.5 text-[1.285rem] tracking-[0.12em] text-white uppercase transition-colors hover:bg-white">
                Login
              </button>
            </li>
          </ul>
          <div>
            <ul className="flex items-center justify-center gap-10 pt-8">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a href="#" className="text-white transition-colors" aria-label={social}>
                    <img src={social === "Facebook" ? Facebook : Twitter} alt={social} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;

import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const links = ["Features", "Pricing", "Contact"];

const Footer = () => {
  return (
    <footer className="bg-light-grayish-blue flex flex-col items-center gap-[2.18rem] pt-9.5 pb-9">
      <div>
        <Logo textFill="#FFF" />
      </div>
      <ul className="flex flex-col items-center gap-[1.35rem]">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-[15.5px] font-light tracking-widest text-white uppercase transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div className="py-2">
        <SocialLinks />
      </div>
    </footer>
  );
};
export default Footer;

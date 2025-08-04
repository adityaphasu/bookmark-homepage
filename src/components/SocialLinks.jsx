import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";

const socialLinks = ["Facebook", "Twitter"];

const SocialLinks = () => {
  return (
    <ul className="flex items-center justify-center gap-10">
      {socialLinks.map((social, index) => (
        <li key={index}>
          <a href="#" className="social-link text-white transition-all" aria-label={social}>
            <img src={social === "Facebook" ? Facebook : Twitter} alt={social} className="" />
          </a>
        </li>
      ))}
    </ul>
  );
};
export default SocialLinks;

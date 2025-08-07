import { useState } from "react";
import ErrorIcon from "../assets/images/icon-error.svg";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <section className="bg-soft-blue flex flex-col items-center justify-center px-6 pt-16.5 pb-12 text-center md:pt-16 md:pb-14.75">
      <div className="md:mx-auto md:max-w-114.75">
        <p className="mb-1.5 text-xs tracking-[0.4em] text-white uppercase md:ml-1.75 md:tracking-[0.48em]">
          35,000+ Already Joined
        </p>
        <h2 className="mb-4 text-2xl leading-7.5 font-medium text-white md:mt-7.75 md:mb-5 md:text-[2rem] md:leading-10">
          Stay up-to-date with what we're doing
        </h2>
        <form
          className="relative flex w-full flex-col items-center p-3.5 px-2 md:flex-row md:gap-[0.96rem]"
          onSubmit={handleSubmit}
          noValidate>
          <div className="over relative w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(false);
              }}
              placeholder="Enter your email address"
              className={`w-full rounded-md border-2 bg-white px-[0.68rem] py-2.25 transition-colors placeholder:text-base focus:outline-none md:pl-5 md:placeholder:text-[14.5px] ${error ? "border-soft-red pr-10" : "border-white"}`}
              aria-invalid={error}
            />
            {error && (
              <span className="absolute top-6 right-4 -translate-y-1/2">
                <img src={ErrorIcon} />
              </span>
            )}
            {error && (
              <div className="bg-soft-red -mt-[5px] w-full rounded-b-sm px-2 text-left md:absolute md:-bottom-5.5">
                <span className="ml-1 text-[11px] text-white italic">
                  Whoops, make sure it's an email
                </span>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-soft-red border-soft-red hover:text-soft-red mt-4 w-full rounded-md border-2 py-[12.75px] text-sm font-medium text-white transition-colors hover:bg-white md:mt-0 md:basis-[41.5%]">
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

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
    <section className="bg-soft-blue flex flex-col items-center justify-center px-6 pt-16.5 pb-12 text-center">
      <p className="mb-1.5 text-xs tracking-[0.4em] text-white uppercase">35,000+ Already Joined</p>
      <h2 className="mb-4 text-2xl leading-7.5 font-medium text-white">
        Stay up-to-date with what we're doing
      </h2>
      <form
        className="flex w-full flex-col items-center px-2 py-3.5"
        onSubmit={handleSubmit}
        noValidate>
        <div className="relative w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(false);
            }}
            placeholder="Enter your email address"
            className={`w-full rounded-sm bg-white p-[0.65rem] placeholder:text-base focus:outline-none ${error ? "border-soft-red border-2 pr-10" : ""}`}
            aria-invalid={error}
          />
          {error && (
            <span className="absolute top-6 right-4 -translate-y-1/2">
              <img src={ErrorIcon} />
            </span>
          )}
        </div>
        {error && (
          <div className="bg-soft-red -mt-[5px] w-full rounded-b-sm px-2 text-left">
            <span className="ml-1 text-[11px] text-white italic">
              Whoops, make sure it's an email
            </span>
          </div>
        )}
        <button
          type="submit"
          className="bg-soft-red mt-4 w-full rounded-sm py-3.5 text-sm font-medium text-white transition-colors hover:bg-red-500">
          Contact Us
        </button>
      </form>
    </section>
  );
};

export default ContactUs;

import React, { useEffect } from "react";
import { assets, cities } from "../assets/assets";
import heroImage from "../assets/heroImage.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // for animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top 90%",
      },
    });
    tl.fromTo(
      ".line",
      { y: "100%" },
      {
        y: "0%",
        duration: 0.8,
        stagger: 0.25,
        ease: "power4.out",
      }
    );
    tl.fromTo(
      ".booking-form",
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.3" 
    );
    tl.fromTo(
      ".booking-form input, .booking-form button",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.2"
    );
  }, []);

  return (
    <>
      <div className="bg-[var(--white-one)] h-screen flex flex-col items-center relative">
        <div className="h-[75%] w-[80%] mt-[100px] rounded-[40px] relative shadow-2xl overflow-hidden">
          <img
            src={heroImage}
            className="w-full h-full object-cover rounded-[40px] "
          />
          {/* for shading effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
          <div className="absolute top-20 left-2 p-6 text-white max-w-xl">
            <p
              className=" text-xs md:text-sm text-[var(--white-one)] bg-[var(--black-one)] px-3 py-1 rounded-full mb-2 w-fit "
              style={{ opacity: 0.7 }}
            >
              <span className="line inline-block">
                The Ultimate Hotel Experience
              </span>
            </p>
            <h2 className="text-2xl md:text-5xl font-bold md:leading-[60px]">
              <span className="line-wrapper overflow-hidden block">
                <span className="line inline-block">Discover Your</span>
              </span>
              <span className="line-wrapper overflow-hidden block">
                <span className="line inline-block">Perfect Gateway</span>
              </span>
              <span className="line-wrapper overflow-hidden block">
                <span className="line inline-block">Destination.</span>
              </span>
            </h2>
            <p className="mt-2 text-xs md:text-sm text-gray-200">
              Unparalleled luxury and comfort await at the world's most
              exclusive <br /> hotels and resorts. Start your journey today.
            </p>
          </div>
        </div>

        <div className="booking-form absolute z-10 bottom-14">
          <form className="bg-[var(--glass-one)] backdrop-blur-md rounded-xl border border-white/10 shadow-lg text-[var(--black-one)] px-6 py-4 grid grid-cols-1 md:grid-cols-2 lg:flex gap-4 max-md:mx-auto">
            <div>
              <div className="flex items-center gap-2">
                <img src={assets.calenderIcon} alt="" className="h-4" />
                <label htmlFor="destinationInput">Destination</label>
              </div>
              <input
                list="destinations"
                id="destinationInput"
                type="text"
                className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none bg-[var(--white-one)]"
                placeholder="Type here"
                required
              />
              <datalist id="destinations">
                {cities.map((city, index) => (
                  <option value={city} key={index} />
                ))}
              </datalist>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <img src={assets.calenderIcon} alt="" className="h-4" />
                <label htmlFor="checkIn">Check in</label>
              </div>
              <input
                id="checkIn"
                type="date"
                className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none bg-[var(--white-one)] text-gray-400"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <img src={assets.calenderIcon} alt="" className="h-4" />
                <label htmlFor="checkOut">Check out</label>
              </div>
              <input
                id="checkOut"
                type="date"
                className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none bg-[var(--white-one)] text-gray-400"
              />
            </div>

            <div className="flex gap-3 justify-center items-center">
              <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
                <label htmlFor="guests">Guests</label>
                <input
                  min={1}
                  max={4}
                  id="guests"
                  type="number"
                  className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16 bg-[var(--white-one)]"
                  placeholder="0"
                />
              </div>
              <button className="flex items-center justify-center gap-1 rounded-xl bg-[var(--black-one)] py-3 px-4 text-[var(--white-one)] my-auto cursor-pointer max-md:w-full max-md:py-1">
                <img
                  src={assets.searchIcon}
                  alt="search"
                  className="h-7 search-image"
                />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;

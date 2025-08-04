import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = ({ theme }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative bg-[var(--white-one)] bg-[url('/src/assets/map.png')] bg-no-repeat bg-center bg-cover flex flex-col items-center px-6 md:px-16 lg:px-24 py-20">
        {/* for shading */}
        <div
          className={`absolute inset-0 ${
            theme === "dark" ? "block" : "hidden"
          } bg-black/80`}
        ></div>
        <div className="absolute top-0 left-0 w-full h-[550px] bg-gradient-to-b from-[var(--white-one)] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[550px] bg-gradient-to-t from-[var(--white-one)] to-transparent"></div>

        <Title
          title="Featured Destinations"
          subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxry and unforgettable experiences."
        />

        <div className="flex flex-wrap items-center justify-center gap-7 mt-20">
          {roomsDummyData.slice(0, 4).map((room, index) => (
            <HotelCard key={room._id} room={room} index={index} />
          ))}
        </div>
        
        <button
          onClick={() => {
            navigate("/rooms");
            scrollTo(0, 0);
          }}
          className="relative text-[var(--black-one)] z-10 my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded-3xl bg-[var(--white-one)] hover:bg-[var(--black-one)] hover:text-[var(--white-one)] transition-all cursor-pointer flex items-center overflow-hidden group"
        >
          View All Destinations
          <span className="inline-block w-0 overflow-hidden group-hover:w-5 ml-0 group-hover:ml-2 transition-all duration-300">
            →
          </span>
        </button>
      </div>
    </>
  );
};

export default FeaturedDestination;

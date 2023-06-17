import React from "react";
import { SlCalender } from "react-icons/sl";
import { BiMessageError } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import {RxDoubleArrowLeft} from "react-icons/rx";
import pic from "../assets/image 1.png";

const Navbar = () => {
  return (
    <div className="w-full z-10 flex flex-row items-center rounded-2xl justify-between">
      <div className="w-[17.49%] flex flex-row items-center justify-between p-4 h-20 border-b-2 border-r-2 border-gray-300">
        <div>
          <div className="w-[10px] h-[10px] rounded full bg-purple-700"></div>
          <div className="flex flex-row -translate-x-1 -translate-y-0.5">
            <div className="w-[10px] h-[10px] rounded full bg-purple-400"></div>
            <div className="w-[10px] h-[10px] rounded full bg-purple-200"></div>
          </div>
        </div>
        <h1 className="font-Inter text-2xl cursor-pointer mr-16 font-bold">Project M.</h1>
        <div className="opacity-80 mr-4">{<RxDoubleArrowLeft size={25} />}</div>
      </div>
      <div className="w-full flex items-center justify-center border-b-2 border-gray-300  h-20">
        <div className="w-11/12 flex items-center justify-between">
          <form className="w-[51%] ">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-3 pl-10 
                text-sm text-gray-900 border focus:outline-none border-gray-300 rounded-lg bg-gray-50
                focus:ring-blue-500 focus:border-blue-500 font-Inter "
                placeholder="Search for anything..."
              />
            </div>
          </form>

          <div className=" gap-6 flex flex-row items-center justify-center">
            <div className="flex opacity-50 flex-row gap-6">
              <div>
                <SlCalender size={25} />
              </div>
              <div>
                <BiMessageError size={30} />
              </div>
              <div>
                <IoMdNotificationsOutline size={30} />
              </div>
            </div>

            <div className="flex flex-row gap-6">
              <div className="flex flex-col w-[180px]">
                <p className="text-right font-Inter text-lg">Anima Agarwal</p>
                <p className="text-xs font-Inter text-right">U.P, India</p>
              </div>

              <div className="flex items-center justify-center flex-row">
                <img
                  className="object-cover rounded-full"
                  src={pic}
                  alt="profile-photoo"
                ></img>
                <div>
                  <IoIosArrowDown size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

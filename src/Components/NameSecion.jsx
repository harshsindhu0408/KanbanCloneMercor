import React from "react";
import EditableText from "./EditableText";
import { BiFilterAlt } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { BsPeople } from "react-icons/bs";
import { MdOutlineAdd } from "react-icons/md";
import {TbGridDots} from "react-icons/tb";
import pic1 from "../assets/Ellipse 12.png";
import pic2 from "../assets/Ellipse 13.png";
import pic3 from "../assets/Ellipse 14.png";
import pic4 from "../assets/Ellipse 15.png";

const NameSecion = () => {
  return (
    <div className="w-full flex items-center mt-60 justify-between flex-row">

      <div className="flex flex-col items-center gap-y-10 -translate-x-[140px] justify-center">
        <div className="ml-2"><EditableText /></div>

        <div className="flex flex-row mr-20 items-center opacity-90 justify-center gap-4">
          <div className="w-[122px] h-[40px] gap-3 flex flex-row border rounded-md items-center border-slate-400 justify-center">
            <div>
              <BiFilterAlt />
            </div>
            <p className="font-Inter leading-4 text-[16px]">Filter</p>
            <div>
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>

          <div className="w-[122px] h-[40px] gap-3 flex flex-row border rounded-md items-center border-slate-400 justify-center">
            <div>
              <SlCalender />
            </div>
            <p className="font-Inter leading-4 text-[16px]">Today</p>
            <div>
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center translate-x-[140px] justify-center">
        <div className="flex flex-row gap-4 items-center justify-center">
          <div className="flex flex-row items-center justify-center">
            <div className="w-[18px] h-[18px] gap-x-10 flex items-center justify-center bg-purple-200 rounded-md">
              <div className="cursor-pointer">
                <MdOutlineAdd />
              </div>
            </div>
            <p className="ml-2 cursor-pointer font-Inter text-purple-600 font-bold">
              Invite
            </p>
            <div className="flex w-[158px] translate-x-8 flex-row items-center justify-center">
              <div className="flex cursor-pointer flex-row  items-center justify-center">
                <img src={pic1} alt="profile"></img>
                <img src={pic2} alt="profile" className="-translate-x-2"></img>
                <img className="-translate-x-4" src={pic3} alt="profile"></img>
                <img className="-translate-x-6" src={pic4} alt="profile"></img>
              </div>
              <div className="w-[200px] cursor-pointer h-[40px] rounded-full -translate-x-4 flex items-center justify-center bg-red-100">
                <span className="font-Inter text-red-400 font-bold">+2</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex ml-10 flex-row items-center justify-center mt-10 gap-4">
          <div className="w-[97px] opacity-90 cursor-pointer h-[40px] gap-3 flex flex-row border rounded-md items-center border-slate-400 justify-center">
            <div>
              <BsPeople />
            </div>
            <p className="font-Inter leading-4 text-[16px]">Share</p>
          </div>

          <div className="h-[32px] w-[2px] bg-slate-300"></div>

          <div className="h-[40px] cursor-pointer flex items-center justify-center w-[40px] bg-blue-700 rounded-md">
            <div className="mb-3"><span className="text-white font-extrabold text-[48px] text-center">=</span></div>
          </div>

          <div className="cursor-pointer"><TbGridDots size={30} /></div>
        </div>
      </div>

    </div>
  );
};

export default NameSecion;

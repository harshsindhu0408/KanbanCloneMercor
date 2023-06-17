import React from 'react'
import {LuHome} from "react-icons/lu";
import {RiMessage2Line} from "react-icons/ri";
import {FaTasks} from "react-icons/fa";
import {BsPeople} from "react-icons/bs";
import {AiOutlineSetting} from "react-icons/ai";
import TabStyle from './TabStyle';
import Menustyle from './Menustyle';
import {CgAddR} from "react-icons/cg";
import {AiOutlineBulb} from "react-icons/ai";

const Tabs = () => {

    const tabNames = [
        {
            title: "Home",
            icon: <LuHome />
        },
        {
            title: "Messages",
            icon: <RiMessage2Line />
        },
        {
            title: "Tasks",
            icon: <FaTasks />
        },
        {
            title: "Members",
            icon: <BsPeople />
        },
        {
            title: "Settings",
            icon: <AiOutlineSetting/>
        },
    ]

    const menu = [
        {
            name:"Mobile App",
            color:"bg-green-500"
        },
        {
            name:"Website Redesign",
            color:"bg-orange-500"
        },
        {
            name:"Design System",
            color:"bg-violet-300"
        },
        {
            name:"Wireframes",
            color:"bg-sky-500"
        },
    ]

  return (
    <div className='w-[270px] items-center justify-center flex flex-col'>
        <div className='w-full ml-12 flex flex-col gap-2'>
            {
                tabNames.map((dataa) => {
                    return (
                        <TabStyle names={dataa.title} icons={dataa.icon} />
                    )
                })
            }
        </div>

        <div className='w-[255px] h-0.5 mt-8 ml-4 bg-black opacity-20'></div>

        <div className='flex flex-row mt-8 items-center gap-24'>
            <p className='font-Inter text-sm'>MY PROJECTS</p>
                <div className='opacity-80'><CgAddR size={25} /></div>
        </div>

        <div className='mt-4 ml-6'>
            {
                menu.map((projects) => {
                    return(
                        <Menustyle name={projects.name} color={projects.color}/>
                    )
                })
            }
        </div>

        <div className='flex flex-col items-center justify-center ml-4'>
            <div className='w-[66px] mt-16 h-[60px] z-20 rounded-full bg-gray-100 relative items-center flex justify-center'>
                <div className='w-[33px] ml-4 h-[33px] rounded-full ideaa'></div>
                <div className='-translate-x-6'><AiOutlineBulb /></div> 
            </div>

            <div className='w-[206px] h-[200px] flex flex-col items-center justify-between text-center bg-gray-100 -translate-y-6 rounded-2xl'>
                <p className='mt-6 text-sm font-Inter font-bold'>Thoughts Time</p>
                <p className='font-Inter w-[200px] text-sm'>
                    We don’t have any notice for you, till then you
                    can share your thoughts with your peers.
                </p>
                <div className='bg-white flex items-center justify-center  font-Inter w-[170px] h-[35px] mb-6'>
                    <span className='font-Inter text-sm font-bold'>Write a message</span>
                </div>
            </div>
        </div>

    </div>

  )
}

export default Tabs

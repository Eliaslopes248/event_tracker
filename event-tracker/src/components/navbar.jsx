import { MdOutlineArrowOutward } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";

export function NavBar(){


    return <div className="w-full bg-black p-7 flex justify-between lg:justify-around flex-wrap">
        <p className="text-[18px] xl:text-2xl text-white">
            GatherHub
        </p>

        <div className="lg:flex gap-[60px] text-white hidden text-[13px] xl:text-[16px] ">
            <a href="">HOME</a>
            <a href="">SERVICES</a>
            <a href="">ABOUT</a>
            <a href="">REVIEWS</a>
        </div>

        <div className="lg:flex text-white gap-[10px] hover:text-gray-400 duration-[.2s] ">
            <p className="hidden lg:block text-[13px] xl:text-[16px]">
                REGISTER NOW
            </p>
            <MdOutlineArrowOutward className="  size-5 hidden lg:block"/>
            <IoMenuSharp className="text-white lg:hidden block size-8 ml-auto "/>
        </div>

    </div>

}
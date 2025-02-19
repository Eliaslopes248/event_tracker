
export function Hero(){
    return <div className="size-full gap-7 flex flex-col items-center pt-[50px] md:pt-0 md:justify-center">

        <div className="border-0  justify-center w-[80%] md:flex hidden ">
            <h1 className="flex-wrap text-left md:text-center font-black text-[28px] lg:text-4xl xl:text-5xl"> Never Miss a Campus Event! <br />Stay in the Loop!</h1>
        </div>
        
        <p className="w-[80%] xl:w-[50%] text-gray-400 pl-[0px]  md:text-center text-[14px] lg:text-[18px]">
            Discover, track, and manage campus events effortlessly. Get real-time updates, set reminders, and explore what’s happening around you—all in one place
        </p>

        <div className="flex  flex-wrap gap-3 md:gap-9 border-0 pl-[0px] ">
            <button className="border-[1px] p-3.5 rounded-[5px] w-full md:w-[200px]  bg-black text-white hover:bg-white duration-[.2s] md:text-[15px] text-[13px] hover:text-black">Learn more</button>
            <button className="border-[1px] p-3.5 rounded-[5px] w-full md:w-[200px] hover:bg-black duration-[.2s] text-[13px] md:text-[15px] hover:text-white">Get started</button>
        </div>


    </div>
}
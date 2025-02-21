import { MdOutlineAccountCircle } from "react-icons/md";
import { useLocation } from "react-router-dom"
import { Searchbar } from "../../components/searchfeatures/searchBar";

export function Home(){
    // get user info
    const location = useLocation()
    const user = location.state?.userDoc || {}
    console.log(user)

    const links = [
        'Concerts', 'Sport', 'Art, Theater & Comedy'
    ]

    return (
    
        <>
            <main className="flex flex-col w-[100vw] h-[100vh]">

                <div className="w-full h-[3vh] bg-black"></div>

                <div className="w-full h-[20vh] gap-2  bg-blue-700 items-center flex flex-col">

                    <div className="flex gap-x-14 pl-9 h-[90px]   border-0 w-full">
                        <div className="border-0 md:p-6 flex  items-center">
                            <h1 className="font-black text-3xl text-white">GatherHub</h1>
                        </div>
                        
                        
                           {links.map(link=>{
                            return <h3 className=" h-full text-center p-2.5 text-[20px] items-center hidden lg:flex text-white hover:bg-blue-800 duration-[.2s]">{link}</h3>
                           })}
                        
                        <div className="ml-auto flex gap-3.5 h-full  hover:bg-blue-800 duration-[.2s] p-2.5 items-center mr-[2vw]">
                            <MdOutlineAccountCircle className="text-white size-[35px]"/>
                            <h3 className="text-white text-[20px] hidden md:block">{user.username}</h3>
                        </div>

                        
                    </div>
                    <div className=""><Searchbar/></div>
                </div>

            </main>
        </>
          
        )
}
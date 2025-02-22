import { IoMdClose } from "react-icons/io";
import testImg from '../../assets/nba.png'
import { useState } from "react";

export function Searchbar(){

    const [searched, setSearched] = useState('')

    // handle chamge of search data
    const handleChange = (e)=>{
        let value = e.target.value
        setSearched(prev => value )
        console.log(searched)
    }

    const [focus, setFocus] = useState(false)

    // test result filtering
    let results = [{name:'aba',genre:'Basketball',next:0},{name:'NBA',genre:'Basketball',next:0},{name:'NBA',genre:'Basketball',next:0},{name:'NBA',genre:'Basketball',next:0},{name:'NBA',genre:'Basketball',next:0}]

    return <div className="h-fit flex flex-col w-[90vw] md:w-[50vw] lg:w-[55vw] xl:w-[30vw] gap-[2px] duration-75">

            <input type="text" name="searchBar" id="" 
            onChange={handleChange}
            className=" placeholder-gray-800 p-3 outline-0 rounded-[3px] tracking-[1px] bg-white w-full" 
            placeholder="Search by Artist, Event or Venue"
            onFocus={() => setFocus(true)}
            onBlur={()=> setFocus(false)}
            />

            <div className={` ${!focus ? 'hidden' : ''} w-full rounded-b-[3px] max-h-[280px] min-h-[150px] duration-75 shadow-2xl overflow-scroll`}>
                {results.filter(result => result.name.toLowerCase().startsWith(searched.toLowerCase())).length === 0 && (
                <div className="w-full p-5 border-b-[.5px] border-gray-200 bg-white hover:bg-gray-200 duration-[.2s]">
                    No results
                </div>
                )}

                {results.map(result =>{
                    if(result.name.toLowerCase().startsWith(searched.toLowerCase())){
                    return <div className="w-full p-5 gap-2.5 flex border-b-[.5px] border-gray-200 bg-white hover:bg-gray-200 duration-[.2s]">
                        <img src={testImg} alt="" className="object-contain size-[70px]" />
                        <div className="flex flex-col">
                            <p className="font-bold">{result.name}</p>
                            <p className="text-gray-700">{result.genre}   &bull; {result.next} Upcoming Events</p>
                        </div>
                        <IoMdClose className="size-[30px] ml-auto mr-[0px]"/>
                    </div>
                    }})}

            </div>

    </div>

    
}
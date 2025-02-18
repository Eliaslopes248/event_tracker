import { Footer } from "../../components/footer"
import { NavBar } from "../../components/navbar"


export function LandingPage(){
    return( 
        
        <> 
            <NavBar/>
            <div className="border-0 border-black flex flex-col w-full justify-start xl:w-[70vw] xl:translate-x-[15vw] h-fit">
                <div className="border-2 border-black w-full h-[45vh]">hero</div>
                <div className="border-2 border-black w-full h-[45vh]">services</div>
                <div className="border-2 border-black w-full h-[45vh]">about</div>
                <div className="border-2 border-black w-full h-[45vh]">reviews</div>
            </div>
            <Footer/>
        </>
    )
}
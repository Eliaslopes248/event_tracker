import { Footer } from "../../components/footer"
import { NavBar } from "../../components/navbar"
import { Hero } from "../../components/hero"
import { Services } from "../../components/services"


export function LandingPage(){
    return( 
        
        <> 
            <NavBar/>


            
                <div className="border-2 border-black w-full h-[70vh]  ">
                    <Hero/>
            
                </div>

                <div className="border-0 bottom-0 border-black flex flex-col w-full justify-start xl:w-[70vw] xl:translate-x-[15vw] h-fit">
                

                    <div className="border-0 border-black w-full h-fit"><Services/></div>


                    <div className="border-2 border-black w-full h-[45vh]">about</div>


                    <div className="border-2 border-black w-full h-[45vh]">reviews</div>
                </div>
                <Footer/>
           
        </>
    )
}
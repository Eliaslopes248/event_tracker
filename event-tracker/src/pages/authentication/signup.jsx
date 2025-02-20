import db from '../../db'
import { getDocs, collection, addDoc } from 'firebase/firestore'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/concert3.jpg'

export function Signup(){
    let navigate = useNavigate()
    // get users from firebase
    async function getUsers() {
        try {
            const getSnap = await getDocs(collection(db, "users"));
            return getSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error("Error fetching users:", error);
            return []; // Ensure it returns an empty array on failure
        }
    }
    async function addUser(user){

        let userDoc = {
            ...user,
            phone:'123-456-7890',
            ticketsPurchasedCount:0,
            ticketsPurchased:[],
        }

        try{

            await addDoc(collection(db,'users'),userDoc)
            console.log('user added')

        }catch(error){
            console.error(error)
        }


    }
    
    // Validate login using an async function
    async function validateLogin(user) {
    

        console.log("user entered:", user)
        const userArray = await getUsers(); // Wait for the Promise to resolve
    
        const foundUser = userArray.find(element => 
            element.username === user.username && element.password === user.password
        );

    
        if (foundUser) {
            console.log('User found has account with these credentials');
            // send error message here

            return false;
        } else {
            addUser(user)
            navigate('/home',{state:{user}})
            return true;
        }
        
    }


    
    const [userEntered, setUserEntered] = useState({username:"none" ,password:"none",confirm:'none'})
    const handleSubmit = (e)=>{
        e.preventDefault()
        validateLogin(userEntered)
    }

    const handleChange = (e)=>{
        const {name,value} = e.target
        setUserEntered((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    


    return <>

            <div className=" border-2 border-gray-600 h-[100vh] w-[100vw] flex overflow-hidden ">

                <div className="w-full h-full lg:w-[60%] items-center justify-center flex">
                    
                    <form onSubmit={handleSubmit} action="" className="size-full lg:size-[60%] xl:size-[50%] flex flex-col gap-4 border-2 border-black items-center justify-center lg:rounded-2xl ">
                        <h3 className="font-black text-5xl">
                            Sign up
                        </h3>
                        <p className="text-gray-500 p-3 text-center">
                            Welcome to GatherHub, enjoy the perks of being a member.
                        </p>
                        <input onChange={handleChange} name='username' type="text" placeholder="Username" className="border-2 w-[85%] p-[10px] rounded-[8px] md:w-[50%] lg:w-[80%]" />
                        <input type="password" onChange={handleChange} name='password' placeholder="Password" className="border-2 w-[85%] p-[10px] rounded-[8px] md:w-[50%] lg:w-[80%]"/>
                        <input type="password" onChange={handleChange} name='password' placeholder="Confirm Password" className="border-2 w-[85%] p-[10px] rounded-[8px] md:w-[50%] lg:w-[80%]"/>
                        <p className='text-gray-400'>Already have an account? <a className='text-black hover:underline' href="/login">Login here</a></p>
                        <button type='submit' className="p-3 w-[85%] bg-black text-white rounded-[8px] md:w-[50%] lg:w-[80%]">Sign up</button>
                    </form>
                </div>
                <div className=" hidden lg:block w-full h-full bg-black lg:w-[40%]">
                    <img src={img1} alt="" className='size-full object-cover' />
                </div>
                        


            </div>
    </>
    
    

}
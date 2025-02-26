import db from '../../db'
import { getDocs, collection } from 'firebase/firestore'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/concert2.jpg'

export function Login(){
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
    
    // Validate login using an async function
    async function validateLogin(user) {
        console.log("User entered:", user);
    
        try {
          const userArray = await getUsers(); // Fetch user data
          console.log("User list:", userArray);
    
          // Find the user
          const userDoc = userArray.find(
            (element) => element.username === user.username && element.password === user.password
          );
    
          if (userDoc) {
            console.log("User found :)", userDoc);
    
            // Navigate and send the full user object
            navigate("/home", { state: {userDoc}  });
            return true;
          } else {
            console.log("User not found :(");
            return false;
          }
        } catch (error) {
          console.error("Error fetching users:", error);
          return false;
        }
      }
    
    const [userEntered, setUserEntered] = useState({username:"none" ,password:"none"})
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
                            Login
                        </h3>
                        <p className="text-gray-500 p-3 text-center">
                            Welcome Back, enjoy the perks of being a member.
                        </p>
                        <input onChange={handleChange} name='username' type="text" placeholder="Username" className="border-2 w-[85%] p-[10px] rounded-[8px] md:w-[50%] lg:w-[80%]" />
                        <input type="password" onChange={handleChange} name='password' placeholder="Password" className="border-2 w-[85%] p-[10px] rounded-[8px] md:w-[50%] lg:w-[80%]"/>
                        <p className='text-gray-400'>Dont have an account? <a className='text-black hover:underline' href="/signup">Sign up here</a></p>
                        <button type='submit' className="p-3 w-[85%] bg-black text-white rounded-[8px] md:w-[50%] lg:w-[80%]">Login</button>
                    </form>
                </div>
                <div className=" hidden lg:block w-full h-full bg-black lg:w-[40%]">
                    <img src={img1} alt="" className='size-full object-cover' />
                </div>
                        


            </div>
    </>
    
    

}
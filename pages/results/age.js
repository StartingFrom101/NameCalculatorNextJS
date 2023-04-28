import { useStateContext } from "@/context/StateContext";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect } from "react";


export default function Age() {
    let {name, age, setAge, loading, setLoading} = useStateContext();
    
    useEffect(() => {
        setLoading(true)
        async function calcAge() {
                const res = await axios.get(`https://api.agify.io/?name=${name}`);
                setAge(res.data.age ? res.data.age : "Unknown");

                // console.log(res.data)
                setLoading(false)
                // console.log(age);
            }
        
        calcAge();
    }, [name, age, setAge, setLoading]);
    
    console.log();
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-blue-300">
            {loading ? ("loading...") : (
            <>
                <div className="text-2xl">Your name is {name}</div>
                <div className="text-xl">Your age is <div className="animate-bounce text-center my-6 text-8xl">{age}</div></div>
            </>
            ) }
        <Link href={"/navigation"}><button className="rounded-full bg-blue-950 p-3">Go back?</button></Link>
        </div>
    );
}


import { useStateContext } from "@/context/StateContext";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect } from "react";


export default function Gender() {
    let {name, gender, setGender, probability, setProbability, loading, setLoading} = useStateContext();
    
    useEffect(() => {
        setLoading(true)
        async function calcGen() {
                
                const res = await axios.get(`https://api.genderize.io?name=${name}`);
                setGender(res.data.gender ? res.data.gender : "Unknown");
                setProbability(res.data.probability ? res.data.probability : "0")
                // console.log(res.data)
                setLoading(false)
                // console.log(age);
            }
        
        calcGen();
    }, [name, setLoading, gender, setGender, probability, setProbability]);
    
    console.log();
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-blue-300">
            {loading ? ("loading...") : (
            <>
                <div className="text-2xl">Your name is {name}</div>
                <div className="text-xl">Your gender is <div className="animate-bounce text-center my-6 text-8xl">{gender}</div></div>
                <div>With a confidence of {probability * 100}%</div>
            </>
            ) }
        <Link href={"/navigation"}><button className="rounded-full bg-blue-950 p-3">Go back?</button></Link>
        </div>
    );
}


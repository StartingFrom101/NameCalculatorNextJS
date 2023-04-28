import { useStateContext } from "@/context/StateContext";
import axios from "axios";
import { getName } from "country-list";
import Link from "next/link";
import { useContext, useEffect } from "react";


export default function Nationality() {
    let {name, nationality, setNationality, loading, setLoading, probability, setProbability} = useStateContext();
    
    useEffect(() => {
        setLoading(true)
        async function calcNationality() {
                
                const res = await axios.get(`https://api.nationalize.io?name=${name}`);
                console.log(res)
                setNationality(res.data.country[0] ? getName(res.data.country[0].country_id) : "Unknown");
                setProbability(res.data.country[0] ? res.data.country[0].probability : "0");
                // console.log(res.data)    
                setLoading(false)
                // console.log(nationality);
            }
        
        calcNationality();
    }, [name, nationality, setNationality, setLoading, probability, setProbability]);
    
    console.log();
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-blue-300">
            {loading ? ("loading...") : (
            <>
                <div className="text-2xl">Your name is {name}</div>
                <div className="text-xl">Your nationality is <div className="animate-bounce text-center my-6 text-8xl">
                    {nationality}
                    </div></div>
                <div>With a confidence of {probability * 100}%</div>
            </>
            ) }
        <Link href={"/navigation"}><button className="rounded-full bg-blue-950 p-3">Go back?</button></Link>
        </div>
    );
}


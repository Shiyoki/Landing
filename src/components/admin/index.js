import axios from "axios";
import { useEffect, useState } from "react";

export default function Adm(){
    const url = "http://localhost:5000/ipadress"

    const[ip,setIp] = useState('');
    const[city,setCity] = useState('');
    const[country,setCountry] =useState('');


    useEffect( () => {
        getData()
      }, [])

    const getData = async () => {
        await axios.get(url)
        .then(response=>{
            console.log(response.data)
        })
    }

    console.log(ip)
    console.log(city)
    console.log(country)

    return(
        <div className="flex justify-center mt-14">
            <table className="table w-2/3 table-compact text-white" data-theme="dark">
                <caption className="mb-8 text-black font-black text-4xl">Lista de direcciones IP</caption>
                <thead className="">
                    <tr>
                        <th>N#</th>
                        <th>Direccion IPv4</th>
                        <th>Pais</th>
                        <th>Provincia</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}
import Form from "../../components/Form";
import Information from "../../components/Info";
import Texto from "../../components/Texto";
import Footer from "../../components/Footer";
import axios from 'axios'
import {useState,useEffect} from 'react'


export default function Home(){

    const urlp = "http://localhost:5000/ipadress"
    const url = "https://geolocation-db.com/json/"
    //Estado del IP
    const[ip,setIp] = useState('');
    const[city,setCity] = useState('');
    const[country,setCountry] =useState('');

    const info = {
        ip: ip,
        provincia: city,
        pais: country
    }

    useEffect( () => {
        getData()
        PostData()
      }, [])

    //funcion para obtener ip
    const getData = async () => {
        await axios.get(url)
        .then(response=>{
            setIp(response.data.IPv4)
            setCity(response.data.city)
            setCountry(response.data.country_name)
        })
    }
    //post a base de datos
    const PostData = async () => {
        await axios.post(urlp, info)
        .then(response =>{
            
        })
    }

    return(
        <>  
        <div className="background-container">
            <Form />
            <Information />
        </div>
        <Texto />
        <Footer />
        </>
    );
}
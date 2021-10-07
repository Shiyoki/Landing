import Euroautos from '../../images/euroautos.png';
import emailjs from 'emailjs-com';
import swal from "sweetalert"
import React, { useRef, useState } from 'react';
import { Redirect, useHistory } from "react-router";

export default function Form(){

    const history = useHistory();

    const alertError =()=>{
        swal({
            title: "Error",
            text: "Datos introducidos incorrectamente",
            icon: "error",
            button: "Aceptar",
            timer: "5000"
        })
    }
    const numberError =()=>{
        swal({
            title: "Error",
            text: "Introducir numeros en el campo de teléfono",
            icon: "error",
            button: "Aceptar",
            timer: "5000"
        })
    }

    const emptyError =()=>{
        swal({
            title: "Error",
            text: "Rellenar datos",
            icon: "error",
            button: "Aceptar",
            timer: "5000"
        })
    }

    const form = useRef();
    const [result, showResult] = useState(false)

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [brand, setBrand] = useState("")
    const [yr, setYr] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")

    const handleNameChange = ({ target: {value} }) => setName(value) ;
    const handlePhoneChange = ({ target: {value} }) => setPhone(value) ;
    const handleBrandChange = ({ target: {value} }) => setBrand(value) ;
    const handleYrChange = ({ target: {value} }) => setYr(value) ;
    const handleStateChange = ({ target: {value} }) => setState(value) ;
    const handleCityChange = ({ target: {value} }) => setCity(value) ;


    const sendEmail = (e) => {

        if(/([0-9])/.test(name)){
           alertError();
        }
        else if( !(/([0-9])/.test(phone))) {
            alertError()
        }
        else if( (name === "") || (brand === "") || (phone === "") || (yr === "") || (city === "") ){
           emptyError()
        } 
        else if ( state === 0 ){
            alertError()
        }
        else{
            emailjs.sendForm('service_xm3t34j', 'template_ye478as', form.current, 'user_xyjmGQwBffOdGd4mFshoM')
            .then((result) => {
                console.log(result.text);
                swal({
                  title: "Enviado",
                  text: "Mensaje enviado con exito",
                  icon: "success",
                  button: "Aceptar",
                  timer: "5000"
              })
            }, (error) => {
                console.log(error.text);
            });
            
            showResult(true);
            history.push("/thanks")
        };
        }
        
    return(
        <>
        <div className="sm:px-5 xl:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3">
                <div className="p-10">
                    <div className="ml-5">
                        <img src={Euroautos} className="w-96"></img>
                    </div>
                     <div>
                         <h1 className="text-white font-semibold p-4 text-3xl">COMPRAMOS TU COCHE CON CARGAS</h1>
                     </div>
                     <div className="bg-indigo-100 opacity-80">
                         <h1 className="color text-center font-semibold p-4 text-4xl">IMPAGOS DE RESERVA DE DOMINIO, EMBARGO, PRECINTO, LEASING, FINANCIADO</h1>
                     </div>
                     <div className="bg-white mt-8 p-2 inline-block">
                        <a className="color font-semibold text-center p-3 text-3xl">607362316</a>
                     </div>
                </div>
                <div>
                <div className="flex flex-col justify-center">
                <div className=" w-full mx-auto md:mt-4 xl:mt-4 lg:mt-4 p-6 border-gray-300 ">
                 <form className="space-y-2" ref={form} >
                    <div >   
                    <input placeholder="Nombre" className="w-full p-4 border border-gray-300 rounded mt-1 placeholder-black font-bold lg:text-xl xl:text-xl" type="text" name="user_name" value={name} onChange={handleNameChange} />    
                    </div>         
                    <div>
                    <input placeholder="Teléfono" className="w-full p-4 border border-gray-300 rounded mt-1 placeholder-black font-bold lg:text-xl xl:text-xl" type="text" name="telfono" value={phone} onChange={handlePhoneChange} />
                    </div>    
                    <div>
                    <input placeholder="Marca y modelo" className="w-full p-4 border border-gray-300 rounded mt-1 placeholder-black font-bold lg:text-xl xl:text-xl" type="text" name="marca" value={brand} onChange={handleBrandChange} />
                    </div>
                    <div>
                    <input placeholder="Año" className="w-full p-4 border border-gray-300 rounded mt-1 placeholder-black font-bold lg:text-xl xl:text-xl" type="text" name="year" value={yr} onChange={handleYrChange} />
                    </div>
                    <div>
                    </div>
                    <input placeholder="Ciudad" className="w-full p-4 border border-gray-300 rounded mt-1 placeholder-black font-bold lg:text-xl xl:text-xl" type="text" name="city" value={city} onChange={handleCityChange}/>
                    <div>
                    <select className="mb-4 w-full p-4 border border-gray-300 rounded mt-1 placeholder-black font-bold lg:text-xl xl:text-xl" name="state" onChange={handleStateChange} value={state} onChange={(e) =>{
                                        const selected = e.target.value;
                                        setState(selected);
                                    }}>
                        <option value="0">Estado</option>
                        <option value="embargado">Embargado</option>
                        <option value="reserva">Reserva de dominio</option>
                        <option value="multas">Multas de tráfico</option>
                        <option value="precintado">Precintado</option>
                        <option value="financiado">Financiado</option>
                        <option value="otros">Otros</option>
                        </select>
                    </div>
                    <div>
                        <a className="py-2 px-4 bg-white hover:bg-gray-200 rounded-md text-blue-900 text-sm cursor-pointer font-bold lg:text-xl xl:text-xl" onClick={sendEmail} > Enviar </a>
                    </div>         
                 </form>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}
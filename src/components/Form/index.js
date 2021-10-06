import Euroautos from '../../images/euroautos.png';
import emailjs from 'emailjs-com';
import swal from "sweetalert"
import React, { useRef, useState } from 'react';

export default function Form(){
    const form = useRef();
    const [result, showResult] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xm3t34j', 'template_22zi2ll', form.current, 'user_xyjmGQwBffOdGd4mFshoM')
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
        e.target.reset()
        showResult(true);
    };
    return(
        <>
        <div className="background-container ">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3">
                <div className="p-10 ">
                    <div className="ml-5">
                        <img src={Euroautos} className="w-80"></img>
                    </div>
                     <div>
                         <h1 className="text-white font-bold p-4 text-base lg:text-4xl">COMPRAMOS TU COCHE CON CARGAS</h1>
                     </div>
                     <div className="bg-indigo-100">
                         <h1 className="text-blue-900 text-center font-bold p-4 text-base lg:text-4xl">IMPAGOS DE RESERVA DE DOMINIO, EMBARGO, PRECINTO, LEASING, FINANCIADO</h1>
                     </div>
                     <div className="bg-white mt-4 p-2 w-36">
                        <a className="text-blue-900 font-bold text-center p-3">607362316</a>
                     </div>
                </div>
                <div>
                <div className="flex flex-col justify-center">
                <div className="max-w-md w-full mx-auto md:mt-4 xl:mt-4 lg:mt-4 p-6 border-gray-300 ">
                 <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                     <div className="flex gap-2 space-x-2">
                        <div>
                            <input placeholder="Nombre" className="mr-2 w-full p-2 border border-gray-300 rounded mt-1 placeholder-black font-bold lg:text-xl xl:text-xl" type="text" name="user_name" />
                        </div>
                        <div>
                            <input placeholder="Teléfono" className="w-full p-2 border border-gray-300 rounded mt-1 placeholder-black font-bold lg:text-xl xl:text-xl" type="number" name="telfono" />
                        </div>
                     </div>     
                    <div>
                    <input placeholder="Marca y modelo" className="w-full p-2 border border-gray-300 rounded mt-1 placeholder-black font-bold lg:text-xl xl:text-xl" type="text" name="marca" />
                    </div>
                    <div>
                    <input placeholder="Año" className="w-full p-2 border border-gray-300 rounded mt-1 placeholder-black font-bold lg:text-xl xl:text-xl" type="text" name="year" />
                    </div>
                    <div>
                    <input placeholder="Ciudad" className="w-full p-2 border border-gray-300 rounded mt-1 placeholder-black font-bold lg:text-xl xl:text-xl" type="text" name="city" />
                    </div>
                    <div>
                    <select className="w-full p-2 border border-gray-300 rounded mt-1 placeholder-black font-bold lg:text-xl xl:text-xl" >
                        <option value="estado">Estado</option>
                        <option value="embargado">Embargado</option>
                        <option value="reserva">Reserva de dominio</option>
                        <option value="multas">Multas de tráfico</option>
                        <option value="precintado">Precintado</option>
                        <option value="financiado">Financiado</option>
                        <option value="otros">Otros</option>
                        </select>
                    </div>
                    <div>
                        <input className="w-full py-2 px-4 bg-white hover:bg-gray-200 rounded-md text-blue-900 text-sm cursor-pointer font-bold lg:text-xl xl:text-xl" type="submit" value="Enviar" />
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
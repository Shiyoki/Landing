import Descarga from '../../images/descarga.jpg'
import styles from '../Texto/index.css'

export default function Texto(){
    return(
        <div className="px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-4 gap-3">
                <div className="">
                    <h1 className="color font-bold text-2xl md:text-5xl lg:text-5xl xl:text-5xl text-center">Vende tu coche con cargas</h1>
                    <br />
                    <div className="p-5">
                        <p className="text-2xl text-left">Nos encargamos de todo el proceso para comprar tu coche intransferible, embargado, leasing, reserva de dominio, con multas o con deudas.</p>
                        <p className="text-2xl text-left">Somos quien es estan atentos a ayudarte con un servicio 100% personalizado.</p>
                        <p className="text-2xl text-left">Mandanos un correo o contáctanos por algún método y con gusto te daremos una oferta por tu coche.</p>
                        <p className="text-2xl text-left">Contáctanos hoy mismo.</p>

                    </div>
                    
                </div>
                <div className="p-5">
                    <img className="w-full md:h-96 lg:h-96 xl:h-96" src={Descarga}></img>
                </div>
            </div>
        </div>
    );
}
import nf from '../../images/notfound.jpg'

export default function Notfound(){
    return(
        <div className="error-container w-full bg-white">
            <div className="404 flex justify-center">
                <img src={nf}></img>
            </div>
            <h1 className="text-center font-bold text-3xl">Parece que el sitio al que intentas acceder no esta disponible.</h1>
        </div>
       
    );
}
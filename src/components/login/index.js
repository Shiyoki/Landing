import axios from "axios";
import { useState } from "react";
import { Redirect, useHistory } from "react-router";
import Admin from "../../views/Admin";

export default function Login(){

    const history = useHistory();

    const url = "http://localhost:5000/admin/log-in"
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const info ={
        username: username,
        password: password
    }

    const handleUsernameChange = ({ target: {value} }) => setUsername(value);
    const handlePasswordChange = ({ target: {value} }) => setPassword(value);

    const singin = async() =>{
        await axios.post(url, info)
        .then(Response =>{
            if(Response.status === 201){
                history.push("/info")
            }else{
                console.log('nope')
            }
        })
    }   
    return(
        <>
            <div className="min-h-screen bg-gray-500 flex flex-col justify-center">
                <div className="max-w-md w-full mx-auto">
                    <div className="text-6xl font-bold text-gray-100 mt-2 text-center">Administrador</div>
                </div>
                <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border-gray-300 shadow-xl">
                 <form className="space-y-6">
                     <div>
                        <label className="text-sm font-bold text-gray-600 block">Usuario</label>
                        <input className="w-full p-2 border border-gray-300 rounded mt-1" type="text" value={username} onChange={handleUsernameChange} />
                     </div>
                    <div>
                        <label className="text-sm font-bold text-gray-600 block">Contraseña</label>
                        <input className="w-full p-2 border border-gray-300 rounded mt-1" value={password} onChange={handlePasswordChange} />
                    </div>
                     <div>
                        <a className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-400 rounded-md text-white font-bold text-center text-md cursor-pointer" type="submit" value="Entrar" onClick={singin}> Entrar </a>
                    </div>         
                 </form>
                </div>
            </div>
        </>
    );
}
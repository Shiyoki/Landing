import Adm from "../../components/admin";
import { Redirect } from "react-router";

export default function Admin( { authorized } ){
    if( !authorized ){
        return <Redirect to="/admin" />
    }
    return(
        <>
        <Adm />
        </>
    );
}
/* eslint-disable react/prop-types */
import classes from "./Mode.module.css"
import { useNavigate } from "react-router-dom";

function Mode({children}) {
    const navigate = useNavigate();
    function HideModel() {
        navigate('/');
    }
    return (
    <>
    <div className={classes.backrop} onClick={HideModel}/>
    <dialog open className={classes.model}>
        {children}
    </dialog>
    </>
    );
}
export default Mode;
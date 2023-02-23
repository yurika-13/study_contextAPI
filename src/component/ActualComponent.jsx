/*I need to create SECOND! */

/*1) import "useContext" to use "LanguageContext"(createContext)*/
import {useContext} from "react";
import {LanguageContext} from "./LanguageContext";

function ActualComponent(){
    let context = useContext(LanguageContext);
    /*context
      lang:"en-US"*/

    return(
        <>
        My language is {context.aaa /* select variable*/}</>
        /* {context.lang} = "en-US"*/
    )
}

export default ActualComponent;
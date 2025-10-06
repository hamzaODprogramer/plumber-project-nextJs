import { JSX } from "react";



declare global{
    interface service_cardPros {
        icon : JSX.Element
    }  
    
    interface footerProps {
        className? : string
    }

    type InputProps =  {
        placeholder? : string,
        icon? : React.ReactNode,
        className? : string,
        classNameContainer? : string,
        type : "text" | "password" | "number" | "email"
    }

    type AdminPageProps = {
        children : Readonly<React.ReactNode>,
        addButton? : boolean,
        title : string,
        titleTable? : string,
        table : boolean,
        open? : boolean,
        setOpen? : React.Dispatch<React.SetStateAction<boolean>>
    }
}
import { JSX, MouseEventHandler, ReactNode } from "react";

interface buttonProps {
    text? : string,
    className? : string,
    icon? : ReactNode,
    onClick? : MouseEventHandler<HTMLButtonElement>
}

export default function Button({text,icon,className,onClick}:buttonProps) : JSX.Element{
    return <>
        <button onClick={onClick} className={`w-fit h-fit flex items-center ${className}`}>
            {icon}
            {text}
        </button>
    </>
}
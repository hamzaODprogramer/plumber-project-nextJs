import { JSX, ReactNode } from "react";

interface buttonProps {
    text? : string,
    className? : string,
    icon? : ReactNode,
}

export default function Button({text,icon,className}:buttonProps) : JSX.Element{
    return <>
        <button className={`w-fit h-fit  flex items-center gap-3 ${className}`}>
            {icon}
            {text}
        </button>
    </>
}
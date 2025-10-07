import React from "react";

export default function AdminInput({type,placeholder,text,className}:{type:string,placeholder:string,text:string,className?:string}) : React.ReactNode {
    return <div className={`flex flex-col w-full  dark:bg-white/5 justify-start pt-0 pb-2 gap-1 ${className}`}>
      <label 
        className="text-black/95 font-medium "

      >
        {text}
      </label>
      <input 
        type={type}
        placeholder={placeholder}
        className="flex-1 focus:ring-3 border-1 border-black/20 transition-all duration-500 focus:ring-blue-300 bg-black/5 dark:text-white p-2 font-normal outline-none w-full"
      />            
    </div>
}
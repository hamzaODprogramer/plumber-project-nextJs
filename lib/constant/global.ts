import React from "react";
import { Contact, Home, Images, Info, Menu, ShowerHead } from "lucide-react";

export const links : Array<{route:string,name:string,icon?: any}> = [
    { route : '/' , name : 'acceuil' , icon:  Home  },
    { route : '/about' , name : 'À propos' , icon:  Info  },
    { route : '/services' , name : 'nos services', icon:  ShowerHead  },
    { route : '/contact' , name : 'contact' , icon:  Contact  },
    { route : '/gallery' , name : 'Galerie' , icon:  Images  },
]
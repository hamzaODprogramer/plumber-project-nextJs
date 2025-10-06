import React from "react";
import { Contact, Home, Images, Info, Menu, ShowerHead, GalleryThumbnails, LogOut, MessageCircle, User } from "lucide-react";
import { 
  Droplets, 
  Waves,
  Pipette,
  Bath,
  Wrench,
  Hammer,
  Settings,
  Gauge,
  Thermometer,
  Flame,
  Wind,
  Droplet
} from "lucide-react";
export const links : Array<{route:string,name:string,icon?: any}> = [
    { route : '/' , name : 'acceuil' , icon:  Home  },
    { route : '/about' , name : 'À propos' , icon:  Info  },
    { route : '/services' , name : 'nos services', icon:  ShowerHead  },
    { route : '/contact' , name : 'contact' , icon:  Contact  },
    { route : '/gallery' , name : 'Galerie' , icon:  Images  },
]

export const admin_links : Array<{route:string,name:string,icon?: any}> = [
  { route : '/admin' , name : 'Acceuil' , icon : Home },
  { route : '/admin/services' , name : 'Services' , icon : ShowerHead },
  { route : '/admin/messages' , name : 'Messages' , icon : MessageCircle },
  { route : '/admi' , name : 'Contacts' , icon : Contact },
  { route : '/admi' , name : 'Gallerie' , icon : Images },
  { route : '/admi' , name : 'Compte' , icon : User },
  { route : '/admn' , name : 'Déconnexion' , icon : LogOut },
]

export const example_chart_data = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

export const plumbingIcons = [
  { value: "shower", label: "Douche", icon: ShowerHead },
  { value: "droplets", label: "Gouttes d'eau", icon: Droplets },
  { value: "droplet", label: "Goutte", icon: Droplet },
  { value: "waves", label: "Vagues", icon: Waves },
  { value: "bath", label: "Baignoire", icon: Bath },
  { value: "wrench", label: "Clé", icon: Wrench },
  { value: "hammer", label: "Marteau", icon: Hammer },
  { value: "settings", label: "Réglages", icon: Settings },
  { value: "gauge", label: "Jauge", icon: Gauge },
  { value: "thermometer", label: "Thermomètre", icon: Thermometer },
  { value: "flame", label: "Flamme", icon: Flame },
  { value: "wind", label: "Vent/Air", icon: Wind },
  { value: "pipette", label: "Pipette", icon: Pipette },
]

export const colorAccounts = ["#b91c1c","#c2410c","#be185d","#3730a3","#0369a1","#042f2e","#14532d","#1a2e05"]
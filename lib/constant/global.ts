import React from 'react';
import {
  Contact,
  Home,
  Images,
  Info,
  Menu,
  ShowerHead,
  GalleryThumbnails,
  LogOut,
  MessageCircle,
  User,
  LucideIcon,
} from 'lucide-react';
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
  Droplet,
} from 'lucide-react';
import translations from '../translation/main';



export const getLinks = (lang : "fr" | "ar") : Array<{ route: string; name: string; icon?: any }> => [
  { route: '/', name: translations[lang]['Header_Lien_Accueil'], icon: Home },
  { route: '/about', name: translations[lang]['Header_Lien_A_Propos'], icon: Info },
  { route: '/services', name: translations[lang]['Header_Lien_Services'], icon: ShowerHead },
  { route: '/contact', name: translations[lang]['Header_Lien_Contact'], icon: Contact },
  { route: '/gallery', name: translations[lang]['gallerie'], icon: Images },
];

export const get_admin_links = (lang : "fr" | "ar") : Array<{ route: string; name: string; icon?: any }> => [
  { route: '/admin', name: translations[lang]['admin_acceuil'], icon: Home },
  { route: '/admin/services', name: translations[lang]['admin_services'], icon: ShowerHead },
  { route: '/admin/messages', name: translations[lang]['messages'], icon: MessageCircle },
  { route: '/admin/contact', name: translations[lang]['contacts'], icon: Contact },
  { route: '/admin/gallery', name: translations[lang]['gallerie'], icon: Images },
  { route: '/admin/account', name: translations[lang]['compte'], icon: User },
  { route: '/admn', name: translations[lang]['deconnexion'], icon: LogOut },
];

export const search_mapper: Array<{
  route: string;
  key_words: Array<string>;
  icon?: any;
}> = [
  {
    route: '/admin',
    key_words: ['acceuil', 'statistiques', 'bienvenu', 'dashboard', 'home'],
    icon: Home,
  },
  {
    route: '/admin/services',
    key_words: ['services', 'prestations', 'offres'],
    icon: ShowerHead,
  },
  {
    route: '/admin/messages',
    key_words: ['messages', 'chat', 'conversation', 'communication'],
    icon: MessageCircle,
  },
  {
    route: '/admin/contact',
    key_words: ['contacts', 'coordonnées', 'adresse'],
    icon: Contact,
  },
  {
    route: '/admin/gallery',
    key_words: ['gallerie', 'images', 'photos', 'media'],
    icon: Images,
  },
  {
    route: '/admin/account',
    key_words: ['compte', 'profil', 'utilisateur', 'paramètres'],
    icon: User,
  },
  {
    route: '/admn',
    key_words: ['déconnexion', 'logout', 'sortir', 'quitter'],
    icon: LogOut,
  },
];

export const example_chart_data = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];

export const get_plumbingIcons = (lang:"fr"|"ar") : any => [
  { value: 'Shower', label: translations[lang].douche, icon: ShowerHead },
  { value: 'Droplets', label: translations[lang].gouttes_eau, icon: Droplets },
  { value: 'Droplet', label: translations[lang].goutte, icon: Droplet },
  { value: 'Waves', label: translations[lang].vagues, icon: Waves },
  { value: 'Bath', label: translations[lang].baignoire, icon: Bath },
  { value: 'Wrench', label: translations[lang].cle, icon: Wrench },
  { value: 'Hammer', label: translations[lang].marteau, icon: Hammer },
  { value: 'Settings', label: translations[lang].reglages, icon: Settings },
  { value: 'Gauge', label: translations[lang].jauge, icon: Gauge },
  { value: 'Thermometer', label: translations[lang].thermometre, icon: Thermometer },
  { value: 'Flame',label: translations[lang].flamme, icon: Flame },
  { value: 'Wind',label: translations[lang].vent_air, icon: Wind },
  { value: 'Pipette',label: translations[lang].pipette, icon: Pipette },
];

export const colorAccounts = [
  '#b91c1c',
  '#c2410c',
  '#be185d',
  '#3730a3',
  '#0369a1',
  '#042f2e',
  '#14532d',
  '#1a2e05',
];

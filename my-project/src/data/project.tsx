import { projectsList } from "@/types/dataList";

//Icons
import { FaReact, FaNodeJs, FaLaravel, FaSass } from "react-icons/fa";
import { RiSvelteFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

export const projectsWebJulieList: projectsList[] = [
    {
        img: "paca-destinations.png",
        title: "Paca-destinations",
        icons: [FaReact, BiLogoTypescript, RiNextjsFill],
        description: "Paca-destinations présente des idées de destinations dans la région Provence-Alpes-Côte d'Azur. Les utilisateurs peuvent créer un compte et accéder à leur profil.",
        baseUrl: "https://paca-destinations-g6aocnh3d-julie-garvis-projects.vercel.app/"
    },
    {
        img: "evasion-trip.png",
        title: "Evasion-Trip",
        icons: [FaReact, FaSass, FaNodeJs], 
        description: "Paca-destinations présente des idées de destinations dans la région Provence-Alpes-Côte d'Azur. Les utilisateurs peuvent créer un compte et accéder à leur profil.",
        baseUrl: "https://evasion-trip.com/"
    },
    {
        img: "fitcode-fitness.png",
        title: "Fitcode-Fitness",
        icons: [RiSvelteFill, FaSass, FaLaravel],  
        description: "Paca-destinations présente des idées de destinations dans la région Provence-Alpes-Côte d'Azur. Les utilisateurs peuvent créer un compte et accéder à leur profil.",
        baseUrl: "https://fitcode-fitness.com/"
    },
];
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
        description: "Evasion-trip est une agence de voyage fictive qui propose des voyages dans le monde entier.",
        baseUrl: "https://evasion-trip.com/"
    },
    {
        img: "fitcode-fitness.png",
        title: "Fitcode-Fitness",
        icons: [RiSvelteFill, FaSass, FaLaravel],  
        description: "Fitcode Fitness est une salle de sport proposant des programmes sportifs. L'application est accessible uniquement aux membres qui ont créé un compte.",
        baseUrl: "https://fitcode-fitness.com/"
    },
];
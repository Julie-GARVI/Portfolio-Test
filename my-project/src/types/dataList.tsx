import { IconType } from "react-icons";

export interface skillList {
    logo: string;
    technology: string;
}

export interface projectsList {
    img: string;
    title: string;
    icons: IconType[]
    description: string;
    baseUrl: string;
}

export interface valuesList {
    icon: IconType
    title: string;
    description: string;
}



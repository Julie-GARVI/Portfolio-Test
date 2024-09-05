import { valuesList } from "@/types/dataList";

//Icons
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { BsSearchHeart } from "react-icons/bs";

export const valuesJulieList: valuesList[] = [
    {
        title: "Authenticité",
        icon: FaHandHoldingHeart,
        description: "Je privilégie la qualité dans mon travail et prends le temps d'échanger avec vous sur les objectifs de votre projet pour répondre au mieux à vos attentes."
    },
    {
        title: "Créativité",
        icon: FaRegLightbulb, 
        description: "J'utilise des technologies modernes pour créer des interfaces qui reflètent l'image de votre entreprise. Toujours à la recherche de nouvelles idée, je saurais m'adapter à vos besoins."
    },
    {
        title: "Passion",
        icon: BsSearchHeart,
        description: "Autodidacte et passionnée par la création numérique, je serais ravie de vous accompagner à chaque étape de votre projet et de vous apporter des solutions digitales."
    }
];
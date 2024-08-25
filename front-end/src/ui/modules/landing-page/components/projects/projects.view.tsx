//ARRAY
import { projectsWebJulieList } from "@/data/projects";

import { Container } from "@/ui/components/container/container";

//CONTEXT
import { useTheme } from "@/context/darkModeContext";

//IMG & iCONS
import Image from "next/image";
import { IconType } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";

//DESIGN-SYSTEM
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typographie/typography";

//LIB
import { v4 as uuidv4 } from 'uuid';

export const ProjectsView = () => {

    const { theme } = useTheme();

    const projectList = projectsWebJulieList.map((project) => (
        <div key={uuidv4()} className="relative mx-auto group w-full h-[400px] transition-transform duration-500 s">

        {theme && <div className="absolute inset-0 bg-black opacity-20 z-10"></div>}

        <Image
            fill
            src={`/assets/images/${project.img}`}
            alt={`Illustration de ${project.title}`}
            className="relative object-cover rounded"
        />
           
            <div className="absolute left-0 bottom-0 w-full h-0 bg-gradient-to-t from-primary-light dark:from-primary-dark to-gray-600 rounded dark:to-gray-600 overflow-hidden flex flex-col items-center justify-center transition-[height] duration-500 group-hover:h-full space-y-2">
                <Typography 
                    variant="caption"
                    component="span"
                    theme="white"
                    weight="medium"
                >
                    {project.title}
                </Typography>
                <ul className="flex space-x-2 mt-2">
                    {project.icons.map((Icon: IconType) => (
                        <li key={uuidv4()} className="text-white">
                            <Icon size={25} />
                        </li>
                    ))}
                </ul>
                <Typography 
                    variant="body-sm"
                    component="p"
                    theme="white"
                    className="text-center"
                >
                    {project.description}
                </Typography>
                <Button
                    key={uuidv4()}
                    variant="ico"
                    icon={{icon: FaExternalLinkAlt}}
                    baseUrl={project.baseUrl}
                    className="z-20"
                />
            </div>
        </div>
    ));

    return (
        <article className="bg-white dark:bg-black">
            <Container className="space-y-6">
                <Typography weight="medium">Mes projets</Typography>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectList}
                </div>
            </Container>
        </article>
    );
};
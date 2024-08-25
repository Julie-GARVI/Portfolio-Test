//ARRAY
import { skillsTechnolgiesList } from "@/data/skills"

//IMG & ICON
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";

import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/typographie/typography"

export const SkillsView = () => {

    const technologiesList = skillsTechnolgiesList.map((skill) => (
        <div  key={uuidv4()} className="bg-white dark:bg-gray-700 flex flex-col items-center justify-center rounded shadow p-4 space-y-1 text-center">
            <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden">
                <Image 
                    fill
                    src={`../assets/svg/${skill.logo}`}
                    alt={`Illustration du logo de ${skill.technology}`}
                    className="object-scale-down blur-xl"
                />
                  <Image 
                    fill
                    src={`../assets/svg/${skill.logo}`}
                    alt={`Illustration du logo de ${skill.technology}`}
                    className="object-scale-down"
                />
            </div>
                <Typography 
                    variant="caption"
                    component="span"
                    theme="gray-700"
                    weight="medium"
                    >{skill.technology}
                </Typography>
                <Typography 
                    variant="body-sm"
                    component="p"
                    className="flex-grow"
                    >{skill.description}
                </Typography>
                
        </div>
    ))
    

    return(
        <section className="bg-gray-200 dark:bg-gray-800">
            <Container className="space-y-8">
                <Typography weight="medium">Mes compétences</Typography>
                <div className="bg-gray-200 grid grid-cols-2 lg:grid-cols-5 gap-10 dark:bg-gray-800">
                    {technologiesList}
                </div>
            </Container>
        </section>
    )
}
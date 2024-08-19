//ARRAY
import { skillsTechnolgiesList } from "@/data/skills"

//IMG & ICON
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";

import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/typographie/typography"

export const SkillsView = () => {

    const technologiesList = skillsTechnolgiesList.map((skill) => (
        <div  key={uuidv4()} className="bg-white flex flex-col items-center justify-center rounded shadow p-4">
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
            <div className="text-center">
                <Typography 
                    variant="caption"
                    component="span"
                    theme="gray-600"
                    weight="medium"
                    >{skill.technology}
                </Typography>
                <Typography 
                    variant="body-base"
                    component="p"
                    >Présentation de la technologie
                </Typography>
                
            </div>
        </div>
    ))
    

    return(
        <section className="bg-gray-200">
            <Container className="space-y-8">
                <Typography weight="medium">Mes compétences</Typography>
                <div className="bg-gray-200 grid grid-cols-5 gap-10 p-6 ">
                    {technologiesList}
                </div>
            </Container>
        </section>
    )
}
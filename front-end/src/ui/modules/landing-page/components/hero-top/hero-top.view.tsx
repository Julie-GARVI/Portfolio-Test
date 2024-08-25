//IMG & ICO
import Image from "next/image"
import { RiArrowRightLine } from "react-icons/ri";

//COMPONENTS
import { Container } from "@/ui/components/container/container"
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";

//DESIGN-SYSTEM
import { Typography } from "@/ui/design-system/typographie/typography"
import { Button } from "@/ui/design-system/button/button"

//Context
import { useTheme } from "@/context/darkModeContext";

export const HeroTopView = () => {

    const { theme } = useTheme();

    return(
        <section className="bg-white dark:bg-black">
            <Container className="flex flex-col md:flex-row justify-between gap-5">
                {!theme

                ? <Image
                src="/assets/images/julie-hero.jpg"
                alt="Illustration de Julie"
                width={400}
                height={150}
                className="hidden md:block rounded"
            />
                :  <Image
                src="/assets/images/julie-hero-dark.jpg"
                alt="Illustration de Julie"
                width={400}
                height={150}
                className="hidden md:block rounded"
            />
            
             }
    
                <div className="flex flex-col justify-between">
                    <div className="max-w-3xl space-y-5 pr-5">
                        <Typography weight="medium">Mes services</Typography>
                        <Typography 
                            variant="heading3" 
                            component="h3" 
                            theme="primary">
                            <strong>
                            Développeuse Web Freelance - Création de sites sur Mesure
                            </strong>
                        </Typography>
                        <Typography 
                            variant="body-base" 
                            component="p" 
                            >
                            Je suis Julie Garvi, une développeuse web freelance passionnée par la création de sites internet. Mon objectif est d&apos;aider les entreprises et les entrepreneurs à se démarquer en ligne grâce à des solutions web modernes, fonctionnelles et esthétiques. <br />Je crée sur mesure tous types de sites internet tels que des sites vitrines, des portfolios et des boutiques en ligne. Autodidacte et passionnée, je vous accompagne sur toutes les étapes de votre projet web, de la conception (analyses besoins, maquettage...), au développement et jusqu&apos;à la mise en production du site.                                
                        </Typography>
                        <Button 
                            size="medium" 
                            variant="secondary" 
                            baseUrl="../julie-garvi-developpeuse-web.pdf"
                            download={true}
                            className="mt-5"
                            icon={{icon: RiArrowRightLine}}
                            >
                            <Typography 
                                variant="caption"
                                component="span" 
                                theme="primary"
                                className="mr-1.5 mb-1"
                                >
                                Voir mes services
                            </Typography> 
                        </Button>
                    </div>
                    <SocialNetworksButtons className="mt-5" />
                </div>
            </Container>
        </section>
    )
}
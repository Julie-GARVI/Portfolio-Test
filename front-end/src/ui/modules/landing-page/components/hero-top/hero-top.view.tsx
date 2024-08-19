//IMG & ICO
import Image from "next/image"
import { RiArrowRightLine } from "react-icons/ri";

//COMPONENTS
import { Container } from "@/ui/components/container/container"
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";

//DESIGN-SYSTEM
import { Typography } from "@/ui/design-system/typographie/typography"
import { Button } from "@/ui/design-system/button/button"


export const HeroTopView = () => {

    return(
        <section className="bg-white ">
            <Container className="flex flex-col md:flex-row justify-between gap-5">
                <Image
                    src="/assets/images/julie-hero.jpg"
                    alt="Illustration de Julie"
                    width={400}
                    height={150}
                    className="rounded"
                />
                <div className="flex flex-col justify-between">
                    <div className="max-w-3xl space-y-5 pr-5">
                        <Typography weight="medium">Mes services</Typography>
                        <Typography 
                            variant="heading3" 
                            component="h3" 
                            theme="primary-light">
                            <strong>
                                Création de sites internet, boutiques en ligne, portfolios
                            </strong>
                        </Typography>
                        <Typography 
                            variant="body-base" 
                            component="p" 
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis ante vitae eros fermentum, nec facilisis justo dapibus. Sed vestibulum, libero ut vehicula maximus, turpis felis ultrices risus, nec vulputate nulla risus a sapien. Mauris et urna a tortor bibendum vestibulum. Fusce ut turpis vitae lectus elementum hendrerit. Integer dictum turpis ac eros elementum, eu feugiat risus dapibus. Proin varius metus sit amet est elementum, vel fringilla nisi auctor.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis ante vitae eros fermentum, nec facilisis justo dapibus. Sed vestibulum, libero ut vehicula maximus, turpis felis ultrices risus, nec vulputate nulla risus a sapien. Mauris et urna a tortor bibendum vestibulum. Fusce ut turpis vitae lectus elementum hendrerit. Integer dictum turpis ac eros elementum, eu feugiat risus dapibus. Proin varius metus sit amet est elementum, vel fringilla nisi auctor.
                                
                        </Typography>
                        <Button 
                            size="medium" 
                            variant="secondary" 
                            icon={{icon: RiArrowRightLine}}
                            >
                                <Typography 
                                    variant="caption"
                                    component="span" 
                                    theme="primary-light"
                                    className="mr-1.5 mb-1"
                                    >
                                    Voir mes services
                                </Typography> 
                        </Button>
                    </div>
                    <SocialNetworksButtons />
                </div>
            </Container>
        </section>
    )
}
//ARRAY
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typographie/typography";


export const BackgroundView = () => {
    return (
        <section className="sticky top-0 left-0 -z-10 h-[300px] flex flex-col items-center justify-center mt-20 bg-[url('/assets/images/contact-background.jpg')] dark:bg-[url('/assets/images/world-background.jpg')]">
            <div className="absolute inset-0 bg-gray-400 opacity-50 -z-10 dark:bg-gray-800"></div>
            <Container className="space-y-6">
                <Typography
                    variant="heading2"
                    component="h2"
                    weight="medium"
                >
                    Contact
                </Typography>
                <Typography 
                    variant="body-base" 
                    component="p"
                >
                    Je suis disponible pour discuter de vos projets ou répondre à vos questions. <br /> N&apos;hésitez pas à me contacter via le formulaire ci-dessous ou par email pour toute demande ou collaboration.
                </Typography>
            </Container>
        </section>
    );
};
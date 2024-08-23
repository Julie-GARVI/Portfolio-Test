//ARRAY
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typographie/typography";


export const BackgroundView = () => {
    return (
        <section className="sticky top-0 left-0 -z-10 h-[300px] flex flex-col items-center justify-center mt-20 bg-[url('/assets/images/contact-background.jpg')]">
            <div className="absolute inset-0 bg-gray-400 opacity-50 -z-10 dark:bg-black"></div>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis ante vitae eros fermentum, nec facilisis justo dapibus. Sed vestibulum, libero ut vehicula maximus, turpis felis ultrices risus, nec vulputate nulla risus a sapien. Mauris et urna a tortor bibendum vestibulum. Fusce ut turpis vitae lectus elementum hendrerit. Integer dictum turpis ac eros elementum, eu feugiat risus dapibus. Proin varius metus sit amet est elementum, vel fringilla nisi auctor.
                </Typography>
            </Container>
        </section>
    );
};
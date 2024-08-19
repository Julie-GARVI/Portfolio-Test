import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/typographie/typography"
import { TypeAnimation } from 'react-type-animation';

export const HeaderView = () => {

    return(
        <>
            <header className="sticky top-0 left-0 mt-5 -z-10 bg-[url('/assets/images/julie-background.png')] bg-gray-100 bg-cover bg-right 2xl:bg-center h-screen">
                <Container className="md:space-y-5 max-sm:pt-[100%] pt-[250px] ">
                    <Typography 
                    shadow="shadow"
                    >
                        Julie GARVI
                    </Typography>
                    <Typography 
                    variant="heading1"
                    component="h1"
                    shadow="shadow"
                    >
                    <strong>Développeuse web</strong>
                    </Typography>
                    
                    <TypeAnimation
                    sequence={[
                        'Freelance',
                        1000, 
                        'Font-end',
                        1000,
                        'Back-end',
                        1000,
                    ]}
                    wrapper="h1"
                    speed={35}
                    style={{ fontSize: '60px', color: "#f66b80", fontWeight: "600", textShadow:'1px 1px 2px rgba(0, 0, 0, 0.3)'}}
                    repeat={Infinity}
                    />
                    
                </Container>
            </ header>
        </>
    )
}
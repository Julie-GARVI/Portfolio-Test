import { FormType } from "@/types/form"

import Image from "next/image";

import { Container } from "@/ui/components/container/container";
import { ContactForm } from "./contact-form.view";

//DESIGN-SYSTEM
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typographie/typography";

interface Props {
    form: FormType;
}

export const FormContactView = ({form}:Props) => {

    return(
        <section className="bg-white">
            <Container className="flex flex-row gap-5 items-end justify-center">
                <Image
                    src="/assets/svg/smartphone.svg"
                    alt="Illustration d'un smartphone img freepik"
                    width={350}
                    height={350}
                    className="hidden md:block rounded"
                    />
     
                    <Box>
                        <Typography 
                        variant="subtitle" 
                        component="h4"
                        className="text-center"
                        >
                                Formulaire de contact :
                        </Typography>
                        <ContactForm form={form} />
                    </Box>

             
            </Container>

        </section>
    )
}
//Components
import { Container } from "../container/container";
import { SocialNetworksButtons } from "./social-networks-buttons";

//Design-system
import { Typography } from "@/ui/design-system/typographie/typography";

//Context
import { useTheme } from "@/context/darkModeContext";

//Icons
import { HiOutlineMail, HiPhone } from "react-icons/hi";


export const Footer = () => {

    const { theme } = useTheme();

    //Récupérer la date en cours
    const currentYear = new Date().getFullYear();

    const contactBlockStyle = "bg-white flex flex-row items-center gap-2 py-2 pl-4 pr-8 rounded dark:bg-gray-700"

    return (
        <footer className="bg-gray-200 border border-t-2 border-t-gray-300 z-[100] dark:bg-gray-800 dark:border-gray-700">
            <Container className=" flex flex-row justify-between gap-10 pt-16">
                <div className="space-y-2">
                    <Typography
                    variant="heading3"
                    component="h3"
                    >
                    Contact
                    </Typography>
                    <div className={contactBlockStyle}>
                        <HiOutlineMail color={!theme ? "black" : "#e5e5e5"} />
                        <Typography
                        variant="body-sm"
                        component="span"
                        >
                        julie.garvi@gmail.com
                        </Typography>
                    </div>
                    <div className={contactBlockStyle}>
                        <HiPhone color={!theme ? "black" : "#e5e5e5"} />
                        <Typography
                        variant="body-sm"
                        component="span"
                        >
                        06-98-66-31-79
                        </Typography>
                    </div>
                </div>

                <div className="flex flex-col justify-end gap-2">

                <SocialNetworksButtons />

                <Typography 
                variant="body-sm"
                component="span"
                >
                {`Made-by-Julie Garvi | ${currentYear}`}
                </Typography>

                </div>
    
            </Container>
        </footer>
    );
};
    

    
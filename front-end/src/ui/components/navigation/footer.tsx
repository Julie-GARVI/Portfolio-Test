//Components
import { Container } from "../container/container";
import { SocialNetworksButtons } from "./social-networks-buttons";

//Design-system
import { Typography } from "@/ui/design-system/typographie/typography";

//Context
import { useTheme } from "@/context/darkModeContext";

//Icons
import { HiOutlineMail, HiPhone } from "react-icons/hi";

//HOOK
import { useMediaQuery } from "react-responsive"
import { useState, useEffect } from 'react';

export const Footer = () => {

    const { theme } = useTheme();

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 640px)' })

    //Récupérer la date en cours
    const currentYear = new Date().getFullYear();

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return null
    }

    const contactBlockStyle = "bg-white flex flex-row items-center gap-2 py-2 pl-4 pr-8 rounded dark:bg-gray-700 max-w-52"

    return (
        <footer className="bg-gray-200 border border-t-2 border-t-gray-300 z-[100] dark:bg-gray-800 dark:border-gray-700">
            <Container className=" flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-10 pt-14">

                <div className="flex flex-col text-center sm:text-left">
                        <Typography
                        variant="body-base"
                        component="span"
                        >
                        Garvi Julie
                        </Typography>
                        <Typography
                        variant="body-base"
                        component="span"
                        theme="gray-700"
                        >
                        Couveuse Interface <br />
                        n°siret : 429 116 965 0055 
                        </Typography>
                        <Typography
                        variant="body-base"
                        component="span"
                        >
                        50 boulevard de Strasbourg <br />
                        83000 Toulon
                        </Typography>
                </div>
                
                <div className="space-y-2">
                    <Typography
                    variant="subtitle"
                    component="h4"
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

                {!isDesktopOrLaptop && (
                    <hr className="w-full border-gray-300 border-t-[0.1px]" />
                )}

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
    

    
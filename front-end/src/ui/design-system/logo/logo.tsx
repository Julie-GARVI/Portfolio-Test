import Image from "next/image";
import { useTheme } from "@/context/darkModeContext";

export const Logo = ()  => {

    const { theme } = useTheme();

    let sizeLogo: number = 88;

    return(
        <>
        {!theme 
        ? <Image 
         src="/assets/svg/logo.svg"
         alt="Illustration du logo"
         width={sizeLogo}
         height={sizeLogo}
         /> 
         
        : <Image 
        src="/assets/svg/logo-dark.svg"
        alt="Illustration du logo"
        width={sizeLogo}
        height={sizeLogo}
        /> 

        }
        </>
    )
}
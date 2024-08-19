import Image from "next/image";

export const Logo = ()  => {

    let sizeLogo: number = 88;

    return(
        <>
            <Image 
            src="/assets/svg/logo.svg"
            alt="Illustration du logo"
            width={sizeLogo}
            height={sizeLogo}
            />
        </>
    )
}
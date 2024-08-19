//Typoe
import { AppLinks } from "@/types/app-links";

//LIB
import clsx from "clsx";
import { FaExternalLinkAlt } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

//Icon
import { RiLinkedinFill, RiGithubFill  } from "react-icons/ri";

import { Button } from "@/ui/design-system/button/button"

interface Props {
    theme?: "gray"| "secondary"
    className?: string
}

export const SocialNetworksButtons = ({theme="gray", className}: Props) => {

    const socialNetworksLinks: AppLinks[] = [
        {
            label: "Linkedin",
            baseUrl: "https://www.linkedin.com/in/julie-garvi-4b1274193/",
            icon: RiLinkedinFill
        },
        {
            label: "Github",
            baseUrl: "https://github.com/Julie-GARVI",
            icon: RiGithubFill 
        },
    ]

    const icoList = socialNetworksLinks.map((socialNetwork) => (
        <Button 
            key={uuidv4()}
            variant="ico"
            iconTheme={theme}
            icon={{icon: socialNetwork.icon ? socialNetwork.icon: FaExternalLinkAlt}}
            baseUrl={socialNetwork.baseUrl}
        />
    ))

    return(
        <div className={clsx(className, "flex items-center gap-2.5")}>{icoList}</div>
    )
}
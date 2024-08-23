
import { Container } from "../container/container"

//LINK
import Link from "next/link"
import { ActiveLink } from "./active-link"

//DESIGN SYSTEM
import { Logo } from "@/ui/design-system/logo/logo"
import { Typography } from "@/ui/design-system/typographie/typography"
import { CheckboxToggle } from "@/ui/design-system/button/checkbox"

interface Props{}

export const Navigation = ({}: Props) => {
    const animateBorder = "absolute left-0 bottom-0 w-0 h-[2px] bg-primary-light transition-all duration-300 ease-in-out group-hover:w-full group-active:w-full";
  
    return (
      <nav className="w-full fixed top-0 left-0 bg-white border-b-2 border-gray-300 z-[100] dark:bg-primary-dark">
        <Container className="flex items-center justify-between py-6 gap-10">
          <div className="flex items-center gap-2.5">
            <Logo />
          </div>
          <div className="flex items-center gap-7">
            <Typography variant="caption" component="ul" className="relative flex flex-row items-center w-full gap-7">
              <li className="relative group hover:text-primary-light dark:hover:text-primary-dark animate">
                <ActiveLink href="/">
                  Accueil
                </ActiveLink>
                <span className={animateBorder} />
              </li>
              <li className="relative group hover:text-primary-light dark:hover:text-primary-dark animate">
                <ActiveLink href="/contact">
                  Contact
                </ActiveLink>
                <span className={animateBorder} />
              </li>
              <CheckboxToggle />
            </Typography>
          </div>
        </Container>
      </nav>
    );
  }
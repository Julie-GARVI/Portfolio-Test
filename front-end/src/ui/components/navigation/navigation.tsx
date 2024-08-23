
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

    const animateBorderStyle = "absolute left-0 bottom-0 w-0 h-[2px] bg-primary-light dark:bg-primary-dark transition-all duration-300 ease-in-out group-hover:w-full group-active:w-full";
    const listStyle = "relative group hover:text-primary-light dark:hover:text-primary-dark dark:text-white animate"
  
    return (
      <nav className="w-full fixed top-0 left-0 bg-white border-b-2 border-gray-300 dark:border-gray-700 z-[100] dark:bg-black">
        <Container className="flex items-center justify-between py-6 gap-10">
          <div className="flex items-center gap-2.5">
            <Logo />
          </div>
          <div className="flex items-center gap-7">
            <Typography variant="caption" component="ul" className="relative flex flex-row items-center w-full gap-7">
              <li className={listStyle}>
                <ActiveLink href="/">
                  Accueil
                </ActiveLink>
                <span className={animateBorderStyle} />
              </li>
              <li className={listStyle}>
                <ActiveLink href="/contact">
                  Contact
                </ActiveLink>
                <span className={animateBorderStyle} />
              </li>
              <CheckboxToggle />
            </Typography>
          </div>
        </Container>
      </nav>
    );
  }
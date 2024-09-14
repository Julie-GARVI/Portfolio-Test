import { Container } from "../container/container"

// LINK
import { ActiveLink } from "./active-link"

// Icons
import { MdOutlineWbSunny } from "react-icons/md"
import { PiMoonLight } from "react-icons/pi"
import { RxCross1 } from "react-icons/rx"
import { IoMdMenu } from "react-icons/io"

// CONTEXT
import { useTheme } from "@/context/darkModeContext"

// DESIGN SYSTEM
import { Logo } from "@/ui/design-system/logo/logo"
import { Typography } from "@/ui/design-system/typographie/typography"

// HOOKS
import { CheckboxToggle } from "@/ui/design-system/button/checkbox"
import { useMediaQuery } from "react-responsive"
import { useToggle } from "@/hooks/use-toggle"
import { useState, useEffect } from 'react';

interface Props {}

export const Navigation = ({}: Props) => {

  const { value: isMenuOpen, toggle: toggleMenu } = useToggle()

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' })
  
  const { theme } = useTheme()
  
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  const animateBorderStyle = "absolute left-0 bottom-0 w-0 h-[2px] bg-primary-light dark:bg-primary-dark transition-all duration-300 ease-in-out group-hover:w-full group-active:w-full"
  const listStyle = "relative group hover:text-primary-light dark:hover:text-primary-dark dark:text-white animate"

  const itemsList = (
    <Typography
      variant="caption"
      component="ul"
      className={`flex ${isMenuOpen ? 'flex-col gap-5 items-center' : 'flex-row items-center w-full gap-7'}`}
    >
      <li className={listStyle}>
        <ActiveLink href="/">Accueil</ActiveLink>
        <span className={animateBorderStyle} />
      </li>
      <li className={listStyle}>
        <ActiveLink href="/contact">Contact</ActiveLink>
        <span className={animateBorderStyle} />
      </li>
      <div className="flex flex-row items-center gap-2">
        <CheckboxToggle />
        {theme ? <MdOutlineWbSunny size={20} /> : <PiMoonLight size={20} />}
      </div>
    </Typography>
  )

  return (
    <nav className="w-full fixed top-0 left-0 bg-white border-b-2 border-gray-300 dark:border-gray-700 z-[100] dark:bg-black">
      <Container className={`flex ${!isMenuOpen ? 'justify-between py-6 gap-10' : 'justify-center'}`}>
        {!isMenuOpen && (
          <div className="flex items-center gap-2.5">
            <Logo />
          </div>
        )}

        <div className="flex items-center gap-7">
          {!isDesktopOrLaptop && !isMenuOpen ? (
            <IoMdMenu size={40} className="cursor-pointer" onClick={toggleMenu} color={theme ? "#fff" : "#000"} />
          ) : isMenuOpen && !isDesktopOrLaptop && (
            <>
              <div className="absolute top-8 left-8">
                <RxCross1 size={30} onClick={toggleMenu} color={theme ? "#fff" : "#000"} />
              </div>
              {itemsList}
            </>
          )}

          {isDesktopOrLaptop && itemsList}
        </div>
      </Container>
    </nav>
  )
}
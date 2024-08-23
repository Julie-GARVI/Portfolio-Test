import { ThemeContextType } from "@/types/theme";

import { useToggle } from "@/hooks/use-toggle";

import {ReactNode, createContext, useCallback, useContext} from "react";
  
  interface Props {
    children: ReactNode;
  }

  export const ThemeContext = createContext<ThemeContextType>({
    theme: false, 
    toggleTheme: () => {},
  });
  
  const ThemeContextProvider = ({ children }: Props) => {

    const { value: theme, setValue: setTheme } = useToggle({ initial: false });
  
    const toggleTheme = useCallback(() => {
      setTheme((prev) => !prev);
      document.body.classList.toggle("dark");
    }, [theme]);

    const value = {
      theme,
      toggleTheme,
    };

    return (
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
  };
  export default ThemeContextProvider;
  
  export const useTheme = () => useContext(ThemeContext);

import { ThemeContextType } from "@/types/theme";

import {ReactNode, createContext, useCallback, useContext, useState,} from "react";
  
  interface Props {
    children: ReactNode;
  }

  export const ThemeContext = createContext<ThemeContextType>({
    theme: false, 
    toggleTheme: () => {},
  });
  
  const ThemeContextProvider = ({ children }: Props) => {
    
    const [theme, setTheme] = useState(false);
  
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

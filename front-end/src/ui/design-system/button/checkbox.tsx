import clsx from "clsx";
import { useTheme } from "@/context/darkModeContext";

interface Props {
    type?: string;
    className?: string;
}

export const CheckboxToggle = ({
    type = "checkbox",
    className,
  }: Props) => {
    const { theme, toggleTheme } = useTheme(); 
  
    return (
      <label htmlFor="check" className={clsx("relative inline-block w-14 h-8 cursor-pointer", className)}>
        <input 
          type="checkbox"
          className="opacity-0 w-0 h-0 peer" 
          onChange={toggleTheme} 
          checked={theme} // Assurez-vous que la valeur 'theme' est utilisée ici
          id="check"
        />
        <span
          className={clsx(
            "absolute inset-0 rounded-full border transition-colors duration-500 ease-in-out",
            theme ? "bg-gray-700 border-gray-500" : "bg-gray-300 border-gray-200"
          )}
        ></span>
        <span
          className={clsx(
            "absolute top-1/2 left-1 w-6 h-6 rounded-full bg-white transform -translate-y-1/2 transition-all duration-200 ease-in-out",
            theme ? "translate-x-6 bg-gray-700" : "bg-white"
          )}
        ></span>
      </label>
    );
  };
import clsx from "clsx";
import { useToggle } from "@/hooks/use-toggle";

export const CheckboxToggle = () => {
    return (
        <label className="relative inline-block w-14 h-8 cursor-pointer">
            <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
            <span className="absolute inset-0 bg-gray-700 border border-gray-500 rounded-full peer-checked:bg-white transition-colors duration-500 ease-in-out peer-checked:bg-blue-500"></span>
            <span className="absolute top-1/2 left-1 w-6 h-6 bg-white rounded-full transform -translate-y-1/2 transition-all duration-200 ease-in-out peer-checked:translate-x-6 peer-checked:bg-gray-700"></span>
        </label>
    );
};
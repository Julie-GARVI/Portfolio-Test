import { Spinner } from "../spinner/spinner";
//LIB
import clsx from "clsx";

//TYPE
import { IconProps } from "@/types/iconProps";

interface Props {
    size?: "small" | "medium"
    variant?: "accent" | "secondary" | "outline" | "disabled" | "ico";
    icon?: IconProps; 
    iconTheme?: "gray" | "secondary";
    disabled?: boolean;
    isLoading?: boolean;
    type?: "submit" | "button"
    baseUrl?: string,
    download?: boolean,
    children?: React.ReactNode;
    className?: string,
    //linkType?: LinkTypes;
    action?: Function;
}

export const Button = ({
    size = "small",
    variant = "accent",
    icon,
    iconTheme = "secondary",
    disabled,
    isLoading,
    baseUrl,
    download = false,
    type = "button",
    children,
    className,
    action = () => {},
}: Props) => {

    let variantStyles: string = "flex items-center justify-content", sizeStyles: string = "text-caption flex flex-row items-center justify-center", icoSize: number = 0

    switch (variant) {
        case "accent": //Default
            variantStyles = "bg-primary-light hover:bg-primary-300 text-white rounded"
            break;
        case "secondary": 
            variantStyles = "bg-secondary-light hover:bg-secondary-300 text-primary-light rounded"
            break;
        case "outline": 
            variantStyles = "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-700 rounded"
            break;
        case "disabled": 
            variantStyles = "bg-gray-400 border border-gray-500 text-gray-400 rounded cursor-not-allowed"
            break;
        case "ico": 
            if (iconTheme === "secondary") {//Default
                variantStyles = "bg-secondary-light  hover:bg-secondary-30 w-[50px] h-[50px]  text-primary-light rounded-full "
                icoSize = 15;
            }
            if (iconTheme === "gray") {
                variantStyles = "bg-gray-300 hover:bg-gray-200 text-gray-700 w-[50px] h-[50px] rounded-full"
                icoSize = 20;
            }
    }

    switch (size) {
        case "small":
            sizeStyles = `${sizeStyles} px-[10px] py-[6px]`

            break;
        case "medium": //Default
            sizeStyles = `${sizeStyles} font-medium px-[12px] py-[9px] ` 
            break;
    }

    const handleClick = () => {
        if (action) {
            action()
        }
    }

    const buttonContent = (
        <>
        {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                        <Spinner variant="secondary" />
                </div>
            )}

            {/* <div className={clsx(isLoading && "invisible")}>
                {icon && variant === "ico" && <icon.icon size={10} />}
            </div> */}

            {children}

            {icon &&  (
                <icon.icon size={icoSize} />
            )}
        </>
    )

    const buttonElement = (
        <button
        type={type}
        className={clsx(
            variantStyles, 
            sizeStyles,  
            isLoading && "cursor-not-allowed",
            "relative animate",
            className
        )}
        onClick={handleClick}
        disabled={disabled || isLoading}
    >
        {buttonContent}
    </button>

    )

    //Accède au lien externe
    if (baseUrl) {
        return (
            <a href={baseUrl} target="_blank" {...(download ? { download: true } : {})}>
                {buttonElement}
            </a>
        );
    }

    return buttonElement
};
